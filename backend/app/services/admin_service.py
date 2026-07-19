from sqlalchemy.orm import Session

from app.repositories.admin_repository import (
    AdminRepository,
)


class AdminService:

    @staticmethod
    def dashboard(db: Session):
        return AdminRepository.dashboard(db)