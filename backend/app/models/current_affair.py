from datetime import datetime

from sqlalchemy import (
    Boolean,
    Date,
    DateTime,
    Integer,
    String,
    Text,
)

from sqlalchemy.orm import Mapped, mapped_column

from app.db.session import Base


class CurrentAffair(Base):
    __tablename__ = "current_affairs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    title: Mapped[str] = mapped_column(String(300), nullable=False)

    category: Mapped[str] = mapped_column(String(100), nullable=False)

    topic: Mapped[str | None] = mapped_column(String(150))

    content: Mapped[str] = mapped_column(Text, nullable=False)

    source: Mapped[str | None] = mapped_column(String(200))

    pdf_url: Mapped[str | None] = mapped_column(String(500))

    image_url: Mapped[str | None] = mapped_column(String(500))

    publish_date: Mapped[datetime.date] = mapped_column(Date)

    language: Mapped[str] = mapped_column(String(50), default="Tamil")

    featured: Mapped[bool] = mapped_column(Boolean, default=False)

    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    views: Mapped[int] = mapped_column(Integer, default=0)

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )