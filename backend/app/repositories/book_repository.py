from typing import Optional

from sqlalchemy import desc
from sqlalchemy.orm import Session

from app.models.book import Book


class BookRepository:

    @staticmethod
    def create(db: Session, book: Book) -> Book:
        db.add(book)
        db.commit()
        db.refresh(book)
        return book

    @staticmethod
    def get_by_id(
        db: Session,
        book_id: int,
    ) -> Optional[Book]:
        return (
            db.query(Book)
            .filter(Book.id == book_id)
            .first()
        )

    @staticmethod
    def get_all(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):
        return (
            db.query(Book)
            .order_by(Book.standard, Book.subject)
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_featured(db: Session):
        return (
            db.query(Book)
            .filter(Book.featured.is_(True))
            .all()
        )

    @staticmethod
    def get_latest(
        db: Session,
        limit: int = 10,
    ):
        return (
            db.query(Book)
            .order_by(desc(Book.created_at))
            .limit(limit)
            .all()
        )

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):
        return (
            db.query(Book)
            .filter(
                Book.title.ilike(f"%{keyword}%")
                | Book.subject.ilike(f"%{keyword}%")
            )
            .all()
        )

    @staticmethod
    def filter(
        db: Session,
        subject: str | None = None,
        standard: int | None = None,
        medium: str | None = None,
    ):
        query = db.query(Book)

        if subject:
            query = query.filter(Book.subject == subject)

        if standard:
            query = query.filter(Book.standard == standard)

        if medium:
            query = query.filter(Book.medium == medium)

        return query.all()

    @staticmethod
    def update(
        db: Session,
        book: Book,
    ) -> Book:
        db.commit()
        db.refresh(book)
        return book

    @staticmethod
    def delete(
        db: Session,
        book: Book,
    ):
        db.delete(book)
        db.commit()