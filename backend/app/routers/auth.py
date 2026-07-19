from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
    TokenResponse,
    UserResponse,
    ChangePasswordRequest,
    UpdateProfileRequest,
)

from app.services.auth_service import AuthService

from app.dependencies.auth import get_current_user

from app.models.user import User


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


# --------------------------------------------------
# Register
# --------------------------------------------------

@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(
    payload: RegisterRequest,
    db: Session = Depends(get_db),
):

    try:

        user = AuthService.register(
            db=db,
            username=payload.username,
            email=payload.email,
            password=payload.password,
            full_name=payload.full_name,
            phone=payload.phone,
        )

        return user

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )


# --------------------------------------------------
# Login
# --------------------------------------------------

@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    payload: LoginRequest,
    db: Session = Depends(get_db),
):

    result = AuthService.login(
        db=db,
        email=payload.email,
        password=payload.password,
    )

    if result is None:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    return result


# --------------------------------------------------
# Current User
# --------------------------------------------------

@router.get(
    "/me",
    response_model=UserResponse,
)
def get_me(
    current_user: User = Depends(get_current_user),
):

    return current_user


# --------------------------------------------------
# Update Profile
# --------------------------------------------------

@router.put(
    "/profile",
    response_model=UserResponse,
)
def update_profile(
    payload: UpdateProfileRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return AuthService.update_profile(
        db=db,
        user=current_user,
        data=payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Change Password
# --------------------------------------------------

@router.put(
    "/change-password",
)
def change_password(
    payload: ChangePasswordRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    success = AuthService.change_password(
        db=db,
        user=current_user,
        old_password=payload.old_password,
        new_password=payload.new_password,
    )

    if not success:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect.",
        )

    return {
        "message": "Password changed successfully."
    }


# --------------------------------------------------
# Logout
# --------------------------------------------------

@router.post(
    "/logout",
)
def logout():

    return {
        "message": "Logout successful. Please remove the access token on the client."
    }