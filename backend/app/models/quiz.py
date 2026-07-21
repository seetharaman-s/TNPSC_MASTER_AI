from sqlalchemy import (
    Boolean,
    Column,
    Integer,
    String,
    Text,
    DateTime,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.session import Base


class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    subject = Column(String(100), nullable=False)

    standard = Column(Integer, nullable=False)

    unit = Column(Integer, nullable=False)

    description = Column(Text, nullable=True)

    difficulty = Column(
        String(50),
        default="Medium"
    )

    duration = Column(
        Integer,
        default=30
    )

    total_questions = Column(
        Integer,
        default=0
    )

    total_marks = Column(
        Integer,
        default=0
    )

    pass_mark = Column(
        Integer,
        default=40
    )

    language = Column(
        String(50),
        default="Tamil"
    )

    featured = Column(
        Boolean,
        default=False
    )

    is_active = Column(
        Boolean,
        default=True
    )

    attempts = Column(
        Integer,
        default=0
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )


    questions = relationship(
        "Question",
        back_populates="quiz",
        cascade="all, delete-orphan",
    )

    attempts_relation = relationship(
        "QuizAttempt",
        back_populates="quiz",
        cascade="all, delete-orphan",
    )

    def __repr__(self):
        return (
            f"<Quiz("
            f"id={self.id}, "
            f"title='{self.title}', "
            f"subject='{self.subject}')>"
        )   