from fastapi import APIRouter, Query

from app.schemas.career_guidance import (
    CareerDashboard,
    DailyStudyPlan,
    WeeklyStudyPlan,
    SubjectRecommendation,
    Goal,
    ExamReadiness,
    Motivation,
)
from app.services.career_guidance_service import CareerGuidanceService

router = APIRouter(
    prefix="/career-guidance",
    tags=["Career Guidance"],
)


@router.get(
    "/dashboard",
    response_model=CareerDashboard,
)
async def get_dashboard(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns the complete AI Career Guidance dashboard.
    """
    return CareerGuidanceService.get_dashboard(user_id)


@router.get(
    "/daily-plan",
    response_model=DailyStudyPlan,
)
async def get_daily_plan(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns today's personalized study plan.
    """
    dashboard = CareerGuidanceService.get_dashboard(user_id)
    return dashboard.daily_plan


@router.get(
    "/weekly-plan",
    response_model=WeeklyStudyPlan,
)
async def get_weekly_plan(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns the weekly study schedule.
    """
    dashboard = CareerGuidanceService.get_dashboard(user_id)
    return dashboard.weekly_plan


@router.get(
    "/recommendations",
    response_model=list[SubjectRecommendation],
)
async def get_subject_recommendations(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns subject-wise recommendations.
    """
    dashboard = CareerGuidanceService.get_dashboard(user_id)
    return dashboard.subject_recommendations


@router.get(
    "/goals",
    response_model=list[Goal],
)
async def get_goals(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns active study goals.
    """
    dashboard = CareerGuidanceService.get_dashboard(user_id)
    return dashboard.goals


@router.get(
    "/exam-readiness",
    response_model=ExamReadiness,
)
async def get_exam_readiness(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns exam readiness prediction.
    """
    dashboard = CareerGuidanceService.get_dashboard(user_id)
    return dashboard.exam_readiness


@router.get(
    "/motivation",
    response_model=Motivation,
)
async def get_motivation(
    user_id: int = Query(..., description="User ID"),
):
    """
    Returns today's motivational quote and study tip.
    """
    dashboard = CareerGuidanceService.get_dashboard(user_id)
    return dashboard.motivation