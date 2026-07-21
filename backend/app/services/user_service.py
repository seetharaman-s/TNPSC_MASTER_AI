from uuid import UUID

from sqlalchemy.orm import Session

from app.models.role import Role
from app.models.user import User
from app.repositories.user_repository import UserRepository


class UserService:
    """
    User Management Service
    """

    # =====================================================
    # Get User By ID
    # =====================================================

    @staticmethod
    def get_by_id(
        db: Session,
        user_id: UUID,
    ) -> User | None:

        return UserRepository.get_by_id(
            db,
            user_id,
        )

    # =====================================================
    # Get User By Email
    # =====================================================

    @staticmethod
    def get_by_email(
        db: Session,
        email: str,
    ) -> User | None:

        return UserRepository.get_by_email(
            db,
            email,
        )

    # =====================================================
    # Get User By Username
    # =====================================================

    @staticmethod
    def get_by_username(
        db: Session,
        username: str,
    ) -> User | None:

        return UserRepository.get_by_username(
            db,
            username,
        )

    # =====================================================
    # List Users
    # =====================================================

    @staticmethod
    def list_users(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):

        return UserRepository.list_users(
            db,
            skip,
            limit,
        )

    # =====================================================
    # Search Users
    # =====================================================

    @staticmethod
    def search_users(
        db: Session,
        keyword: str,
    ):

        return UserRepository.search(
            db,
            keyword,
        )

    # =====================================================
    # Update User
    # =====================================================

    @staticmethod
    def update_user(
        db: Session,
        user: User,
        data: dict,
    ) -> User:

        allowed_fields = {
            "full_name",
            "phone",
            "language",
            "theme",
            "profile_image_url",
            "is_active",
        }

        for key, value in data.items():

            if (
                key in allowed_fields
                and value is not None
            ):
                setattr(
                    user,
                    key,
                    value,
                )

        return UserRepository.update(
            db,
            user,
        )

    # =====================================================
    # Delete User (Soft Delete)
    # =====================================================

    @staticmethod
    def delete_user(
        db: Session,
        user: User,
    ):

        UserRepository.delete(
            db,
            user,
        )

        return {
            "message":
            "User deleted successfully."
        }

    # =====================================================
    # Activate User
    # =====================================================

    @staticmethod
    def activate_user(
        db: Session,
        user: User,
    ):

        user.is_active = True

        return UserRepository.update(
            db,
            user,
        )

    # =====================================================
    # Deactivate User
    # =====================================================

    @staticmethod
    def deactivate_user(
        db: Session,
        user: User,
    ):

        user.is_active = False

        return UserRepository.update(
            db,
            user,
        )

    # =====================================================
    # Change Role
    # =====================================================

    @staticmethod
    def change_role(
        db: Session,
        user: User,
        role_name: str,
    ):

        role = (
            db.query(Role)
            .filter(
                Role.name == role_name
            )
            .first()
        )

        if role is None:
            raise ValueError(
                "Role not found."
            )

        user.role_id = role.id

        return UserRepository.update(
            db,
            user,
        )

    # =====================================================
    # Verify User
    # =====================================================

    @staticmethod
    def verify_user(
        db: Session,
        user: User,
    ):

        user.is_verified = True

        return UserRepository.update(
            db,
            user,
        )

    # =====================================================
    # Lock User
    # =====================================================

    @staticmethod
    def lock_user(
        db: Session,
        user: User,
    ):

        user.is_locked = True

        return UserRepository.update(
            db,
            user,
        )

    # =====================================================
    # Unlock User
    # =====================================================

    @staticmethod
    def unlock_user(
        db: Session,
        user: User,
    ):

        user.is_locked = False
        user.failed_login_attempts = 0

        return UserRepository.update(
            db,
            user,
        )