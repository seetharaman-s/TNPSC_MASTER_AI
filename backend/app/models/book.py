from sqlalchemy import (
    Boolean,
    Column,
    Integer,
    String,
    Text,
    DateTime,
)
from sqlalchemy.sql import func

from app.db.session import Base


class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    subject = Column(String(100), nullable=False)

    standard = Column(Integer, nullable=False)

    medium = Column(String(50), nullable=False)

    author = Column(String(150), nullable=True)

    publisher = Column(String(150), nullable=True)

    edition = Column(String(100), nullable=True)

    description = Column(Text, nullable=True)

    pdf_url = Column(String(500), nullable=True)

    cover_image = Column(String(500), nullable=True)

    pages = Column(Integer, default=0)

    language = Column(String(50), default="Tamil")

    featured = Column(Boolean, default=False)

    is_active = Column(Boolean, default=True)

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

    def __repr__(self):
        return (
            f"<Book(id={self.id}, "
            f"title='{self.title}', "
            f"subject='{self.subject}', "
            f"standard={self.standard})>"
        )