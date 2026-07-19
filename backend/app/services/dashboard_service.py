from sqlalchemy.orm import Session

from app.models.book import Book
from app.models.note import Note
from app.models.quiz import Quiz
from app.models.current_affair import CurrentAffair


class DashboardService:

    # =====================================================
    # Dashboard Summary
    # =====================================================

    @staticmethod
    def get_dashboard_summary(db: Session):
        return {
            "books": db.query(Book).count(),
            "notes": db.query(Note).count(),
            "quizzes": db.query(Quiz).count(),
            "current_affairs": db.query(CurrentAffair).count(),
        }

    # =====================================================
    # Subject Statistics
    # =====================================================

    @staticmethod
    def subject_statistics(db: Session):
        return DashboardService.get_dashboard_summary(db)

    # =====================================================
    # Featured Content
    # =====================================================

    @staticmethod
    def featured_content(db: Session):
        return (
            db.query(CurrentAffair)
            .filter(CurrentAffair.featured == True)
            .order_by(CurrentAffair.publish_date.desc())
            .limit(10)
            .all()
        )

    # =====================================================
    # Reading Progress (Mock)
    # =====================================================

    @staticmethod
    def reading_progress(db: Session):
        return {
            "completed_books": 12,
            "completed_notes": 34,
            "overall_progress": 72,
        }

    # =====================================================
    # Recent Books
    # =====================================================

    @staticmethod
    def recent_books(db: Session, limit: int = 5):
        return (
            db.query(Book)
            .order_by(Book.id.desc())
            .limit(limit)
            .all()
        )

    # =====================================================
    # Recent Notes
    # =====================================================

    @staticmethod
    def recent_notes(db: Session, limit: int = 5):
        return (
            db.query(Note)
            .order_by(Note.id.desc())
            .limit(limit)
            .all()
        )

    # =====================================================
    # Recent Quizzes
    # =====================================================

    @staticmethod
    def recent_quizzes(db: Session, limit: int = 5):
        return (
            db.query(Quiz)
            .order_by(Quiz.id.desc())
            .limit(limit)
            .all()
        )

    # =====================================================
    # Recent Current Affairs
    # =====================================================

    @staticmethod
    def recent_current_affairs(db: Session, limit: int = 5):
        return (
            db.query(CurrentAffair)
            .order_by(CurrentAffair.publish_date.desc())
            .limit(limit)
            .all()
        )

    # =====================================================
    # Continue Reading (Mock)
    # =====================================================

    @staticmethod
    def continue_reading(db: Session, user_id: int):
        return {
            "book": "Indian Polity",
            "chapter": "Fundamental Rights",
            "progress": 72,
        }

    # =====================================================
    # Weekly Progress (Mock)
    # =====================================================

    @staticmethod
    def weekly_progress(db: Session):
        return [
            {"day": "Mon", "hours": 2},
            {"day": "Tue", "hours": 3},
            {"day": "Wed", "hours": 2.5},
            {"day": "Thu", "hours": 4},
            {"day": "Fri", "hours": 3},
            {"day": "Sat", "hours": 5},
            {"day": "Sun", "hours": 2},
        ]

    # =====================================================
    # Recent Quiz (Mock)
    # =====================================================

    @staticmethod
    def recent_quiz(db: Session, user_id: int):
        return {
            "quiz_id": 101,
            "title": "General Studies Mock Test",
            "score": 86,
            "correct_answers": 43,
            "total_questions": 50,
        }