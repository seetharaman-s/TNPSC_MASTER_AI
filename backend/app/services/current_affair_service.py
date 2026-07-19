from collections import defaultdict
from datetime import date
from typing import Optional

from sqlalchemy.orm import Session

from app.repositories.current_affair_repository import CurrentAffairRepository
from app.schemas.current_affair import (
    AITrendAnalysis,
    CurrentAffairCreate,
    CurrentAffairUpdate,
    CurrentAffairResponse,
    CurrentAffairsDashboard,
    DailyQuizQuestion,
    DashboardStatistics,
    DashboardSummary,
    OneLinerRevision,
    SubjectWiseCurrentAffairs,
)


class CurrentAffairService:

    repository = CurrentAffairRepository()

    # ======================================================
    # CREATE
    # ======================================================

    @staticmethod
    def create(
        db: Session,
        affair: CurrentAffairCreate,
    ):
        return CurrentAffairRepository.create(
            db,
            affair,
        )

    # ======================================================
    # GET BY ID
    # ======================================================

    @staticmethod
    def get_by_id(
        db: Session,
        affair_id: int,
    ):
        return CurrentAffairRepository.get_by_id(
            db,
            affair_id,
        )

    # ======================================================
    # GET ALL
    # ======================================================

    @staticmethod
    def get_all(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):
        return CurrentAffairRepository.get_all(
            db,
            skip,
            limit,
        )

    # ======================================================
    # UPDATE
    # ======================================================

    @staticmethod
    def update(
        db: Session,
        affair_id: int,
        affair: CurrentAffairUpdate,
    ):
        return CurrentAffairRepository.update(
            db,
            affair_id,
            affair,
        )

    # ======================================================
    # DELETE
    # ======================================================

    @staticmethod
    def delete(
        db: Session,
        affair_id: int,
    ):
        return CurrentAffairRepository.delete(
            db,
            affair_id,
        )

    # ======================================================
    # FEATURED
    # ======================================================

    @staticmethod
    def get_featured(
        db: Session,
    ):
        return CurrentAffairRepository.get_featured(
            db,
        )

    # ======================================================
    # LATEST
    # ======================================================

    @staticmethod
    def get_latest(
        db: Session,
        limit: int = 10,
    ):
        return CurrentAffairRepository.get_latest(
            db,
            limit,
        )

    # ======================================================
    # SEARCH
    # ======================================================

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):
        return CurrentAffairRepository.search(
            db,
            keyword,
        )

    # ======================================================
    # FILTER
    # ======================================================

    @staticmethod
    def filter(
        db: Session,
        category: Optional[str] = None,
        topic: Optional[str] = None,
        language: Optional[str] = None,
        publish_date: Optional[date] = None,
        featured: Optional[bool] = None,
    ):
        return CurrentAffairRepository.filter(
            db,
            category,
            topic,
            language,
            publish_date,
            featured,
        )

    # ======================================================
    # CATEGORY
    # ======================================================

    @staticmethod
    def get_categories(
        db: Session,
    ):
        return CurrentAffairRepository.get_categories(
            db,
        )

    # ======================================================
    # TOPICS
    # ======================================================

    @staticmethod
    def get_topics(
        db: Session,
    ):
        return CurrentAffairRepository.get_topics(
            db,
        )

    # ======================================================
    # LANGUAGES
    # ======================================================

    @staticmethod
    def get_languages(
        db: Session,
    ):
        return CurrentAffairRepository.get_languages(
            db,
        )
    
        # ======================================================
    # DASHBOARD
    # ======================================================

    @staticmethod
    def get_dashboard(db: Session):

        latest_articles = CurrentAffairRepository.get_latest(
            db,
            limit=10,
        )

        featured_articles = CurrentAffairRepository.get_featured(
            db,
        )

        total_articles = CurrentAffairRepository.count(db)

        total_views = CurrentAffairRepository.total_views(db)

        categories = CurrentAffairRepository.get_categories(db)

        languages = CurrentAffairRepository.get_languages(db)

        grouped = defaultdict(list)

        for article in latest_articles:
            subject = article.category or "General"
            grouped[subject].append(article)

        subject_news = []

        for subject, articles in grouped.items():
            subject_news.append(
                SubjectWiseCurrentAffairs(
                    subject=subject,
                    articles=[
                        CurrentAffairResponse.model_validate(a)
                        for a in articles
                    ],
                )
            )

        one_liners = []

        for article in latest_articles:

            fact = article.content

            if len(fact) > 150:
                fact = fact[:150] + "..."

            one_liners.append(
                OneLinerRevision(
                    id=article.id,
                    fact=fact,
                    category=article.category,
                )
            )

        quiz = []

        if latest_articles:

            first = latest_articles[0]

            quiz.append(
                DailyQuizQuestion(
                    id=1,
                    question=f"Which category does '{first.title}' belong to?",
                    options=[
                        first.category,
                        "History",
                        "Economy",
                        "Science",
                    ],
                    correct_answer=first.category,
                    explanation=f"This article belongs to {first.category}.",
                    category=first.category,
                    difficulty="Easy",
                )
            )

        trend = AITrendAnalysis(

            trending_topics=categories[:5],

            recommendation=(
                "Focus on recently published Government Schemes, "
                "Polity, Science & Technology and Economy."
            ),

            expected_questions=[
                f"Recent updates in {topic}"
                for topic in categories[:5]
            ],
        )

        statistics = DashboardStatistics(

            total_categories=len(categories),

            total_languages=len(languages),

            latest_publish_date=(
                latest_articles[0].publish_date
                if latest_articles
                else None
            ),
        )

        summary = DashboardSummary(

            total_articles=total_articles,

            active_articles=total_articles,

            featured_articles=len(featured_articles),

            total_views=total_views,
        )

        return CurrentAffairsDashboard(

            summary=summary,

            latest_articles=[
                CurrentAffairResponse.model_validate(a)
                for a in latest_articles
            ],

            featured_articles=[
                CurrentAffairResponse.model_validate(a)
                for a in featured_articles
            ],

            subject_wise_news=subject_news,

            one_liners=one_liners,

            daily_quiz=quiz,

            trend_analysis=trend,

            statistics=statistics,
        )