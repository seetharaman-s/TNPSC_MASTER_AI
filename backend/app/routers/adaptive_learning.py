from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.adaptive_learning_service import (
    AdaptiveLearningService,
)

router = APIRouter(
    prefix="/adaptive",
    tags=["Adaptive Learning"],
)


@router.get("/dashboard")
def get_dashboard(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get the complete adaptive learning dashboard.
    """
    return AdaptiveLearningService.get_dashboard(
        db,
        user_id,
    )


@router.get("/weak-topics")
def get_weak_topics(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get AI-identified weak topics.
    """
    return AdaptiveLearningService.get_weak_topics(
        db,
        user_id,
    )


@router.get("/revision-plan")
def get_revision_plan(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get personalized revision schedule.
    """
    return AdaptiveLearningService.get_revision_plan(
        db,
        user_id,
    )


@router.get("/recommended-mcqs")
def get_recommended_mcqs(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get recommended MCQs.
    """
    return AdaptiveLearningService.get_recommended_mcqs(
        db,
        user_id,
    )


@router.get("/mastery")
def get_subject_mastery(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get subject mastery levels.
    """
    return AdaptiveLearningService.get_subject_mastery(
        db,
        user_id,
    )


@router.get("/exam-readiness")
def get_exam_readiness(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get exam readiness prediction.
    """
    return AdaptiveLearningService.get_exam_readiness(
        db,
        user_id,
    )


@router.get("/daily-goals")
def get_daily_goals(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get AI-generated daily goals.
    """
    return AdaptiveLearningService.get_daily_goals(
        db,
        user_id,
    )