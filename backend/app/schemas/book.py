from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class BookBase(BaseModel):
    title: str
    subject: str
    standard: int
    medium: str
    author: Optional[str] = None
    publisher: Optional[str] = None
    edition: Optional[str] = None
    description: Optional[str] = None
    pdf_url: Optional[str] = None
    cover_image: Optional[str] = None
    pages: int = 0
    language: str = "Tamil"
    featured: bool = False
    is_active: bool = True


class BookCreate(BookBase):
    pass


class BookUpdate(BaseModel):
    title: Optional[str] = None
    subject: Optional[str] = None
    standard: Optional[int] = None
    medium: Optional[str] = None
    author: Optional[str] = None
    publisher: Optional[str] = None
    edition: Optional[str] = None
    description: Optional[str] = None
    pdf_url: Optional[str] = None
    cover_image: Optional[str] = None
    pages: Optional[int] = None
    language: Optional[str] = None
    featured: Optional[bool] = None
    is_active: Optional[bool] = None


class BookResponse(BookBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)