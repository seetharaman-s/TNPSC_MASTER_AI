from pydantic import BaseModel


class SaveAnswerRequest(BaseModel):
    attempt_id: int
    question_id: int
    selected_option: str


class SubmitQuizRequest(BaseModel):
    attempt_id: int