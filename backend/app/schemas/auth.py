from datetime import datetime
from typing import Optional
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field
from typing import Optional
from pydantic import BaseModel, EmailStr
from pydantic import Field
# -------------------------
# Register
# -------------------------

class RegisterRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=100)
    full_name: Optional[str] = None
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)
    phone: Optional[str] = None


# -------------------------
# Login
# -------------------------

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# -------------------------
# Refresh Token
# -------------------------

class RefreshTokenRequest(BaseModel):
    refresh_token: str


# -------------------------
# Change Password
# -------------------------

class ChangePasswordRequest(BaseModel):
    old_password: str
    new_password: str = Field(..., min_length=8, max_length=128)


# -------------------------
# Forgot Password
# -------------------------

class ForgotPasswordRequest(BaseModel):
    email: EmailStr


# -------------------------
# Reset Password
# -------------------------

class ResetPasswordRequest(BaseModel):
    token: str
    new_password: str = Field(..., min_length=8, max_length=128)


# -------------------------
# User Info (JWT Response)
# -------------------------

class AuthUserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    username: str
    full_name: Optional[str]
    email: EmailStr
    role: str
    language: str
    theme: str
    profile_image_url: Optional[str]
    phone: Optional[str]
    is_active: bool
    is_verified: bool
    last_login: Optional[datetime]
    created_at: datetime


# -------------------------
# Token Response
# -------------------------

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int
    user: AuthUserResponse


# -------------------------
# Generic Response
# -------------------------

class MessageResponse(BaseModel):
    message: str

class UpdateProfileRequest(BaseModel):
    full_name: Optional[str] = None
    username: Optional[str] = None
    phone: Optional[str] = None
    profile_image_url: Optional[str] = None


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(BaseModel):
    token: str
    new_password: str


class MessageResponse(BaseModel):
    message: str