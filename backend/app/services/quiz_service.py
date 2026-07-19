from sqlalchemy.orm import Session

from app.models.quiz import Quiz
from app.repositories.quiz_repository import QuizRepository
from app.schemas.quiz import QuizCreate, QuizUpdate


class QuizService:

    @staticmethod
    def create(
        db: Session,
        quiz: QuizCreate,
    ):

        db_quiz = Quiz(**quiz.model_dump())

        return QuizRepository.create(
            db,
            db_quiz,
        )

    @staticmethod
    def get_by_id(
        db: Session,
        quiz_id: int,
    ):
        return QuizRepository.get_by_id(
            db,
            quiz_id,
        )

    @staticmethod
    def get_all(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):
        return QuizRepository.get_all(
            db,
            skip,
            limit,
        )

    @staticmethod
    def get_featured(
        db: Session,
    ):
        return QuizRepository.get_featured(db)

    @staticmethod
    def get_latest(
        db: Session,
        limit: int = 10,
    ):
        return QuizRepository.get_latest(
            db,
            limit,
        )

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):
        return QuizRepository.search(
            db,
            keyword,
        )

    @staticmethod
    def filter(
        db: Session,
        subject: str | None = None,
        standard: int | None = None,
        unit: int | None = None,
        difficulty: str | None = None,
    ):
        return QuizRepository.filter(
            db=db,
            subject=subject,
            standard=standard,
            unit=unit,
            difficulty=difficulty,
        )

    @staticmethod
    def update(
        db: Session,
        quiz_id: int,
        quiz_update: QuizUpdate,
    ):

        quiz = QuizRepository.get_by_id(
            db,
            quiz_id,
        )

        if not quiz:
            return None

        update_data = quiz_update.model_dump(
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(quiz, key, value)

        return QuizRepository.update(
            db,
            quiz,
        )

    @staticmethod
    def delete(
        db: Session,
        quiz_id: int,
    ):

        quiz = QuizRepository.get_by_id(
            db,
            quiz_id,
        )

        if not quiz:
            return False

        QuizRepository.delete(
            db,
            quiz,
        )

        return True

    @staticmethod
    def get_questions(
        db: Session,
        quiz_id: int,
    ):
        return QuizRepository.get_questions(
            db,
            quiz_id,
        )