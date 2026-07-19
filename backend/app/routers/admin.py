from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.dependencies.auth import get_current_admin
from app.db.session import get_db
from app.models.book import Book
from app.models.note import Note
from app.models.quiz import Quiz
from app.models.question import Question
from app.models.current_affair import CurrentAffair
from app.services.dashboard_service import DashboardService
from app.models.user import User
from app.services.admin_service import AdminService
from app.dependencies.auth import get_current_user

router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
)


@router.get("/books")
def admin_books(
    db: Session = Depends(get_db),
):
    return db.query(Book).order_by(Book.created_at.desc()).all()


@router.get("/notes")
def admin_notes(
    db: Session = Depends(get_db),
):
    return db.query(Note).order_by(Note.created_at.desc()).all()


@router.get("/quizzes")
def admin_quizzes(
    db: Session = Depends(get_db),
):
    return db.query(Quiz).order_by(Quiz.created_at.desc()).all()


@router.get("/questions")
def admin_questions(
    db: Session = Depends(get_db),
):
    return (
        db.query(Question)
        .order_by(Question.created_at.desc())
        .all()
    )


@router.get("/current-affairs")
def admin_current_affairs(
    db: Session = Depends(get_db),
):
    return (
        db.query(CurrentAffair)
        .order_by(CurrentAffair.publish_date.desc())
        .all()
    )


@router.get("/statistics")
def statistics(
    db: Session = Depends(get_db),
):
    return DashboardService.subject_statistics(db)


@router.get("/featured")
def featured(
    db: Session = Depends(get_db),
):
    return DashboardService.featured_content(db)


@router.get("/system")
def system_status(
    db: Session = Depends(get_db),
):
    return {
        "status": "Running",
        "database": "Connected",
        "backend": "FastAPI",
        "version": "1.0.0",
    }

@router.get("/dashboard")
def dashboard(
    db: Session = Depends(get_db),
):
    return AdminService.dashboard(db)