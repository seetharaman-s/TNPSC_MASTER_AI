from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import SessionLocal
from app.services.book_service import get_books

router = APIRouter(prefix="/books", tags=["Books"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def read_books(db: Session = Depends(get_db)):
    return get_books(db)