from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
from sqlalchemy.orm import Session

from app.core.security import decode_token
from app.db.session import get_db
from app.models.user import User
from app.repositories.user_repository import UserRepository


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login",
)


# ==========================================================
# Current User
# ==========================================================

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> User:

    print("=" * 70)
    print("AUTHENTICATION DEBUG")
    print("=" * 70)

    try:
        print("Received Token:")
        print(token)

        payload = decode_token(token)

        print("\nDecoded Payload:")
        print(payload)

        token_type = payload.get("type")

        print("\nToken Type:")
        print(token_type)

        if token_type != "access":
            print("ERROR: Refresh token used instead of access token.")

            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token type.",
            )

        user_id = payload.get("sub")

        print("\nUser ID:")
        print(user_id)

        if not user_id:
            print("ERROR: Missing user id inside JWT.")

            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token payload.",
            )

        user = UserRepository.get_by_id(
            db=db,
            user_id=UUID(user_id),
        )

        print("\nDatabase User:")
        print(user)

        if user is None:
            print("ERROR: User not found in database.")

            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not found.",
            )

        if not user.is_active:
            print("ERROR: User account inactive.")

            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User account is inactive.",
            )

        print("\nAuthentication Successful")
        print("=" * 70)

        return user

    except JWTError as e:

        print("\nJWT ERROR")
        print(str(e))
        print("=" * 70)

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token.",
        )

    except ValueError as e:

        print("\nUUID ERROR")
        print(str(e))
        print("=" * 70)

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user id.",
        )


# ==========================================================
# Current Admin
# ==========================================================

def get_current_admin(
    current_user: User = Depends(get_current_user),
) -> User:

    if (
        current_user.role is None
        or current_user.role.name != "admin"
    ):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Administrator access required.",
        )

    return current_user


# ==========================================================
# Current Verified User
# ==========================================================

def get_current_verified_user(
    current_user: User = Depends(get_current_user),
) -> User:

    if not current_user.is_verified:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Email verification required.",
        )

    return current_user


# ==========================================================
# Active Verified User
# ==========================================================

def get_active_verified_user(
    current_user: User = Depends(get_current_verified_user),
) -> User:

    if current_user.is_locked:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account is locked.",
        )

    return current_user