from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
)
from sqlalchemy.sql import func

from app.db.database import Base


class CurrentAffairCategory(Base):
    __tablename__ = "current_affair_categories"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(
        String(100),
        unique=True,
        nullable=False,
    )

    description = Column(String(255))

    icon = Column(String(100))

    color = Column(String(50))

    sort_order = Column(
        Integer,
        default=0,
    )

    is_active = Column(
        Boolean,
        default=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    def __repr__(self):
        return f"<CurrentAffairCategory(name='{self.name}')>"