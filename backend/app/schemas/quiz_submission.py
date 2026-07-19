from pydantic import BaseModel
from typing import List


class AnswerItem(BaseModel):
    question_id: int
    selected_option: str


class QuizSubmission(BaseModel):
    user_id: int
    answers: List[AnswerItem]
    time_taken: int


class QuizResultResponse(BaseModel):
    score: float
    percentage: float
    correct_answers: int
    wrong_answers: int
    skipped_answers: int