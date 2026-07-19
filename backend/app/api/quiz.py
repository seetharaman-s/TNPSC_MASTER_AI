from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.quiz import (
    QuizCreate,
    QuizUpdate,
    QuizResponse,
)
from app.schemas.question import QuestionResponse
from app.services.quiz_service import QuizService

from app.schemas.quiz_submission import (
    QuizSubmission,
    QuizResultResponse,
)

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz"],
)


@router.get(
    "/",
    response_model=List[QuizResponse],
)
def get_all_quizzes(
    db: Session = Depends(get_db),
):
    return QuizService.get_all_quizzes(db)


@router.get(
    "/{quiz_id}",
    response_model=QuizResponse,
)
def get_quiz(
    quiz_id: int,
    db: Session = Depends(get_db),
):
    quiz = QuizService.get_quiz(db, quiz_id)

    if not quiz:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return quiz


@router.post(
    "/",
    response_model=QuizResponse,
    status_code=201,
)
def create_quiz(
    quiz: QuizCreate,
    db: Session = Depends(get_db),
):
    return QuizService.create_quiz(
        db,
        quiz,
    )


@router.put(
    "/{quiz_id}",
    response_model=QuizResponse,
)
def update_quiz(
    quiz_id: int,
    quiz: QuizUpdate,
    db: Session = Depends(get_db),
):
    updated = QuizService.update_quiz(
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


@router.delete(
    "/{quiz_id}",
)
def delete_quiz(
    quiz_id: int,
    db: Session = Depends(get_db),
):
    deleted = QuizService.delete_quiz(
        db,
        quiz_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return {
        "message": "Quiz deleted successfully"
    }


@router.get(
    "/{quiz_id}/questions",
    response_model=List[QuestionResponse],
)
def get_quiz_questions(
    quiz_id: int,
    db: Session = Depends(get_db),
):
    return QuizService.get_questions(
        db,
        quiz_id,
    )

@router.post(
    "/{quiz_id}/submit",
    response_model=QuizResultResponse,
)
def submit_quiz(
    quiz_id: int,
    submission: QuizSubmission,
    db: Session = Depends(get_db),
):
    return QuizService.submit_quiz(
        db,
        quiz_id,
        submission,
    )