from datetime import date
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field


class StudyTask(BaseModel):
    task_id: int
    title: str
    subject: str
    topic: str
    duration_minutes: int = Field(..., ge=1)
    priority: str
    completed: bool = False

    model_config = ConfigDict(from_attributes=True)


class DailyStudyPlan(BaseModel):
    date: date
    total_study_minutes: int
    completion_percentage: float = Field(..., ge=0, le=100)
    tasks: List[StudyTask]

    model_config = ConfigDict(from_attributes=True)


class WeeklyStudyPlan(BaseModel):
    week_start: date
    week_end: date
    target_hours: float = Field(..., ge=0)
    completed_hours: float = Field(..., ge=0)
    daily_plans: List[DailyStudyPlan]

    model_config = ConfigDict(from_attributes=True)


class SubjectRecommendation(BaseModel):
    subject: str
    strength_score: float = Field(..., ge=0, le=100)
    recommendation: str
    recommended_topics: List[str]
    priority: str

    model_config = ConfigDict(from_attributes=True)


class Goal(BaseModel):
    goal_id: int
    title: str
    description: str
    target_date: date
    progress_percentage: float = Field(..., ge=0, le=100)
    completed: bool = False

    model_config = ConfigDict(from_attributes=True)


class ExamReadiness(BaseModel):
    overall_readiness: float = Field(..., ge=0, le=100)
    predicted_score: float = Field(..., ge=0, le=100)
    predicted_rank: Optional[int] = None
    passing_probability: float = Field(..., ge=0, le=100)
    strengths: List[str]
    weak_areas: List[str]
    recommendations: List[str]

    model_config = ConfigDict(from_attributes=True)


class Motivation(BaseModel):
    quote: str
    author: str
    study_tip: str
    productivity_score: float = Field(..., ge=0, le=100)
    consistency_streak: int = Field(..., ge=0)

    model_config = ConfigDict(from_attributes=True)


class CareerDashboard(BaseModel):
    daily_plan: DailyStudyPlan
    weekly_plan: WeeklyStudyPlan
    subject_recommendations: List[SubjectRecommendation]
    goals: List[Goal]
    exam_readiness: ExamReadiness
    motivation: Motivation

    model_config = ConfigDict(from_attributes=True)