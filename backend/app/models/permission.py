import uuid

from sqlalchemy import String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.orm import relationship
from app.db.session import Base


class Permission(Base):
    __tablename__ = "permissions"

    # ===========================
    # Primary Key
    # ===========================

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    # ===========================
    # Permission Information
    # ===========================

    name: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False,
        index=True,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    module: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    is_active: Mapped[bool] = mapped_column(
        default=True,
    )

    # ===========================
    # Relationships
    # ===========================


    role_permissions = relationship(
    "RolePermission",
    back_populates="permission",
    cascade="all, delete-orphan",
    )

    def __repr__(self) -> str:
        return f"<Permission(name='{self.name}')>"