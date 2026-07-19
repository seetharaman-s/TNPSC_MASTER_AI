from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.mock_interview import AnswerSubmission
from app.services.mock_interview_service import MockInterviewService

router = APIRouter(
    prefix="/mock-interview",
    tags=["Mock Interview"],
)


@router.get("/dashboard")
def get_dashboard(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get the mock interview dashboard.
    """
    return MockInterviewService.get_dashboard(
        db,
        user_id,
    )


@router.get("/questions")
def get_questions(
    subject: str,
    difficulty: str = "Medium",
    db: Session = Depends(get_db),
):
    """
    Get interview questions by subject and difficulty.
    """
    return MockInterviewService.get_questions(
        db,
        subject,
        difficulty,
    )


@router.post("/evaluate")
def evaluate_answer(
    submission: AnswerSubmission,
    db: Session = Depends(get_db),
):
    """
    Evaluate a descriptive answer.
    """
    return MockInterviewService.evaluate_answer(
        db,
        submission.question_id,
        submission.answer,
    )


@router.get("/current-session")
def get_current_session(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get the current interview session.
    """
    return MockInterviewService.get_current_session(
        db,
        user_id,
    )


@router.get("/history")
def get_history(
    user_id: int,
    db: Session = Depends(get_db),
):
    """
    Get interview performance history.
    """
    return MockInterviewService.get_history(
        db,
        user_id,
    )