from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey,
    DateTime,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.session import Base


class Bookmark(Base):
    __tablename__ = "bookmarks"

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

    current_affair_id = Column(
        Integer,
        ForeignKey("current_affairs.id", ondelete="CASCADE"),
        nullable=True,
        index=True,
    )

    page_number = Column(
        Integer,
        default=1,
    )

    title = Column(
        String(255),
        nullable=True,
    )

    favorite = Column(
        Boolean,
        default=False,
    )

    last_read = Column(
        Boolean,
        default=True,
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

    book = relationship(
        "Book",
        backref="bookmarks",
    )

    note = relationship(
        "Note",
        backref="bookmarks",
    )

    current_affair = relationship(
        "CurrentAffair",
        backref="bookmarks",
    )

    def __repr__(self):
        return (
            f"<Bookmark(id={self.id}, page={self.page_number})>"
        )