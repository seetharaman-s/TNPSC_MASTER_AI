from typing import List
from pydantic import BaseModel, ConfigDict, Field


# ==========================================================
# Weak Topics
# ==========================================================

class WeakTopic(BaseModel):
    subject: str
    topic: str
    confidence: float = Field(..., ge=0, le=100)
    recommended_action: str


# ==========================================================
# Revision Planner
# ==========================================================

class RevisionTask(BaseModel):
    day: str
    subject: str
    topic: str
    estimated_minutes: int
    priority: str


# ==========================================================
# Recommended MCQs
# ==========================================================

class RecommendedMCQ(BaseModel):
    subject: str
    topic: str
    difficulty: str
    question_count: int


# ==========================================================
# Subject Mastery
# ==========================================================

class SubjectMastery(BaseModel):
    subject: str
    mastery_percentage: float = Field(..., ge=0, le=100)
    level: str


# ==========================================================
# Exam Readiness
# ==========================================================

class ExamReadiness(BaseModel):
    readiness_score: float = Field(..., ge=0, le=100)
    predicted_score: int
    confidence: float = Field(..., ge=0, le=100)
    recommendation: str


# ==========================================================
# Daily Goals
# ==========================================================

class DailyGoal(BaseModel):
    title: str
    description: str
    completed: bool


# ==========================================================
# Dashboard Response
# ==========================================================

class AdaptiveDashboard(BaseModel):
    weak_topics: List[WeakTopic]

    revision_plan: List[RevisionTask]

    recommended_mcqs: List[RecommendedMCQ]

    mastery: List[SubjectMastery]

    exam_readiness: ExamReadiness

    daily_goals: List[DailyGoal]

    model_config = ConfigDict(
        from_attributes=True
    )