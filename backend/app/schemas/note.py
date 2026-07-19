from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class NoteBase(BaseModel):
    title: str
    subject: str
    standard: int
    unit: int
    medium: str = "Tamil"
    description: Optional[str] = None
    pdf_url: Optional[str] = None
    thumbnail: Optional[str] = None
    pages: int = 0
    language: str = "Tamil"
    featured: bool = False
    is_active: bool = True
    downloads: int = 0
    views: int = 0


class NoteCreate(NoteBase):
    pass


class NoteUpdate(BaseModel):
    title: Optional[str] = None
    subject: Optional[str] = None
    standard: Optional[int] = None
    unit: Optional[int] = None
    medium: Optional[str] = None
    description: Optional[str] = None
    pdf_url: Optional[str] = None
    thumbnail: Optional[str] = None
    pages: Optional[int] = None
    language: Optional[str] = None
    featured: Optional[bool] = None
    is_active: Optional[bool] = None
    downloads: Optional[int] = None
    views: Optional[int] = None


class NoteResponse(NoteBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)