from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.book import Book
from app.models.note import Note
from app.models.quiz import Quiz
from app.models.question import Question
from app.models.current_affair import CurrentAffair
from app.models.progress import Progress
from app.models.quiz_attempt import QuizAttempt


class DashboardRepository:

    @staticmethod
    def get_summary(db: Session):
        return {
            "total_books": db.query(func.count(Book.id)).scalar() or 0,
            "total_notes": db.query(func.count(Note.id)).scalar() or 0,
            "total_quizzes": db.query(func.count(Quiz.id)).scalar() or 0,
            "total_questions": db.query(func.count(Question.id)).scalar() or 0,
            "total_current_affairs": db.query(func.count(CurrentAffair.id)).scalar() or 0,
            "total_attempts": db.query(func.count(QuizAttempt.id)).scalar() or 0,
        }

    @staticmethod
    def get_progress(db: Session):
        result = (
            db.query(
                func.sum(Progress.time_spent),
                func.avg(Progress.percentage),
            )
            .first()
        )

        return {
            "reading_time": int(result[0] or 0),
            "average_progress": round(float(result[1] or 0), 2),
        }