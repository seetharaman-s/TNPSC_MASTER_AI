from typing import Optional

from sqlalchemy import desc, or_
from sqlalchemy.orm import Session

from app.models.question import Question
from app.models.quiz import Quiz


class QuizRepository:

    @staticmethod
    def create(
        db: Session,
        quiz: Quiz,
    ) -> Quiz:
        db.add(quiz)
        db.commit()
        db.refresh(quiz)
        return quiz

    @staticmethod
    def get_by_id(
        db: Session,
        quiz_id: int,
    ) -> Optional[Quiz]:
        return (
            db.query(Quiz)
            .filter(Quiz.id == quiz_id)
            .first()
        )

    @staticmethod
    def get_all(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):
        return (
            db.query(Quiz)
            .filter(Quiz.is_active.is_(True))
            .order_by(desc(Quiz.created_at))
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_featured(
        db: Session,
    ):
        return (
            db.query(Quiz)
            .filter(
                Quiz.featured.is_(True),
                Quiz.is_active.is_(True),
            )
            .order_by(desc(Quiz.created_at))
            .all()
        )

    @staticmethod
    def get_latest(
        db: Session,
        limit: int = 10,
    ):
        return (
            db.query(Quiz)
            .filter(Quiz.is_active.is_(True))
            .order_by(desc(Quiz.created_at))
            .limit(limit)
            .all()
        )

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):
        return (
            db.query(Quiz)
            .filter(
                or_(
                    Quiz.title.ilike(f"%{keyword}%"),
                    Quiz.subject.ilike(f"%{keyword}%"),
                    Quiz.description.ilike(f"%{keyword}%"),
                )
            )
            .order_by(desc(Quiz.created_at))
            .all()
        )

    @staticmethod
    def filter(
        db: Session,
        subject: str | None = None,
        standard: int | None = None,
        unit: int | None = None,
        difficulty: str | None = None,
    ):
        query = db.query(Quiz).filter(
            Quiz.is_active.is_(True)
        )

        if subject:
            query = query.filter(Quiz.subject == subject)

        if standard:
            query = query.filter(Quiz.standard == standard)

        if unit:
            query = query.filter(Quiz.unit == unit)

        if difficulty:
            query = query.filter(
                Quiz.difficulty == difficulty
            )

        return (
            query.order_by(desc(Quiz.created_at))
            .all()
        )

    @staticmethod
    def update(
        db: Session,
        quiz: Quiz,
    ) -> Quiz:
        db.commit()
        db.refresh(quiz)
        return quiz

    @staticmethod
    def delete(
        db: Session,
        quiz: Quiz,
    ):
        db.delete(quiz)
        db.commit()

    @staticmethod
    def get_questions(
        db: Session,
        quiz_id: int,
    ):
        return (
            db.query(Question)
            .filter(
                Question.quiz_id == quiz_id,
                Question.is_active.is_(True),
            )
            .order_by(Question.id)
            .all()
        )