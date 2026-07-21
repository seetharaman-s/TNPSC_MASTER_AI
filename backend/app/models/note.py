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
import uuid

from sqlalchemy import ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    subject = Column(String(100), nullable=False)

    standard = Column(Integer, nullable=False)

    unit = Column(Integer, nullable=False)

    medium = Column(String(50), default="Tamil")

    description = Column(Text, nullable=True)

    pdf_url = Column(String(500), nullable=True)

    thumbnail = Column(String(500), nullable=True)

    pages = Column(Integer, default=0)

    language = Column(String(50), default="Tamil")

    user_id = Column(
    UUID(as_uuid=True),
    ForeignKey("users.id"),
    nullable=False,
    )

    featured = Column(Boolean, default=False)

    is_active = Column(Boolean, default=True)

    downloads = Column(Integer, default=0)

    views = Column(Integer, default=0)

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

    user = relationship(
    "User",
    back_populates="notes",
    )

    def __repr__(self):
        return (
            f"<Note(id={self.id}, "
            f"title='{self.title}', "
            f"subject='{self.subject}')>"
        )