from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class QuestionBase(BaseModel):
    quiz_id: int
    subject: str
    standard: int
    unit: int
    question: str

    option_a: str
    option_b: str
    option_c: str
    option_d: str

    correct_answer: str

    explanation: Optional[str] = None

    difficulty: str = "Medium"

    marks: int = 1

    language: str = "Tamil"

    is_active: bool = True


class QuestionCreate(QuestionBase):
    pass


class QuestionUpdate(BaseModel):
    subject: Optional[str] = None
    standard: Optional[int] = None
    unit: Optional[int] = None

    question: Optional[str] = None

    option_a: Optional[str] = None
    option_b: Optional[str] = None
    option_c: Optional[str] = None
    option_d: Optional[str] = None

    correct_answer: Optional[str] = None
    explanation: Optional[str] = None

    difficulty: Optional[str] = None
    marks: Optional[int] = None

    language: Optional[str] = None

    is_active: Optional[bool] = None


class QuestionResponse(QuestionBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)