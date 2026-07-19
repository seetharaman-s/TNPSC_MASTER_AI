from sqlalchemy.orm import Session
from app.repositories.progress_repository import ProgressRepository

class ProgressService:

    @staticmethod
    def get_dashboard(db: Session, user_id: int):
        """
        Returns the complete student progress dashboard.
        Replace the mock values with repository/database queries.
        """

        return {
            "overview": {
                "overall_progress": 78.5,
                "average_score": 84.2,
                "quizzes_completed": 126,
                "chapters_completed": 58,
                "study_hours": 142.5,
                "current_streak": 18,
            },
            "subjects": [
                {
                    "subject": "History",
                    "progress": 82,
                    "completed_topics": 41,
                    "total_topics": 50,
                    "average_score": 86,
                },
                {
                    "subject": "Polity",
                    "progress": 91,
                    "completed_topics": 32,
                    "total_topics": 35,
                    "average_score": 92,
                },
                {
                    "subject": "Geography",
                    "progress": 76,
                    "completed_topics": 38,
                    "total_topics": 50,
                    "average_score": 79,
                },
                {
                    "subject": "Science",
                    "progress": 88,
                    "completed_topics": 44,
                    "total_topics": 50,
                    "average_score": 90,
                },
            ],
            "weekly_study": [
                {"day": "Mon", "study_hours": 2.5, "quizzes_completed": 3},
                {"day": "Tue", "study_hours": 3.0, "quizzes_completed": 4},
                {"day": "Wed", "study_hours": 2.0, "quizzes_completed": 2},
                {"day": "Thu", "study_hours": 4.0, "quizzes_completed": 5},
                {"day": "Fri", "study_hours": 3.5, "quizzes_completed": 4},
                {"day": "Sat", "study_hours": 5.0, "quizzes_completed": 7},
                {"day": "Sun", "study_hours": 2.5, "quizzes_completed": 3},
            ],
            "recent_history": [],
            "achievements": [
                {
                    "id": 1,
                    "title": "100 MCQs",
                    "description": "Completed 100 MCQs",
                    "icon": "🏆",
                    "unlocked": True,
                },
                {
                    "id": 2,
                    "title": "15 Day Streak",
                    "description": "Studied for 15 consecutive days",
                    "icon": "🔥",
                    "unlocked": True,
                },
                {
                    "id": 3,
                    "title": "Fast Learner",
                    "description": "Completed 20 chapters",
                    "icon": "📚",
                    "unlocked": True,
                },
            ],
            "streak": {
                "current_streak": 18,
                "longest_streak": 31,
                "last_study_date": "2026-07-17",
            },
        }
    
    @staticmethod
    def continue_reading(db: Session, user_id: int):
        """
        Returns the books/notes the user was reading recently.
        """

        return [
            {
                "id": 1,
                "title": "Indian Polity",
                "chapter": "Fundamental Rights",
                "subject": "Polity",
                "progress": 72,
                "last_read": "2026-07-17",
            },
            {
                "id": 2,
                "title": "Tamil Grammar",
                "chapter": "Noun and Pronoun",
                "subject": "Tamil",
                "progress": 45,
                "last_read": "2026-07-16",
            },
            {
                "id": 3,
                "title": "Geography",
                "chapter": "Indian Rivers",
                "subject": "Geography",
                "progress": 91,
                "last_read": "2026-07-15",
            },
        ]

    @staticmethod
    def get_subject_progress(db: Session, user_id: int):
        dashboard = ProgressService.get_dashboard(db, user_id)
        return dashboard["subjects"]

    @staticmethod
    def get_weekly_study(db: Session, user_id: int):
        dashboard = ProgressService.get_dashboard(db, user_id)
        return dashboard["weekly_study"]

    @staticmethod
    def get_recent_history(db: Session, user_id: int):
        dashboard = ProgressService.get_dashboard(db, user_id)
        return dashboard["recent_history"]

    @staticmethod
    def get_achievements(db: Session, user_id: int):
        dashboard = ProgressService.get_dashboard(db, user_id)
        return dashboard["achievements"]

    @staticmethod
    def get_streak(db: Session, user_id: int):
        dashboard = ProgressService.get_dashboard(db, user_id)
        return dashboard["streak"]