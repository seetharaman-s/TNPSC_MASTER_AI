from sqlalchemy import Column, Integer, String, Boolean

from app.db.database import Base


class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    subject = Column(String(100), nullable=False)

    standard = Column(Integer, nullable=False)

    medium = Column(String(50), nullable=False)

    pdf_url = Column(String(500))

    cover_image = Column(String(500))

    pages = Column(Integer, default=0)

    featured = Column(Boolean, default=False)