from sqlalchemy import (
    Column,
    Integer,
    Float,
    ForeignKey,
    DateTime,
)
from sqlalchemy.sql import func

from app.db.database import Base


class StudentProgress(Base):
    __tablename__ = "student_progress"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False,
    )

    total_study_minutes = Column(Integer, default=0)

    quizzes_completed = Column(Integer, default=0)

    chapters_completed = Column(Integer, default=0)

    average_score = Column(Float, default=0)

    overall_progress = Column(Float, default=0)

    current_streak = Column(Integer, default=0)

    longest_streak = Column(Integer, default=0)

    created_at = Column(
        DateTime,
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now(),
    )