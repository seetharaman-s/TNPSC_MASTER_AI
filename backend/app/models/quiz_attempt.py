from sqlalchemy import (
    Column,
    Integer,
    Float,
    ForeignKey,
    DateTime,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.database import Base

class QuizAttempt(Base):
    __tablename__ = "quiz_attempts"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    quiz_id = Column(
        Integer,
        ForeignKey("quizzes.id"),
        nullable=False,
    )

    score = Column(Float, default=0)

    total_questions = Column(Integer)

    correct_answers = Column(Integer)

    wrong_answers = Column(Integer)

    skipped_answers = Column(Integer)

    time_taken = Column(Integer)

    created_at = Column(
        DateTime,
        server_default=func.now(),
    )
    percentage = Column(Float, default=0)

    submitted_at = Column(
        DateTime,
        server_default=func.now(),
    )

    quiz = relationship(
        "Quiz",
        back_populates="attempts_relation",
    )

    user = relationship(
        "User",
    )