from sqlalchemy.orm import Session
from app.models.book import Book


def get_books(db: Session):
    return db.query(Book).all()