from sqlalchemy import (
    Column,
    Integer,
    Float,
    ForeignKey,
    DateTime,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Progress(Base):
    __tablename__ = "progress"

    id = Column(Integer, primary_key=True, index=True)

    book_id = Column(
        Integer,
        ForeignKey("books.id", ondelete="CASCADE"),
        nullable=True,
        index=True,
    )

    note_id = Column(
        Integer,
        ForeignKey("notes.id", ondelete="CASCADE"),
        nullable=True,
        index=True,
    )

    quiz_id = Column(
        Integer,
        ForeignKey("quizzes.id", ondelete="CASCADE"),
        nullable=True,
        index=True,
    )

    current_affair_id = Column(
        Integer,
        ForeignKey("current_affairs.id", ondelete="CASCADE"),
        nullable=True,
        index=True,
    )

    current_page = Column(
        Integer,
        default=1,
    )

    total_pages = Column(
        Integer,
        default=0,
    )

    percentage = Column(
        Float,
        default=0.0,
    )

    time_spent = Column(
        Integer,
        default=0,
    )

    quiz_score = Column(
        Integer,
        default=0,
    )

    total_marks = Column(
        Integer,
        default=0,
    )

    last_opened = Column(
        DateTime(timezone=True),
        server_default=func.now(),
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

    book = relationship(
        "Book",
        backref="progress_records",
    )

    note = relationship(
        "Note",
        backref="progress_records",
    )

    quiz = relationship(
        "Quiz",
        backref="progress_records",
    )

    current_affair = relationship(
        "CurrentAffair",
        backref="progress_records",
    )

    def __repr__(self):
        return (
            f"<Progress(id={self.id}, percentage={self.percentage})>"
        )