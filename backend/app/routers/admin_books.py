from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.models.book import Book
from app.schemas.book import BookCreate

router = APIRouter(prefix="/admin/books", tags=["Admin Books"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def list_books(db: Session = Depends(get_db)):
    return db.query(Book).order_by(Book.id.desc()).all()


@router.post("/")
def create_book(book: BookCreate, db: Session = Depends(get_db)):
    new_book = Book(**book.model_dump())
    db.add(new_book)
    db.commit()
    db.refresh(new_book)
    return new_book


@router.put("/{book_id}")
def update_book(book_id: int, book: BookCreate, db: Session = Depends(get_db)):
    existing = db.query(Book).filter(Book.id == book_id).first()

    if not existing:
        raise HTTPException(status_code=404, detail="Book not found")

    for key, value in book.model_dump().items():
        setattr(existing, key, value)

    db.commit()
    db.refresh(existing)
    return existing


@router.delete("/{book_id}")
def delete_book(book_id: int, db: Session = Depends(get_db)):
    existing = db.query(Book).filter(Book.id == book_id).first()

    if not existing:
        raise HTTPException(status_code=404, detail="Book not found")

    db.delete(existing)
    db.commit()

    return {"message": "Book deleted successfully"}