from typing import List, Optional, Literal

from pydantic import BaseModel, ConfigDict, Field


# ---------------------------------------
# Chat
# ---------------------------------------

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    language: Literal["Tamil", "English"] = "Tamil"


class ChatResponse(BaseModel):
    reply: str
    language: str


# ---------------------------------------
# Explain Topic
# ---------------------------------------

class ExplainRequest(BaseModel):
    topic: str
    language: Literal["Tamil", "English"] = "Tamil"


class ExplainResponse(BaseModel):
    title: str
    explanation: str
    key_points: List[str]
    important_facts: List[str]
    memory_trick: Optional[str] = None


# ---------------------------------------
# MCQ Generator
# ---------------------------------------

class MCQRequest(BaseModel):
    topic: str
    difficulty: Literal["Easy", "Medium", "Hard"] = "Easy"
    number_of_questions: int = Field(default=10, ge=1, le=100)


class MCQOption(BaseModel):
    option: str


class MCQ(BaseModel):
    question: str
    options: List[MCQOption]
    answer: str
    explanation: str


class MCQResponse(BaseModel):
    topic: str
    questions: List[MCQ]


# ---------------------------------------
# Study Planner
# ---------------------------------------

class StudyPlanRequest(BaseModel):
    exam: str
    days_left: int = Field(..., gt=0)
    study_hours_per_day: float = Field(..., gt=0)


class StudyTask(BaseModel):
    day: int
    subject: str
    topic: str
    duration_hours: float


class StudyPlanResponse(BaseModel):
    exam: str
    total_days: int
    tasks: List[StudyTask]


# ---------------------------------------
# Performance Analysis
# ---------------------------------------

class PerformanceAnalysisRequest(BaseModel):
    weak_subjects: List[str]
    average_score: float
    target_exam: str


class PerformanceAnalysisResponse(BaseModel):
    readiness_percentage: float
    weak_topics: List[str]
    recommendations: List[str]
    revision_priority: List[str]


# ---------------------------------------
# Book / Notes Summary
# ---------------------------------------

class SummaryRequest(BaseModel):
    title: str
    content: str
    language: Literal["Tamil", "English"] = "Tamil"


class SummaryResponse(BaseModel):
    title: str
    summary: str
    important_points: List[str]


class AIHealthResponse(BaseModel):
    status: str
    provider: str
    model: str

    model_config = ConfigDict(from_attributes=True)