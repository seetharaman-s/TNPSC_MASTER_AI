from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Boolean,
    ForeignKey,
    DateTime,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.session import Base


class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)

    quiz_id = Column(
        Integer,
        ForeignKey("quizzes.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    subject = Column(String(100), nullable=False)

    standard = Column(Integer, nullable=False)

    unit = Column(Integer, nullable=False)

    question = Column(Text, nullable=False)

    option_a = Column(Text, nullable=False)

    option_b = Column(Text, nullable=False)

    option_c = Column(Text, nullable=False)

    option_d = Column(Text, nullable=False)

    correct_answer = Column(
        String(1),
        nullable=False,
    )

    explanation = Column(
        Text,
        nullable=True,
    )

    difficulty = Column(
        String(30),
        default="Medium",
    )

    marks = Column(
        Integer,
        default=1,
    )

    language = Column(
        String(50),
        default="Tamil",
    )

    is_active = Column(
        Boolean,
        default=True,
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

    quiz = relationship(
    "Quiz",
    back_populates="questions",
    )

    def __repr__(self):
        return (
            f"<Question(id={self.id}, quiz_id={self.quiz_id})>"
        )