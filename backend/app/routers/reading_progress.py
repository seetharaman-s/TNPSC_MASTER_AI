from sqlalchemy import (
    Column,
    Integer,
    Float,
    ForeignKey,
    DateTime,
)
from sqlalchemy.sql import func

from app.db.database import Base


class ReadingProgress(Base):
    __tablename__ = "reading_progress"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
    )

    book_id = Column(
        Integer,
        ForeignKey("books.id"),
    )

    current_page = Column(Integer)

    total_pages = Column(Integer)

    percentage = Column(Float)

    reading_time = Column(Integer, default=0)

    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now(),
    )