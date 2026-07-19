from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field


# ---------------------------------------------------------
# Base Schema
# ---------------------------------------------------------

class SettingBase(BaseModel):

    app_name: str = Field(
        default="TNPSC MASTER AI",
        max_length=150,
    )

    app_logo: Optional[str] = None

    footer_text: Optional[str] = None

    contact_email: Optional[EmailStr] = None

    contact_phone: Optional[str] = None

    default_language: str = Field(
        default="Tamil",
    )

    default_theme: str = Field(
        default="light",
    )

    default_exam: str = Field(
        default="Group 4",
    )

    current_affairs_enabled: bool = True

    daily_quiz_enabled: bool = True

    motivation_enabled: bool = True

    ai_explanation_enabled: bool = True

    max_upload_size_mb: int = Field(
        default=50,
        ge=1,
        le=500,
    )

    upload_path: str = Field(
        default="uploads/",
    )


# ---------------------------------------------------------
# Update Schema
# ---------------------------------------------------------

class SettingUpdate(BaseModel):

    app_name: Optional[str] = None

    app_logo: Optional[str] = None

    footer_text: Optional[str] = None

    contact_email: Optional[EmailStr] = None

    contact_phone: Optional[str] = None

    default_language: Optional[str] = None

    default_theme: Optional[str] = None

    default_exam: Optional[str] = None

    current_affairs_enabled: Optional[bool] = None

    daily_quiz_enabled: Optional[bool] = None

    motivation_enabled: Optional[bool] = None

    ai_explanation_enabled: Optional[bool] = None

    max_upload_size_mb: Optional[int] = Field(
        default=None,
        ge=1,
        le=500,
    )

    upload_path: Optional[str] = None


# ---------------------------------------------------------
# Response Schema
# ---------------------------------------------------------

class SettingResponse(SettingBase):

    id: int

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True,
    )