from sqlalchemy import (
    Column,
    Integer,
    ForeignKey,
)

from app.db.database import Base


class Bookmark(Base):
    __tablename__ = "bookmarks"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
    )

    book_id = Column(
        Integer,
        ForeignKey("books.id"),
    )

    page = Column(Integer)