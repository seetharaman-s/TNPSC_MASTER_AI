from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.book import Book
from app.models.note import Note
from app.models.quiz import Quiz
from app.models.question import Question
from app.models.user import User


class AdminRepository:

    @staticmethod
    def dashboard(db: Session):

        return {

            "users":
                db.query(func.count(User.id)).scalar(),

            "books":
                db.query(func.count(Book.id)).scalar(),

            "notes":
                db.query(func.count(Note.id)).scalar(),

            "quizzes":
                db.query(func.count(Quiz.id)).scalar(),

            "questions":
                db.query(func.count(Question.id)).scalar(),

        }