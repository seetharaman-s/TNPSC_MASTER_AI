# ==========================================================
# Student Progress Analytics
# ==========================================================

from pydantic import Field
from typing import List


class ProgressOverview(BaseModel):
    overall_progress: float = Field(..., ge=0, le=100)
    average_score: float = Field(..., ge=0, le=100)

    quizzes_completed: int
    chapters_completed: int

    study_hours: float

    current_streak: int


class SubjectProgress(BaseModel):
    subject: str

    progress: float = Field(..., ge=0, le=100)

    completed_topics: int
    total_topics: int

    average_score: float = Field(..., ge=0, le=100)


class WeeklyStudy(BaseModel):
    day: str

    study_hours: float

    quizzes_completed: int


class PerformanceHistory(BaseModel):
    date: str

    quiz_name: str

    subject: str

    score: float

    total_questions: int

    correct_answers: int


class StudyStreak(BaseModel):
    current_streak: int

    longest_streak: int

    last_study_date: str


class AchievementBadge(BaseModel):
    id: int

    title: str

    description: str

    icon: str

    unlocked: bool


class ProgressDashboard(BaseModel):
    overview: ProgressOverview

    subjects: List[SubjectProgress]

    weekly_study: List[WeeklyStudy]

    recent_history: List[PerformanceHistory]

    achievements: List[AchievementBadge]

    streak: StudyStreak

    model_config = ConfigDict(
        from_attributes=True
    )