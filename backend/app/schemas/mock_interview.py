from typing import List
from pydantic import BaseModel, ConfigDict, Field


# ==========================================================
# Interview Question
# ==========================================================

class InterviewQuestion(BaseModel):
    id: int
    subject: str
    topic: str
    difficulty: str
    question: str

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# User Answer Submission
# ==========================================================

class AnswerSubmission(BaseModel):
    question_id: int
    answer: str = Field(..., min_length=10)


# ==========================================================
# Evaluation Criteria
# ==========================================================

class EvaluationCriterion(BaseModel):
    name: str
    score: float = Field(..., ge=0, le=10)
    feedback: str


# ==========================================================
# Answer Evaluation
# ==========================================================

class AnswerEvaluation(BaseModel):
    overall_score: float = Field(..., ge=0, le=100)
    strengths: List[str]
    improvements: List[str]
    ai_feedback: str
    criteria: List[EvaluationCriterion]

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Interview Session
# ==========================================================

class InterviewSession(BaseModel):
    session_id: int
    subject: str
    total_questions: int
    completed_questions: int
    average_score: float

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Performance History
# ==========================================================

class InterviewHistory(BaseModel):
    session_id: int
    subject: str
    date: str
    score: float

    model_config = ConfigDict(from_attributes=True)


# ==========================================================
# Dashboard
# ==========================================================

class InterviewDashboard(BaseModel):
    current_session: InterviewSession
    history: List[InterviewHistory]

    model_config = ConfigDict(from_attributes=True)