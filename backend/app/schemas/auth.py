from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field


# -------------------------
# User Information
# -------------------------

class UserResponse(BaseModel):
    id: int
    username: str
    full_name: Optional[str] = None
    email: EmailStr
    role: str
    language: str
    theme: str
    profile_image: Optional[str] = None
    phone: Optional[str] = None
    is_active: bool
    is_verified: bool
    last_login: Optional[datetime] = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


# -------------------------
# Register
# -------------------------

class RegisterRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=100)
    full_name: Optional[str] = None
    email: EmailStr
    password: str = Field(..., min_length=8)
    phone: Optional[str] = None


# -------------------------
# Login
# -------------------------

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# -------------------------
# Token Response
# -------------------------

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int
    user: UserResponse


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
    new_password: str = Field(..., min_length=8)


# -------------------------
# Update Profile
# -------------------------

class UpdateProfileRequest(BaseModel):
    full_name: Optional[str] = None
    language: Optional[str] = None
    theme: Optional[str] = None
    phone: Optional[str] = None
    profile_image: Optional[str] = None


# -------------------------
# Generic Message
# -------------------------

class MessageResponse(BaseModel):
    message: str