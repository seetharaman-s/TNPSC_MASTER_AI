from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.progress_service import ProgressService

router = APIRouter(
    prefix="/progress",
    tags=["Student Progress"],
)


@router.get("/continue-reading")
def continue_reading(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get the user's continue reading items.
    """
    return ProgressService.continue_reading(db, user_id)


@router.get("/dashboard")
def get_dashboard(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get the complete student progress dashboard.
    """
    return ProgressService.get_dashboard(db, user_id)


@router.get("/subjects")
def get_subject_progress(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get subject-wise progress.
    """
    return ProgressService.get_subject_progress(db, user_id)


@router.get("/weekly-study")
def get_weekly_study(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get weekly study statistics.
    """
    return ProgressService.get_weekly_study(db, user_id)


@router.get("/history")
def get_history(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get recent quiz performance history.
    """
    return ProgressService.get_recent_history(db, user_id)


@router.get("/achievements")
def get_achievements(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get achievement badges.
    """
    return ProgressService.get_achievements(db, user_id)


@router.get("/streak")
def get_streak(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get the user's study streak.
    """
    return ProgressService.get_streak(db, user_id)