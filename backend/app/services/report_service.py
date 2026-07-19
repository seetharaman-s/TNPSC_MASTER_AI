from sqlalchemy.orm import Session
from sqlalchemy import func

from app.schemas.report import (
    DashboardReport,
    DashboardSummary,
    UserAnalytics,
    QuizAnalytics,
    BookAnalytics,
    CurrentAffairsAnalytics,
    UploadAnalytics,
    ExamAnalytics,
    MonthlyChart,
    RecentActivity,
)

# Import your project models
# Adjust these imports if your model names differ.
from app.models.user import User
from app.models.book import Book
from app.models.note import Note
from app.models.current_affair import CurrentAffair
from app.models.quiz import Quiz
from app.models.question import Question
from app.models.upload import Upload


class ReportService:

    def __init__(self, db: Session):
        self.db = db

    # --------------------------------------------------
    # Dashboard Report
    # --------------------------------------------------

    def get_dashboard(self) -> DashboardReport:

        total_users = self.db.query(User).count()
        total_books = self.db.query(Book).count()
        total_notes = self.db.query(Note).count()
        total_current_affairs = self.db.query(CurrentAffair).count()
        total_quizzes = self.db.query(Quiz).count()
        total_questions = self.db.query(Question).count()
        total_uploads = self.db.query(Upload).count()

        summary = DashboardSummary(
            total_users=total_users,
            total_books=total_books,
            total_notes=total_notes,
            total_current_affairs=total_current_affairs,
            total_quizzes=total_quizzes,
            total_questions=total_questions,
            total_uploads=total_uploads,
        )

        active_users = (
            self.db.query(User)
            .filter(User.is_active == True)
            .count()
        )

        inactive_users = total_users - active_users

        verified_users = (
            self.db.query(User)
            .filter(User.is_verified == True)
            .count()
        )

        admin_users = (
            self.db.query(User)
            .filter(User.role == "admin")
            .count()
        )

        student_users = (
            self.db.query(User)
            .filter(User.role == "student")
            .count()
        )

        users = UserAnalytics(
            active_users=active_users,
            inactive_users=inactive_users,
            verified_users=verified_users,
            admin_users=admin_users,
            student_users=student_users,
            new_users_this_month=0,
        )

        quizzes = QuizAnalytics(
            total_attempts=0,
            average_score=0.0,
            pass_rate=0.0,
            failed_rate=0.0,
            highest_score=0.0,
            lowest_score=0.0,
        )

        most_viewed = (
            self.db.query(Book)
            .order_by(Book.views.desc())
            .first()
        )

        most_downloaded = (
            self.db.query(Book)
            .order_by(Book.downloads.desc())
            .first()
        )

        books = BookAnalytics(
            total_books=total_books,
            total_downloads=sum(
                b.downloads for b in self.db.query(Book).all()
            ),
            total_views=sum(
                b.views for b in self.db.query(Book).all()
            ),
            most_viewed_book=(
                most_viewed.title if most_viewed else ""
            ),
            most_downloaded_book=(
                most_downloaded.title if most_downloaded else ""
            ),
        )

        current_affairs = CurrentAffairsAnalytics(
            total_articles=total_current_affairs,
            published_this_month=0,
            total_views=0,
        )

        uploads = UploadAnalytics(
            total_uploads=total_uploads,
            total_pdf=0,
            total_images=0,
            total_videos=0,
            total_size_mb=0,
        )

        exams = ExamAnalytics(
            group1=0,
            group2=0,
            group2a=0,
            group4=0,
            vao=0,
        )

        monthly_users = [
            MonthlyChart(month="Jan", value=0),
            MonthlyChart(month="Feb", value=0),
            MonthlyChart(month="Mar", value=0),
            MonthlyChart(month="Apr", value=0),
            MonthlyChart(month="May", value=0),
            MonthlyChart(month="Jun", value=0),
            MonthlyChart(month="Jul", value=0),
            MonthlyChart(month="Aug", value=0),
            MonthlyChart(month="Sep", value=0),
            MonthlyChart(month="Oct", value=0),
            MonthlyChart(month="Nov", value=0),
            MonthlyChart(month="Dec", value=0),
        ]

        monthly_quizzes = [
            MonthlyChart(month=item.month, value=0)
            for item in monthly_users
        ]

        recent = (
            self.db.query(User)
            .order_by(User.created_at.desc())
            .limit(10)
            .all()
        )

        recent_activities = [
            RecentActivity(
                title="New User",
                description=f"{user.full_name} registered",
                created_at=str(user.created_at),
            )
            for user in recent
        ]

        return DashboardReport(
            summary=summary,
            users=users,
            quizzes=quizzes,
            books=books,
            current_affairs=current_affairs,
            uploads=uploads,
            exams=exams,
            monthly_users=monthly_users,
            monthly_quizzes=monthly_quizzes,
            recent_activities=recent_activities,
        )

    # --------------------------------------------------
    # Individual Analytics
    # --------------------------------------------------

    def get_user_analytics(self):
        return self.get_dashboard().users

    def get_quiz_analytics(self):
        return self.get_dashboard().quizzes

    def get_book_analytics(self):
        return self.get_dashboard().books

    def get_current_affairs_analytics(self):
        return self.get_dashboard().current_affairs

    def get_upload_analytics(self):
        return self.get_dashboard().uploads

    def get_exam_analytics(self):
        return self.get_dashboard().exams