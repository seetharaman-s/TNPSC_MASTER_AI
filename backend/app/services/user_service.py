from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.user_repository import UserRepository


class UserService:

    # --------------------------------------------------
    # Get User
    # --------------------------------------------------

    @staticmethod
    def get_by_id(
        db: Session,
        user_id: int,
    ):
        return UserRepository.get_by_id(
            db,
            user_id,
        )

    # --------------------------------------------------
    # List Users
    # --------------------------------------------------

    @staticmethod
    def list_users(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):
        return (
            db.query(User)
            .offset(skip)
            .limit(limit)
            .all()
        )

    # --------------------------------------------------
    # Search Users
    # --------------------------------------------------

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):

        return (
            db.query(User)
            .filter(
                or_(
                    User.username.ilike(
                        f"%{keyword}%"
                    ),
                    User.full_name.ilike(
                        f"%{keyword}%"
                    ),
                    User.email.ilike(
                        f"%{keyword}%"
                    ),
                )
            )
            .all()
        )

    # --------------------------------------------------
    # Filter by Role
    # --------------------------------------------------

    @staticmethod
    def filter_by_role(
        db: Session,
        role: str,
    ):

        return (
            db.query(User)
            .filter(User.role == role)
            .all()
        )

    # --------------------------------------------------
    # Filter Active Users
    # --------------------------------------------------

    @staticmethod
    def filter_active(
        db: Session,
        active: bool,
    ):

        return (
            db.query(User)
            .filter(User.is_active.is_(active))
            .all()
        )

    # --------------------------------------------------
    # Update User
    # --------------------------------------------------

    @staticmethod
    def update(
        db: Session,
        user: User,
        data: dict,
    ):

        for key, value in data.items():

            if hasattr(user, key):

                setattr(
                    user,
                    key,
                    value,
                )

        return UserRepository.update(
            db,
            user,
        )

    # --------------------------------------------------
    # Delete User
    # --------------------------------------------------

    @staticmethod
    def delete(
        db: Session,
        user: User,
    ):

        UserRepository.delete(
            db,
            user,
        )

        return {
            "message": "User deleted successfully."
        }

    # --------------------------------------------------
    # Activate / Deactivate
    # --------------------------------------------------

    @staticmethod
    def set_active(
        db: Session,
        user: User,
        active: bool,
    ):

        user.is_active = active

        return UserRepository.update(
            db,
            user,
        )

    # --------------------------------------------------
    # Change Role
    # --------------------------------------------------

    @staticmethod
    def change_role(
        db: Session,
        user: User,
        role: str,
    ):

        user.role = role

        return UserRepository.update(
            db,
            user,
        )