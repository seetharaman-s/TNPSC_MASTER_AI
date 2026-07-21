import uuid

from sqlalchemy import String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.orm import relationship
from app.db.session import Base


class Role(Base):
    __tablename__ = "roles"

    # ===========================
    # Primary Key
    # ===========================

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    # ===========================
    # Role Information
    # ===========================

    name: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False,
        index=True,
    )

    display_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    # ===========================
    # Status
    # ===========================

    is_active: Mapped[bool] = mapped_column(
        default=True,
    )

    # ===========================
    # Relationships
    # ===========================

    users = relationship(
        "User",
        back_populates="role",
    )


    role_permissions = relationship(
    "RolePermission",
    back_populates="role",
    cascade="all, delete-orphan",
    )

    def __repr__(self) -> str:
        return f"<Role(name='{self.name}')>"