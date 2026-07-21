from datetime import datetime, timedelta, timezone
from uuid import UUID

from sqlalchemy.orm import Session

from app.core.security import (
    create_access_token,
    create_refresh_token,
    hash_password,
    verify_password,
)
from app.models.refresh_token import RefreshToken
from app.models.role import Role
from app.models.user import User
from app.repositories.auth_repository import AuthRepository
from app.schemas.auth import AuthUserResponse
from datetime import datetime, timedelta, timezone

from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
)


class AuthService:
    """
    Authentication Service
    """

    # =====================================================
    # Register
    # =====================================================

    @staticmethod
    def register(
        db: Session,
        username: str,
        email: str,
        password: str,
        full_name: str | None = None,
        phone: str | None = None,
    ) -> User:

        # Check username
        if AuthRepository.get_user_by_username(db, username):
            raise ValueError("Username already exists.")

        # Check email
        if AuthRepository.get_user_by_email(db, email):
            raise ValueError("Email already exists.")

        # Default role
        role = (
            db.query(Role)
            .filter(Role.name == "user")
            .first()
        )

        if role is None:
            raise ValueError(
                "Default role 'user' not found."
            )

        # Create user
        user = User(
            username=username,
            email=email,
            full_name=full_name,
            phone=phone,
            password_hash=hash_password(password),
            role_id=role.id,
            is_active=True,
            is_verified=False,
        )

        saved_user = AuthRepository.save_user(db, user)

        return AuthUserResponse(
            id=saved_user.id,
            username=saved_user.username,
            full_name=saved_user.full_name,
            email=saved_user.email,
            role=saved_user.role.name,   # <-- convert Role object to string
            language=saved_user.language,
            theme=saved_user.theme,
            profile_image_url=saved_user.profile_image_url,
            phone=saved_user.phone,
            is_active=saved_user.is_active,
            is_verified=saved_user.is_verified,
            last_login=saved_user.last_login,
            created_at=saved_user.created_at,
        )

    # =====================================================
    # Login
    # =====================================================

    @staticmethod
    def login(
        db: Session,
        email: str,
        password: str,
    ) -> dict:

        user = AuthRepository.get_user_by_email(
            db,
            email,
        )

        if user is None:
            raise ValueError(
                "Invalid email or password."
            )

        if not user.is_active:
            raise ValueError(
                "User account is inactive."
            )

        if user.is_locked:
            raise ValueError(
                "User account is locked."
            )

        if not verify_password(
            password,
            user.password_hash,
        ):

            user.failed_login_attempts += 1

            if user.failed_login_attempts >= 5:
                user.is_locked = True

            AuthRepository.update_login(
                db,
                user,
            )

            raise ValueError(
                "Invalid email or password."
            )

        # Reset failed attempts
        user.failed_login_attempts = 0

        # Update login time
        user.last_login = datetime.now(
            timezone.utc
        )

        AuthRepository.update_login(
            db,
            user,
        )

        # JWT
        access_token = create_access_token(
            subject=str(user.id),
            extra_claims={
                "email": user.email,
                "role": user.role.name,
            },
        )

        refresh_token = create_refresh_token(
            subject=str(user.id),
        )

        # Save Refresh Token
        token_model = RefreshToken(
            user_id=user.id,
            token_hash=refresh_token,
            expires_at=datetime.now(timezone.utc) + timedelta(days=7),
        )

        AuthRepository.save_refresh_token(
            db,
            token_model,
        )

        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "token_type": "bearer",
            "expires_in": 86400,
            "user": AuthUserResponse(
                id=user.id,
                username=user.username,
                full_name=user.full_name,
                email=user.email,
                role=user.role.name,
                language=user.language,
                theme=user.theme,
                profile_image_url=user.profile_image_url,
                phone=user.phone,
                is_active=user.is_active,
                is_verified=user.is_verified,
                last_login=user.last_login,
                created_at=user.created_at,
            ),
        }

    

    # =====================================================
    # Refresh Token
    # =====================================================

    @staticmethod
    def refresh_token(
        db: Session,
        refresh_token: str,
    ) -> dict:

        payload = decode_token(refresh_token)

        if payload.get("type") != "refresh":
            raise ValueError("Invalid refresh token.")

        user_id = payload.get("sub")

        if user_id is None:
            raise ValueError("Invalid refresh token.")

        stored_token = AuthRepository.get_refresh_token(
            db,
            refresh_token,
        )

        if stored_token is None:
            raise ValueError("Refresh token not found.")

        if stored_token.revoked_at is not None:
            raise ValueError("Refresh token has been revoked.")

        if stored_token.expires_at < datetime.now(
            timezone.utc
        ):
            raise ValueError("Refresh token has expired.")

        user = AuthRepository.get_user_by_id(
            db,
            user_id,
        )

        if user is None:
            raise ValueError("User not found.")

        # Generate new tokens

        access_token = create_access_token(
            subject=str(user.id),
            extra_claims={
                "email": user.email,
                "role": user.role.name,
            },
        )

        new_refresh_token = create_refresh_token(
            subject=str(user.id),
        )

        # Revoke old refresh token

        stored_token.revoked_at = datetime.now(
            timezone.utc
        )

        AuthRepository.update_login(
            db,
            user,
        )

        # Save new refresh token

        token = RefreshToken(
            user_id=user.id,
            token_hash=new_refresh_token,
            expires_at=datetime.now(
                timezone.utc
            )
            + timedelta(days=7),
        )

        AuthRepository.save_refresh_token(
            db,
            token,
        )

        return {
            "access_token": access_token,
            "refresh_token": new_refresh_token,
            "token_type": "bearer",
            "expires_in": 86400,
            "user": AuthService.build_auth_user(user),
        }

    # =====================================================
    # Logout
    # =====================================================

    @staticmethod
    def logout(
        db: Session,
        user_id,
    ) -> dict:

        AuthRepository.delete_user_tokens(
            db,
            user_id,
        )

        return {
            "message": "Logged out successfully."
        }

    # =====================================================
    # Get Profile
    # =====================================================

    @staticmethod
    def get_profile(
        db: Session,
        user_id,
    ) -> User:

        user = AuthRepository.get_user_by_id(
            db,
            user_id,
        )

        if user is None:
            raise ValueError("User not found.")

        return user
    
        # =====================================================
    # Update Profile
    # =====================================================

    @staticmethod
    def update_profile(
        db: Session,
        user: User,
        data: dict,
    ) -> User:

        allowed_fields = {
            "full_name",
            "phone",
            "language",
            "theme",
            "profile_image_url",
        }

        for key, value in data.items():

            if (
                key in allowed_fields
                and value is not None
            ):
                setattr(user, key, value)

        return AuthRepository.update(
            db,
            user,
        )

    # =====================================================
    # Change Password
    # =====================================================

    @staticmethod
    def change_password(
        db: Session,
        user: User,
        old_password: str,
        new_password: str,
    ) -> bool:

        if not verify_password(
            old_password,
            user.password_hash,
        ):
            raise ValueError(
                "Current password is incorrect."
            )

        user.password_hash = hash_password(
            new_password,
        )

        AuthRepository.update(
            db,
            user,
        )

        return True

    # =====================================================
    # Forgot Password
    # =====================================================

    @staticmethod
    def forgot_password(
        db: Session,
        email: str,
    ) -> dict:

        user = AuthRepository.get_user_by_email(
            db,
            email,
        )

        if user is None:

            return {
                "message":
                "If the email exists, a reset link will be sent."
            }

        # -------------------------------------------------
        # TODO:
        #
        # Generate secure reset token
        # Save hashed token
        # Send email
        #
        # This can be implemented later using
        # password_reset_tokens table.
        # -------------------------------------------------

        return {
            "message":
            "Password reset instructions have been generated."
        }

    # =====================================================
    # Reset Password
    # =====================================================

    @staticmethod
    def reset_password(
        db: Session,
        token: str,
        new_password: str,
    ) -> bool:

        # -------------------------------------------------
        # TODO:
        #
        # Validate reset token
        # Find related user
        # Check expiry
        # Check revoked
        # -------------------------------------------------

        raise NotImplementedError(
            "Password reset token validation is not implemented yet."
        )
    
    @staticmethod
    def build_auth_user(user: User) -> AuthUserResponse:
        return AuthUserResponse(
            id=user.id,
            username=user.username,
            full_name=user.full_name,
            email=user.email,
            role=user.role.name,
            language=user.language,
            theme=user.theme,
            profile_image_url=user.profile_image_url,
            phone=user.phone,
            is_active=user.is_active,
            is_verified=user.is_verified,
            last_login=user.last_login,
            created_at=user.created_at,
        )
    
        return AuthService.build_auth_user(saved_user)