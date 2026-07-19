from typing import List

from fastapi import APIRouter, Query

from app.schemas.performance_analytics import (
    AIInsight,
    PerformanceAnalyticsDashboard,
    PerformanceOverview,
    RankPrediction,
    StrengthWeakness,
    StudyRecommendation,
    SubjectPerformance,
    TimeAnalysis,
    WeeklyPerformance,
)
from app.services.performance_analytics_service import (
    performance_analytics_service,
)

router = APIRouter(
    prefix="/performance-analytics",
    tags=["Performance Analytics"],
)


@router.get(
    "/dashboard",
    response_model=PerformanceAnalyticsDashboard,
)
def get_dashboard(
    user_id: int = Query(...),
):
    return performance_analytics_service.get_dashboard(
        user_id
    )


@router.get(
    "/overview",
    response_model=PerformanceOverview,
)
def get_overview(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.overview


@router.get(
    "/subjects",
    response_model=List[SubjectPerformance],
)
def get_subject_performance(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.subject_performance


@router.get(
    "/weekly-performance",
    response_model=List[WeeklyPerformance],
)
def get_weekly_performance(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.weekly_performance


@router.get(
    "/time-analysis",
    response_model=TimeAnalysis,
)
def get_time_analysis(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.time_analysis


@router.get(
    "/rank-prediction",
    response_model=RankPrediction,
)
def get_rank_prediction(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.rank_prediction


@router.get(
    "/ai-insights",
    response_model=List[AIInsight],
)
def get_ai_insights(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.ai_insights


@router.get(
    "/study-recommendations",
    response_model=List[StudyRecommendation],
)
def get_study_recommendations(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.study_recommendations


@router.get(
    "/strength-weakness",
    response_model=StrengthWeakness,
)
def get_strength_weakness(
    user_id: int = Query(...),
):
    dashboard = performance_analytics_service.get_dashboard(
        user_id
    )
    return dashboard.strength_weakness