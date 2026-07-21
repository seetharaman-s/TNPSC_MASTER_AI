from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
    TokenResponse,
    AuthUserResponse
)

from app.services.auth_service import AuthService

from app.schemas.auth import (
    RefreshTokenRequest
)

from app.dependencies.auth import (
    get_current_user
)

from app.models.user import User

from app.schemas.auth import (
    UpdateProfileRequest,
    ChangePasswordRequest,
    ForgotPasswordRequest,
    ResetPasswordRequest,
    MessageResponse,
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


# ==========================================================
# Register
# ==========================================================

@router.post(
    "/register",
    response_model=AuthUserResponse,
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


# ==========================================================
# Login
# ==========================================================

@router.post(
    "/login",
    response_model=TokenResponse,
    status_code=status.HTTP_200_OK,
)
def login(
    payload: LoginRequest,
    db: Session = Depends(get_db),
):

    try:

        return AuthService.login(
            db=db,
            email=payload.email,
            password=payload.password,
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
        )
    
    


# ==========================================================
# Refresh Token
# ==========================================================

@router.post(
    "/refresh",
    response_model=TokenResponse,
    status_code=status.HTTP_200_OK,
)
def refresh_token(
    payload: RefreshTokenRequest,
    db: Session = Depends(get_db),
):

    try:

        return AuthService.refresh_token(
            db=db,
            refresh_token=payload.refresh_token,
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
        )


# ==========================================================
# Logout
# ==========================================================

@router.post(
    "/logout",
    status_code=status.HTTP_200_OK,
)
def logout(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        return AuthService.logout(
            db=db,
            user_id=current_user.id,
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )


# ==========================================================
# Current User
# ==========================================================

@router.get(
    "/me",
    response_model=AuthUserResponse,
    status_code=status.HTTP_200_OK,
)
def get_current_user_profile(
    current_user: User = Depends(get_current_user),
):

    return AuthUserResponse(
        id=current_user.id,
        username=current_user.username,
        full_name=current_user.full_name,
        email=current_user.email,
        phone=current_user.phone,
        language=current_user.language,
        theme=current_user.theme,
        profile_image_url=current_user.profile_image_url,
        role=current_user.role_name,
        is_active=current_user.is_active,
        is_verified=current_user.is_verified,
        last_login=current_user.last_login,
        created_at=current_user.created_at,
        updated_at=current_user.updated_at,
    )


# ==========================================================
# Update Profile
# ==========================================================

@router.put(
    "/profile",
    response_model=AuthUserResponse,
    status_code=status.HTTP_200_OK,
)
def update_profile(
    payload: UpdateProfileRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        return AuthService.update_profile(
            db=db,
            user=current_user,
            data=payload.model_dump(exclude_unset=True),
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )


# ==========================================================
# Change Password
# ==========================================================

@router.put(
    "/change-password",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
def change_password(
    payload: ChangePasswordRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        AuthService.change_password(
            db=db,
            user=current_user,
            old_password=payload.old_password,
            new_password=payload.new_password,
        )

        return MessageResponse(
            message="Password changed successfully."
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )


# ==========================================================
# Forgot Password
# ==========================================================

@router.post(
    "/forgot-password",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
def forgot_password(
    payload: ForgotPasswordRequest,
    db: Session = Depends(get_db),
):

    try:

        AuthService.forgot_password(
            db=db,
            email=payload.email,
        )

        return MessageResponse(
            message="Password reset instructions have been sent if the email exists."
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )


# ==========================================================
# Reset Password
# ==========================================================

@router.post(
    "/reset-password",
    response_model=MessageResponse,
    status_code=status.HTTP_200_OK,
)
def reset_password(
    payload: ResetPasswordRequest,
    db: Session = Depends(get_db),
):

    try:

        AuthService.reset_password(
            db=db,
            token=payload.token,
            new_password=payload.new_password,
        )

        return MessageResponse(
            message="Password has been reset successfully."
        )

    except ValueError as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )