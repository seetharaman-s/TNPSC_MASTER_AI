from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.quiz import (
    QuizCreate,
    QuizUpdate,
    QuizResponse,
)
from app.services.quiz_service import QuizService

router = APIRouter(
    prefix="/quizzes",
    tags=["Quizzes"],
)


@router.post("/", response_model=QuizResponse, status_code=201)
def create(
    quiz: QuizCreate,
    db: Session = Depends(get_db),
):
    return QuizService.create(db, quiz)


@router.get("/", response_model=list[QuizResponse])
def get_all(
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db),
):
    return QuizService.get_all(
        db,
        skip,
        limit,
    )


@router.get("/featured", response_model=list[QuizResponse])
def featured(
    db: Session = Depends(get_db),
):
    return QuizService.get_featured(db)


@router.get("/latest", response_model=list[QuizResponse])
def latest(
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return QuizService.get_latest(
        db,
        limit,
    )


@router.get("/search", response_model=list[QuizResponse])
def search(
    keyword: str,
    db: Session = Depends(get_db),
):
    return QuizService.search(
        db,
        keyword,
    )


@router.get("/filter", response_model=list[QuizResponse])
def filter_quizzes(
    subject: Optional[str] = None,
    standard: Optional[int] = None,
    unit: Optional[int] = None,
    difficulty: Optional[str] = None,
    db: Session = Depends(get_db),
):
    return QuizService.filter(
        db=db,
        subject=subject,
        standard=standard,
        unit=unit,
        difficulty=difficulty,
    )


@router.get("/{quiz_id}", response_model=QuizResponse)
def get_by_id(
    quiz_id: int,
    db: Session = Depends(get_db),
):
    quiz = QuizService.get_by_id(
        db,
        quiz_id,
    )

    if not quiz:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return quiz


@router.put("/{quiz_id}", response_model=QuizResponse)
def update(
    quiz_id: int,
    quiz: QuizUpdate,
    db: Session = Depends(get_db),
):
    updated = QuizService.update(
        db,
        quiz_id,
        quiz,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return updated


@router.delete("/{quiz_id}")
def delete(
    quiz_id: int,
    db: Session = Depends(get_db),
):
    success = QuizService.delete(
        db,
        quiz_id,
    )

    if not success:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return {
        "message": "Quiz deleted successfully"
    }

@router.get("/{quiz_id}/questions")
def get_questions(
    quiz_id: int,
    db: Session = Depends(get_db),
):
    return QuizService.get_questions(
        db,
        quiz_id,
    )