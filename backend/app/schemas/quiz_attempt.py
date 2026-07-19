from pydantic import BaseModel


class QuizStartRequest(BaseModel):
    quiz_id: int


class QuizAttemptResponse(BaseModel):
    attempt_id: int
    quiz_id: int
    total_questions: int
    time_limit: int