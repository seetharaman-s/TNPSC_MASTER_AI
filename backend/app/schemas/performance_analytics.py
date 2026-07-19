from pydantic import BaseModel, ConfigDict
from typing import List, Optional


# ==========================================================
# Performance Overview
# ==========================================================

class PerformanceOverview(BaseModel):
    overall_score: float
    average_accuracy: float
    tests_completed: int
    questions_attempted: int
    questions_correct: int
    total_study_hours: float

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Subject Performance
# ==========================================================

class SubjectPerformance(BaseModel):
    subject: str
    accuracy: float
    questions_attempted: int
    questions_correct: int
    study_hours: float
    mastery_score: float
    ai_confidence: float

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Weekly Performance
# ==========================================================

class WeeklyPerformance(BaseModel):
    week: str
    score: float
    accuracy: float
    study_hours: float
    tests_completed: int

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Time Analysis
# ==========================================================

class TimeAnalysis(BaseModel):
    average_time_per_question: float
    fastest_subject: str
    slowest_subject: str
    daily_study_hours: float
    weekly_study_hours: float

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Rank Prediction
# ==========================================================

class RankPrediction(BaseModel):
    predicted_score: float
    predicted_district_rank: Optional[int] = None
    predicted_state_rank: Optional[int] = None
    selection_probability: float

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# AI Insight
# ==========================================================

class AIInsight(BaseModel):
    title: str
    description: str
    priority: str

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Study Recommendation
# ==========================================================

class StudyRecommendation(BaseModel):
    subject: str
    recommendation: str
    recommended_hours: float
    priority: str

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Strength & Weakness
# ==========================================================

class StrengthWeakness(BaseModel):
    strengths: List[str]
    weaknesses: List[str]

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Dashboard
# ==========================================================

class PerformanceAnalyticsDashboard(BaseModel):
    overview: PerformanceOverview
    subject_performance: List[SubjectPerformance]
    weekly_performance: List[WeeklyPerformance]
    time_analysis: TimeAnalysis
    rank_prediction: RankPrediction
    ai_insights: List[AIInsight]
    study_recommendations: List[StudyRecommendation]
    strength_weakness: StrengthWeakness

    model_config = ConfigDict(from_attributes=True)