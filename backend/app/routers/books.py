from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.book import (
    BookCreate,
    BookUpdate,
    BookResponse,
)
from app.services.book_service import BookService

router = APIRouter(
    prefix="/books",
    tags=["Books"],
)


@router.post(
    "/",
    response_model=BookResponse,
    status_code=201,
)
def create_book(
    book: BookCreate,
    db: Session = Depends(get_db),
):
    return BookService.create_book(db, book)


@router.get(
    "/",
    response_model=list[BookResponse],
)
def get_books(
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db),
):
    return BookService.get_books(db, skip, limit)


@router.get(
    "/featured",
    response_model=list[BookResponse],
)
def featured_books(
    db: Session = Depends(get_db),
):
    return BookService.get_featured_books(db)


@router.get(
    "/latest",
    response_model=list[BookResponse],
)
def latest_books(
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return BookService.get_latest_books(db, limit)


@router.get(
    "/search",
    response_model=list[BookResponse],
)
def search_books(
    keyword: str,
    db: Session = Depends(get_db),
):
    return BookService.search_books(db, keyword)


@router.get(
    "/filter",
    response_model=list[BookResponse],
)
def filter_books(
    subject: Optional[str] = None,
    standard: Optional[int] = None,
    medium: Optional[str] = None,
    db: Session = Depends(get_db),
):
    return BookService.filter_books(
        db=db,
        subject=subject,
        standard=standard,
        medium=medium,
    )


@router.get(
    "/{book_id}",
    response_model=BookResponse,
)
def get_book(
    book_id: int,
    db: Session = Depends(get_db),
):
    book = BookService.get_book(db, book_id)

    if not book:
        raise HTTPException(
            status_code=404,
            detail="Book not found",
        )

    return book


@router.put(
    "/{book_id}",
    response_model=BookResponse,
)
def update_book(
    book_id: int,
    book: BookUpdate,
    db: Session = Depends(get_db),
):
    updated = BookService.update_book(
        db,
        book_id,
        book,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Book not found",
        )

    return updated


@router.delete("/{book_id}")
def delete_book(
    book_id: int,
    db: Session = Depends(get_db),
):
    success = BookService.delete_book(
        db,
        book_id,
    )

    if not success:
        raise HTTPException(
            status_code=404,
            detail="Book not found",
        )

    return {
        "message": "Book deleted successfully"
    }