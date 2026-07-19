from typing import Optional

from sqlalchemy.orm import Session

from app.models.book import Book
from app.repositories.book_repository import BookRepository
from app.schemas.book import BookCreate, BookUpdate


class BookService:

    @staticmethod
    def create_book(
        db: Session,
        book: BookCreate,
    ) -> Book:

        db_book = Book(**book.model_dump())

        return BookRepository.create(
            db,
            db_book,
        )

    @staticmethod
    def get_book(
        db: Session,
        book_id: int,
    ) -> Optional[Book]:

        return BookRepository.get_by_id(
            db,
            book_id,
        )

    @staticmethod
    def get_books(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):

        return BookRepository.get_all(
            db,
            skip,
            limit,
        )

    @staticmethod
    def get_featured_books(
        db: Session,
    ):

        return BookRepository.get_featured(db)

    @staticmethod
    def get_latest_books(
        db: Session,
        limit: int = 10,
    ):

        return BookRepository.get_latest(
            db,
            limit,
        )

    @staticmethod
    def search_books(
        db: Session,
        keyword: str,
    ):

        return BookRepository.search(
            db,
            keyword,
        )

    @staticmethod
    def filter_books(
        db: Session,
        subject: str | None = None,
        standard: int | None = None,
        medium: str | None = None,
    ):

        return BookRepository.filter(
            db=db,
            subject=subject,
            standard=standard,
            medium=medium,
        )

    @staticmethod
    def update_book(
        db: Session,
        book_id: int,
        book_update: BookUpdate,
    ):

        book = BookRepository.get_by_id(
            db,
            book_id,
        )

        if not book:
            return None

        update_data = book_update.model_dump(
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(book, key, value)

        return BookRepository.update(
            db,
            book,
        )

    @staticmethod
    def delete_book(
        db: Session,
        book_id: int,
    ):

        book = BookRepository.get_by_id(
            db,
            book_id,
        )

        if not book:
            return False

        BookRepository.delete(
            db,
            book,
        )

        return True