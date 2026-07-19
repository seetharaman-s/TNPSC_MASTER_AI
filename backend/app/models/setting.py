from datetime import datetime

from sqlalchemy import Boolean, DateTime, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Setting(Base):
    __tablename__ = "settings"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    # -----------------------------
    # General
    # -----------------------------

    app_name: Mapped[str] = mapped_column(
        String(150),
        default="TNPSC MASTER AI",
    )

    app_logo: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    footer_text: Mapped[str | None] = mapped_column(
        String(300),
        nullable=True,
    )

    contact_email: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    contact_phone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    # -----------------------------
    # Localization
    # -----------------------------

    default_language: Mapped[str] = mapped_column(
        String(20),
        default="Tamil",
    )

    default_theme: Mapped[str] = mapped_column(
        String(20),
        default="light",
    )

    # -----------------------------
    # TNPSC Features
    # -----------------------------

    default_exam: Mapped[str] = mapped_column(
        String(30),
        default="Group 4",
    )

    current_affairs_enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    daily_quiz_enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    motivation_enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    ai_explanation_enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    # -----------------------------
    # Upload Configuration
    # -----------------------------

    max_upload_size_mb: Mapped[int] = mapped_column(
        Integer,
        default=50,
    )

    upload_path: Mapped[str] = mapped_column(
        String(255),
        default="uploads/",
    )

    # -----------------------------
    # Audit
    # -----------------------------

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )