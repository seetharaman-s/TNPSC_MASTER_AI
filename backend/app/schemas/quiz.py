from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class QuizBase(BaseModel):
    title: str
    subject: str
    standard: int
    unit: int
    description: Optional[str] = None
    difficulty: str = "Medium"
    duration: int = 30
    total_questions: int = 0
    total_marks: int = 0
    pass_mark: int = 40
    language: str = "Tamil"
    featured: bool = False
    is_active: bool = True
    attempts: int = 0


class QuizCreate(QuizBase):
    pass


class QuizUpdate(BaseModel):
    title: Optional[str] = None
    subject: Optional[str] = None
    standard: Optional[int] = None
    unit: Optional[int] = None
    description: Optional[str] = None
    difficulty: Optional[str] = None
    duration: Optional[int] = None
    total_questions: Optional[int] = None
    total_marks: Optional[int] = None
    pass_mark: Optional[int] = None
    language: Optional[str] = None
    featured: Optional[bool] = None
    is_active: Optional[bool] = None
    attempts: Optional[int] = None


class QuizResponse(QuizBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)