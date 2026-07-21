import uuid
from datetime import datetime
import app.models
from sqlalchemy import (
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    String,
    func,
)
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.session import Base


class User(Base):
    __tablename__ = "users"

    # ===========================
    # Primary Key
    # ===========================

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    # ===========================
    # Basic Information
    # ===========================

    username: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False,
        index=True,
    )

    full_name: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    phone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    profile_image_url: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    # ===========================
    # Authentication
    # ===========================

    password_hash: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    role_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("roles.id"),
        nullable=False,
    )

    role = relationship(
        "Role",
        back_populates="users",
    )

    # ===========================
    # Preferences
    # ===========================

    language: Mapped[str] = mapped_column(
        SQLEnum(
            "ta",
            "en",
            name="language_types",
        ),
        default="ta",
        nullable=False,
    )

    theme: Mapped[str] = mapped_column(
        SQLEnum(
            "light",
            "dark",
            "system",
            name="theme_types",
        ),
        default="system",
        nullable=False,
    )

    # ===========================
    # Account Status
    # ===========================

    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    is_verified: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )

    is_locked: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )

    failed_login_attempts: Mapped[int] = mapped_column(
        Integer,
        default=0,
    )

    # ===========================
    # Login Information
    # ===========================

    last_login: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )

    last_login_ip: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    last_login_device: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    # ===========================
    # Audit Fields
    # ===========================

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    deleted_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )

    # ===========================
    # Relationships
    # ===========================

    refresh_tokens = relationship(
    "RefreshToken",
    back_populates="user",
    cascade="all, delete-orphan",
    )

    notes = relationship(
        "Note",
        back_populates="user",
    )

    @property
    def role_name(self) -> str:
        return self.role.name if self.role else ""

    
    @property
    def role_name(self) -> str:
       return self.role.name if self.role else ""

    # ===========================
    # Representation
    # ===========================

    def __repr__(self) -> str:
        return (
            f"<User(id={self.id}, username='{self.username}', email='{self.email}')>"
        )