from pydantic import BaseModel, ConfigDict
from typing import List


class DashboardSummary(BaseModel):
    total_users: int
    total_books: int
    total_notes: int
    total_current_affairs: int
    total_quizzes: int
    total_questions: int
    total_uploads: int


class UserAnalytics(BaseModel):
    active_users: int
    inactive_users: int
    verified_users: int
    admin_users: int
    student_users: int
    new_users_this_month: int


class QuizAnalytics(BaseModel):
    total_attempts: int
    average_score: float
    pass_rate: float
    failed_rate: float
    highest_score: float
    lowest_score: float


class BookAnalytics(BaseModel):
    total_books: int
    total_downloads: int
    total_views: int
    most_viewed_book: str
    most_downloaded_book: str


class CurrentAffairsAnalytics(BaseModel):
    total_articles: int
    published_this_month: int
    total_views: int


class UploadAnalytics(BaseModel):
    total_uploads: int
    total_pdf: int
    total_images: int
    total_videos: int
    total_size_mb: float


class ExamAnalytics(BaseModel):
    group1: int
    group2: int
    group2a: int
    group4: int
    vao: int


class MonthlyChart(BaseModel):
    month: str
    value: int


class RecentActivity(BaseModel):
    title: str
    description: str
    created_at: str


class DashboardReport(BaseModel):
    summary: DashboardSummary
    users: UserAnalytics
    quizzes: QuizAnalytics
    books: BookAnalytics
    current_affairs: CurrentAffairsAnalytics
    uploads: UploadAnalytics
    exams: ExamAnalytics
    monthly_users: List[MonthlyChart]
    monthly_quizzes: List[MonthlyChart]
    recent_activities: List[RecentActivity]

    model_config = ConfigDict(from_attributes=True)