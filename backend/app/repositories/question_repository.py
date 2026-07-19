from sqlalchemy.orm import Session
from app.models.question import Question


class QuestionRepository:

    @staticmethod
    def get_questions(
        db: Session,
        quiz_id: int,
    ):
        return (
            db.query(Question)
            .filter(
                Question.quiz_id == quiz_id
            )
            .all()
        )