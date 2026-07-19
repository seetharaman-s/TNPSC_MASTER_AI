from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.dependencies.auth import get_current_admin
from app.models.user import User
from app.schemas.report import (
    DashboardReport,
    UserAnalytics,
    QuizAnalytics,
    BookAnalytics,
    CurrentAffairsAnalytics,
    UploadAnalytics,
    ExamAnalytics,
)
from app.services.report_service import ReportService

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.get(
    "/dashboard",
    response_model=DashboardReport,
)
def dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_dashboard()


@router.get(
    "/users",
    response_model=UserAnalytics,
)
def users(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_user_analytics()


@router.get(
    "/quizzes",
    response_model=QuizAnalytics,
)
def quizzes(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_quiz_analytics()


@router.get(
    "/books",
    response_model=BookAnalytics,
)
def books(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_book_analytics()


@router.get(
    "/current-affairs",
    response_model=CurrentAffairsAnalytics,
)
def current_affairs(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_current_affairs_analytics()


@router.get(
    "/uploads",
    response_model=UploadAnalytics,
)
def uploads(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_upload_analytics()


@router.get(
    "/exams",
    response_model=ExamAnalytics,
)
def exams(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    return ReportService(db).get_exam_analytics()