from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel


class CurrentAffairBase(BaseModel):
    title: str
    category: str
    topic: Optional[str] = None
    content: str
    source: Optional[str] = None
    pdf_url: Optional[str] = None
    image_url: Optional[str] = None
    publish_date: date
    language: str = "Tamil"
    featured: bool = False
    is_active: bool = True


class CurrentAffairCreate(CurrentAffairBase):
    pass


class CurrentAffairUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None
    topic: Optional[str] = None
    content: Optional[str] = None
    source: Optional[str] = None
    pdf_url: Optional[str] = None
    image_url: Optional[str] = None
    publish_date: Optional[date] = None
    language: Optional[str] = None
    featured: Optional[bool] = None
    is_active: Optional[bool] = None


class CurrentAffairResponse(CurrentAffairBase):
    id: int
    views: int
    created_at: datetime
    updated_at: datetime

    model_config = {
        "from_attributes": True
    }

from typing import List


class DashboardSummary(BaseModel):
    total_articles: int
    active_articles: int
    featured_articles: int
    total_views: int


class SubjectWiseCurrentAffairs(BaseModel):
    subject: str
    articles: List[CurrentAffairResponse]


class OneLinerRevision(BaseModel):
    id: int
    fact: str
    category: str


class DailyQuizQuestion(BaseModel):
    id: int
    question: str
    options: List[str]
    correct_answer: str
    explanation: str
    category: str
    difficulty: str


class AITrendAnalysis(BaseModel):
    trending_topics: List[str]
    recommendation: str
    expected_questions: List[str]


class DashboardStatistics(BaseModel):
    total_categories: int
    total_languages: int
    latest_publish_date: Optional[date] = None


class CurrentAffairsDashboard(BaseModel):
    summary: DashboardSummary

    latest_articles: List[CurrentAffairResponse]

    featured_articles: List[CurrentAffairResponse]

    subject_wise_news: List[SubjectWiseCurrentAffairs]

    one_liners: List[OneLinerRevision]

    daily_quiz: List[DailyQuizQuestion]

    trend_analysis: AITrendAnalysis

    statistics: DashboardStatistics


class CategoryResponse(BaseModel):
    categories: List[str]


class TopicResponse(BaseModel):
    topics: List[str]


class LanguageResponse(BaseModel):
    languages: List[str]


class SearchResponse(BaseModel):
    total: int
    results: List[CurrentAffairResponse]


class PaginatedCurrentAffairs(BaseModel):
    total: int
    skip: int
    limit: int
    items: List[CurrentAffairResponse]


class BookmarkResponse(BaseModel):
    id: int
    user_id: int
    current_affair_id: int
    created_at: datetime


class AnalyticsResponse(BaseModel):
    total_articles: int
    featured_articles: int
    active_articles: int
    total_views: int
    categories: int
    languages: int


