from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.dashboard_service import DashboardService

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/summary")
def get_dashboard_summary(
    db: Session = Depends(get_db),
):
    return DashboardService.get_dashboard_summary(db)


@router.get("/featured")
def get_featured_content(
    db: Session = Depends(get_db),
):
    return DashboardService.featured_content(db)


@router.get("/statistics")
def get_subject_statistics(
    db: Session = Depends(get_db),
):
    return DashboardService.subject_statistics(db)


@router.get("/progress")
def get_reading_progress(
    db: Session = Depends(get_db),
):
    return DashboardService.reading_progress(db)


@router.get("/recent/books")
def get_recent_books(
    limit: int = 5,
    db: Session = Depends(get_db),
):
    return DashboardService.recent_books(
        db=db,
        limit=limit,
    )


@router.get("/recent/notes")
def get_recent_notes(
    limit: int = 5,
    db: Session = Depends(get_db),
):
    return DashboardService.recent_notes(
        db=db,
        limit=limit,
    )


@router.get("/recent/quizzes")
def get_recent_quizzes(
    limit: int = 5,
    db: Session = Depends(get_db),
):
    return DashboardService.recent_quizzes(
        db=db,
        limit=limit,
    )


@router.get("/recent/current-affairs")
def get_recent_current_affairs(
    limit: int = 5,
    db: Session = Depends(get_db),
):
    return DashboardService.recent_current_affairs(
        db=db,
        limit=limit,
    )


@router.get("/continue-reading")
def continue_reading(
    db: Session = Depends(get_db),
):
    # Replace with JWT authenticated user later
    user_id = 1

    return DashboardService.continue_reading(
        db=db,
        user_id=user_id,
    )


@router.get("/weekly-progress")
def weekly_progress(
    db: Session = Depends(get_db),
):
    return DashboardService.weekly_progress(db)


@router.get("/recent-quiz")
def recent_quiz(
    db: Session = Depends(get_db),
):
    # Replace with JWT authenticated user later
    user_id = 1

    return DashboardService.recent_quiz(
        db=db,
        user_id=user_id,
    )