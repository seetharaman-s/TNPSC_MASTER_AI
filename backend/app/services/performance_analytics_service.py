from app.schemas.performance_analytics import (
    AIInsight,
    PerformanceAnalyticsDashboard,
    PerformanceOverview,
    RankPrediction,
    StrengthWeakness,
    StudyRecommendation,
    SubjectPerformance,
    TimeAnalysis,
    WeeklyPerformance,
)


class PerformanceAnalyticsService:
    def get_dashboard(
        self,
        user_id: int,
    ) -> PerformanceAnalyticsDashboard:

        overview = PerformanceOverview(
            overall_score=84.6,
            average_accuracy=81.3,
            tests_completed=42,
            questions_attempted=5230,
            questions_correct=4254,
            total_study_hours=286.5,
        )

        subject_performance = [
            SubjectPerformance(
                subject="General Tamil",
                accuracy=91.4,
                questions_attempted=780,
                questions_correct=713,
                study_hours=62.5,
                mastery_score=93.1,
                ai_confidence=95.4,
            ),
            SubjectPerformance(
                subject="General Studies",
                accuracy=83.8,
                questions_attempted=1320,
                questions_correct=1106,
                study_hours=84.3,
                mastery_score=84.7,
                ai_confidence=91.2,
            ),
            SubjectPerformance(
                subject="Aptitude & Mental Ability",
                accuracy=78.2,
                questions_attempted=910,
                questions_correct=712,
                study_hours=54.0,
                mastery_score=76.5,
                ai_confidence=88.6,
            ),
            SubjectPerformance(
                subject="Current Affairs",
                accuracy=74.6,
                questions_attempted=610,
                questions_correct=455,
                study_hours=38.8,
                mastery_score=73.2,
                ai_confidence=86.1,
            ),
            SubjectPerformance(
                subject="History",
                accuracy=79.8,
                questions_attempted=620,
                questions_correct=495,
                study_hours=47.0,
                mastery_score=80.4,
                ai_confidence=89.4,
            ),
            SubjectPerformance(
                subject="Geography",
                accuracy=77.9,
                questions_attempted=540,
                questions_correct=421,
                study_hours=40.6,
                mastery_score=78.3,
                ai_confidence=87.8,
            ),
            SubjectPerformance(
                subject="Polity",
                accuracy=82.6,
                questions_attempted=450,
                questions_correct=372,
                study_hours=36.4,
                mastery_score=83.7,
                ai_confidence=90.6,
            ),
        ]

        weekly_performance = [
            WeeklyPerformance(
                week="Week 1",
                score=71,
                accuracy=69,
                study_hours=18,
                tests_completed=4,
            ),
            WeeklyPerformance(
                week="Week 2",
                score=75,
                accuracy=73,
                study_hours=20,
                tests_completed=5,
            ),
            WeeklyPerformance(
                week="Week 3",
                score=79,
                accuracy=77,
                study_hours=23,
                tests_completed=6,
            ),
            WeeklyPerformance(
                week="Week 4",
                score=82,
                accuracy=80,
                study_hours=25,
                tests_completed=6,
            ),
            WeeklyPerformance(
                week="Week 5",
                score=84,
                accuracy=82,
                study_hours=27,
                tests_completed=7,
            ),
            WeeklyPerformance(
                week="Week 6",
                score=87,
                accuracy=85,
                study_hours=29,
                tests_completed=8,
            ),
        ]

        time_analysis = TimeAnalysis(
            average_time_per_question=52.3,
            fastest_subject="General Tamil",
            slowest_subject="Current Affairs",
            daily_study_hours=3.8,
            weekly_study_hours=26.4,
        )

        rank_prediction = RankPrediction(
            predicted_score=184.5,
            predicted_district_rank=31,
            predicted_state_rank=468,
            selection_probability=88.4,
        )

        ai_insights = [
            AIInsight(
                title="Excellent Tamil Performance",
                description=(
                    "General Tamil is consistently above 90% "
                    "accuracy. Maintain weekly revision."
                ),
                priority="Low",
            ),
            AIInsight(
                title="Improve Current Affairs",
                description=(
                    "Current Affairs accuracy is below target. "
                    "Spend 30 minutes daily on revision."
                ),
                priority="High",
            ),
            AIInsight(
                title="Increase Mock Tests",
                description=(
                    "Attempt two additional full-length mock "
                    "tests every week."
                ),
                priority="Medium",
            ),
            AIInsight(
                title="Maintain Consistency",
                description=(
                    "Your study consistency has improved by "
                    "12% over the last month."
                ),
                priority="Low",
            ),
        ]

        study_recommendations = [
            StudyRecommendation(
                subject="Current Affairs",
                recommendation=(
                    "Practice daily current affairs and weekly "
                    "revision quizzes."
                ),
                recommended_hours=6,
                priority="High",
            ),
            StudyRecommendation(
                subject="Aptitude",
                recommendation=(
                    "Practice shortcut methods and solve "
                    "timed problems."
                ),
                recommended_hours=5,
                priority="Medium",
            ),
            StudyRecommendation(
                subject="General Studies",
                recommendation=(
                    "Revise important one-liners and previous "
                    "year questions."
                ),
                recommended_hours=4,
                priority="Medium",
            ),
            StudyRecommendation(
                subject="General Tamil",
                recommendation=(
                    "Maintain current preparation with weekly "
                    "revision."
                ),
                recommended_hours=2,
                priority="Low",
            ),
        ]

        strength_weakness = StrengthWeakness(
            strengths=[
                "General Tamil",
                "Polity",
                "General Studies",
                "Revision Consistency",
            ],
            weaknesses=[
                "Current Affairs",
                "Time Management",
                "Advanced Aptitude",
            ],
        )

        return PerformanceAnalyticsDashboard(
            overview=overview,
            subject_performance=subject_performance,
            weekly_performance=weekly_performance,
            time_analysis=time_analysis,
            rank_prediction=rank_prediction,
            ai_insights=ai_insights,
            study_recommendations=study_recommendations,
            strength_weakness=strength_weakness,
        )


performance_analytics_service = PerformanceAnalyticsService()