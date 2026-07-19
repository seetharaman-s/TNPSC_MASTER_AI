from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr


class UserBase(BaseModel):
    username: str
    full_name: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    language: str = "Tamil"
    theme: str = "light"
    profile_image: Optional[str] = None


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    language: Optional[str] = None
    theme: Optional[str] = None
    profile_image: Optional[str] = None


class UserResponse(UserBase):
    id: int
    role: str
    is_active: bool
    is_verified: bool
    last_login: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )