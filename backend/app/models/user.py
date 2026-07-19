from sqlalchemy import (
    Boolean,
    Column,
    Integer,
    String,
    DateTime,
)
from sqlalchemy.sql import func
from sqlalchemy import Enum as SQLEnum
from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(
        String(100),
        unique=True,
        nullable=False,
        index=True,
    )

    full_name = Column(
        String(150),
        nullable=True,
    )

    email = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    password_hash = Column(
        String(255),
        nullable=False,
    )

    role = Column(
    SQLEnum("admin", "user", name="user_roles"),
    default="user",
    nullable=False,
    )

    language = Column(
    SQLEnum("Tamil", "English", name="language_types"),
    default="Tamil",
    nullable=False,
    ) 

    theme = Column(
    SQLEnum("light", "dark", name="theme_types"),
    default="light",
    nullable=False,
    )

    profile_image = Column(
        String(500),
        nullable=True,
    )

    phone = Column(
        String(20),
        nullable=True,
    )

    is_active = Column(
        Boolean,
        default=True,
    )

    is_verified = Column(
        Boolean,
        default=False,
    )

    last_login = Column(
        DateTime(timezone=True),
        nullable=True,
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

    failed_login_attempts = Column(
    Integer,
    default=0,
    )

    is_locked = Column(
    Boolean,
    default=False,
    )

    reset_token = Column(
    String(255),
    nullable=True,
    )

    reset_token_expiry = Column(
        DateTime(timezone=True),
        nullable=True,
    )

    verification_token = Column(
    String(255),
    nullable=True,
    )

    def __repr__(self):
        return (
            f"<User(id={self.id}, username='{self.username}')>"
        )