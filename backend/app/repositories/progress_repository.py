from sqlalchemy.orm import Session

from app.models.progress import Progress


class ProgressRepository:

    @staticmethod
    def get_continue_reading(
        db: Session,
        user_id: int,
    ):
        return (
            db.query(Progress)
            .order_by(
                Progress.updated_at.desc()
            )
            .first()
        )