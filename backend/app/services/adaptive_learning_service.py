from sqlalchemy.orm import Session


class AdaptiveLearningService:
    """
    Service layer for the Adaptive Learning Engine.

    Currently returns structured mock data.
    Replace these values with repository/database queries
    and AI-generated recommendations in production.
    """

    @staticmethod
    def get_dashboard(db: Session, user_id: int):
        return {
            "weak_topics": AdaptiveLearningService.get_weak_topics(
                db, user_id
            ),
            "revision_plan": AdaptiveLearningService.get_revision_plan(
                db, user_id
            ),
            "recommended_mcqs": AdaptiveLearningService.get_recommended_mcqs(
                db, user_id
            ),
            "mastery": AdaptiveLearningService.get_subject_mastery(
                db, user_id
            ),
            "exam_readiness": AdaptiveLearningService.get_exam_readiness(
                db, user_id
            ),
            "daily_goals": AdaptiveLearningService.get_daily_goals(
                db, user_id
            ),
        }

    @staticmethod
    def get_weak_topics(db: Session, user_id: int):
        return [
            {
                "subject": "History",
                "topic": "Medieval India",
                "confidence": 42,
                "recommended_action": "Revise the Chola, Pandya and Vijayanagara kingdoms.",
            },
            {
                "subject": "Geography",
                "topic": "Indian Rivers",
                "confidence": 51,
                "recommended_action": "Practice river origin, tributaries and map-based questions.",
            },
            {
                "subject": "Economy",
                "topic": "Inflation",
                "confidence": 46,
                "recommended_action": "Revise CPI, WPI and monetary policy.",
            },
        ]

    @staticmethod
    def get_revision_plan(db: Session, user_id: int):
        return [
            {
                "day": "Today",
                "subject": "Polity",
                "topic": "Fundamental Rights",
                "estimated_minutes": 45,
                "priority": "High",
            },
            {
                "day": "Tomorrow",
                "subject": "History",
                "topic": "Freedom Movement",
                "estimated_minutes": 60,
                "priority": "Medium",
            },
            {
                "day": "This Week",
                "subject": "Science",
                "topic": "Human Body",
                "estimated_minutes": 90,
                "priority": "High",
            },
        ]

    @staticmethod
    def get_recommended_mcqs(db: Session, user_id: int):
        return [
            {
                "subject": "History",
                "topic": "Modern India",
                "difficulty": "Medium",
                "question_count": 20,
            },
            {
                "subject": "Science",
                "topic": "Physics",
                "difficulty": "Easy",
                "question_count": 15,
            },
            {
                "subject": "Polity",
                "topic": "Constitution",
                "difficulty": "Hard",
                "question_count": 10,
            },
        ]

    @staticmethod
    def get_subject_mastery(db: Session, user_id: int):
        return [
            {
                "subject": "History",
                "mastery_percentage": 82,
                "level": "Advanced",
            },
            {
                "subject": "Polity",
                "mastery_percentage": 91,
                "level": "Expert",
            },
            {
                "subject": "Geography",
                "mastery_percentage": 74,
                "level": "Intermediate",
            },
            {
                "subject": "Science",
                "mastery_percentage": 87,
                "level": "Advanced",
            },
        ]

    @staticmethod
    def get_exam_readiness(db: Session, user_id: int):
        return {
            "readiness_score": 82,
            "predicted_score": 165,
            "confidence": 88,
            "recommendation": (
                "Focus on weak History and Economy topics. "
                "Maintain your current study streak and continue daily MCQ practice."
            ),
        }

    @staticmethod
    def get_daily_goals(db: Session, user_id: int):
        return [
            {
                "title": "Revise Polity",
                "description": "Study Fundamental Rights for 45 minutes.",
                "completed": False,
            },
            {
                "title": "Solve MCQs",
                "description": "Complete 30 Aptitude questions.",
                "completed": False,
            },
            {
                "title": "Current Affairs",
                "description": "Read today's current affairs for 20 minutes.",
                "completed": True,
            },
        ]