from datetime import date
from sqlalchemy.orm import Session


class MockInterviewService:
    """
    Service layer for the AI Mock Interview module.

    This implementation returns structured mock data.
    Replace the mock logic with database queries and
    LLM-powered evaluation in production.
    """

    @staticmethod
    def get_questions(
        db: Session,
        subject: str,
        difficulty: str,
    ):
        return [
            {
                "id": 1,
                "subject": subject,
                "topic": "Indian Constitution",
                "difficulty": difficulty,
                "question": (
                    "Explain the Fundamental Rights provided under "
                    "the Constitution of India."
                ),
            },
            {
                "id": 2,
                "subject": subject,
                "topic": "Directive Principles",
                "difficulty": difficulty,
                "question": (
                    "Differentiate between Fundamental Rights and "
                    "Directive Principles of State Policy."
                ),
            },
            {
                "id": 3,
                "subject": subject,
                "topic": "Parliament",
                "difficulty": difficulty,
                "question": (
                    "Explain the powers and functions of the Lok Sabha."
                ),
            },
        ]

    @staticmethod
    def evaluate_answer(
        db: Session,
        question_id: int,
        answer: str,
    ):
        length = len(answer.strip())

        overall_score = min(
            100,
            max(40, (length // 5)),
        )

        criteria = [
            {
                "name": "Concept Accuracy",
                "score": 8.5,
                "feedback": (
                    "The answer covers the major concepts correctly."
                ),
            },
            {
                "name": "Completeness",
                "score": 8.0,
                "feedback": (
                    "Include additional examples for a stronger answer."
                ),
            },
            {
                "name": "Structure",
                "score": 9.0,
                "feedback": (
                    "Well-organized with a logical flow."
                ),
            },
            {
                "name": "Language",
                "score": 8.0,
                "feedback": (
                    "Language is clear and easy to understand."
                ),
            },
        ]

        return {
            "overall_score": overall_score,
            "strengths": [
                "Good conceptual understanding.",
                "Logical answer structure.",
                "Relevant terminology used.",
            ],
            "improvements": [
                "Add real-world examples.",
                "Improve conclusion.",
                "Mention constitutional articles where applicable.",
            ],
            "ai_feedback": (
                "Your answer demonstrates a good understanding of "
                "the topic. To achieve a higher score, provide "
                "additional examples, relevant constitutional "
                "provisions, and a concise concluding summary."
            ),
            "criteria": criteria,
        }

    @staticmethod
    def get_current_session(
        db: Session,
        user_id: int,
    ):
        return {
            "session_id": 1001,
            "subject": "Polity",
            "total_questions": 10,
            "completed_questions": 4,
            "average_score": 82.5,
        }

    @staticmethod
    def get_history(
        db: Session,
        user_id: int,
    ):
        return [
            {
                "session_id": 996,
                "subject": "History",
                "date": str(date.today()),
                "score": 78.0,
            },
            {
                "session_id": 997,
                "subject": "Geography",
                "date": str(date.today()),
                "score": 84.5,
            },
            {
                "session_id": 998,
                "subject": "Polity",
                "date": str(date.today()),
                "score": 88.0,
            },
        ]

    @staticmethod
    def get_dashboard(
        db: Session,
        user_id: int,
    ):
        return {
            "current_session": (
                MockInterviewService.get_current_session(
                    db,
                    user_id,
                )
            ),
            "history": (
                MockInterviewService.get_history(
                    db,
                    user_id,
                )
            ),
        }