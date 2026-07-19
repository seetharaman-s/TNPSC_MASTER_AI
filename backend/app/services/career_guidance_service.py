from datetime import date, timedelta

from app.schemas.career_guidance import (
    CareerDashboard,
    DailyStudyPlan,
    WeeklyStudyPlan,
    StudyTask,
    SubjectRecommendation,
    Goal,
    ExamReadiness,
    Motivation,
)


class CareerGuidanceService:
    """Service for generating personalized study guidance."""

    @staticmethod
    def get_dashboard(user_id: int) -> CareerDashboard:
        today = date.today()

        tasks = [
            StudyTask(
                task_id=1,
                title="Study Indian Polity",
                subject="General Studies",
                topic="Constitution",
                duration_minutes=90,
                priority="High",
                completed=False,
            ),
            StudyTask(
                task_id=2,
                title="Practice Aptitude",
                subject="Aptitude",
                topic="Percentage",
                duration_minutes=60,
                priority="Medium",
                completed=True,
            ),
            StudyTask(
                task_id=3,
                title="Current Affairs Revision",
                subject="Current Affairs",
                topic="Last 30 Days",
                duration_minutes=45,
                priority="High",
                completed=False,
            ),
        ]

        daily_plan = DailyStudyPlan(
            date=today,
            total_study_minutes=195,
            completion_percentage=40,
            tasks=tasks,
        )

        weekly_plan = WeeklyStudyPlan(
            week_start=today,
            week_end=today + timedelta(days=6),
            target_hours=25,
            completed_hours=11,
            daily_plans=[daily_plan],
        )

        recommendations = [
            SubjectRecommendation(
                subject="History",
                strength_score=82,
                recommendation="Maintain regular revision.",
                recommended_topics=[
                    "Freedom Movement",
                    "Sangam Age",
                ],
                priority="Medium",
            ),
            SubjectRecommendation(
                subject="Geography",
                strength_score=55,
                recommendation="Needs improvement.",
                recommended_topics=[
                    "Rivers",
                    "Climate",
                    "Agriculture",
                ],
                priority="High",
            ),
            SubjectRecommendation(
                subject="Polity",
                strength_score=90,
                recommendation="Strong subject. Focus on PYQs.",
                recommended_topics=[
                    "Fundamental Rights",
                    "Parliament",
                ],
                priority="Low",
            ),
        ]

        goals = [
            Goal(
                goal_id=1,
                title="Complete GS Unit 1",
                description="Finish all chapters and MCQs.",
                target_date=today + timedelta(days=7),
                progress_percentage=60,
                completed=False,
            ),
            Goal(
                goal_id=2,
                title="Solve 100 Aptitude Questions",
                description="Practice daily.",
                target_date=today + timedelta(days=10),
                progress_percentage=35,
                completed=False,
            ),
        ]

        readiness = ExamReadiness(
        overall_readiness=74,
        predicted_score=84,
        predicted_rank=245,
        passing_probability=88,
        strengths=[
            "Polity",
            "History",
            "Reasoning",
        ],
        weak_areas=[
            "Geography",
            "Science",
        ],
        recommendations=[
            "Increase Geography revision.",
            "Take two mock tests this week.",
            "Revise current affairs daily.",
        ],
    )

        motivation = Motivation(
            quote=(
                "Success is the sum of small efforts repeated every day."
            ),
            author="Robert Collier",
            study_tip=(
                "Revise within 24 hours after learning a topic."
            ),
            productivity_score=81,
            consistency_streak=18,
        )

        return CareerDashboard(
            daily_plan=daily_plan,
            weekly_plan=weekly_plan,
            subject_recommendations=recommendations,
            goals=goals,
            exam_readiness=readiness,
            motivation=motivation,
        )