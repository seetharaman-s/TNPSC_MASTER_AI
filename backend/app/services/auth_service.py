from datetime import datetime, timezone

from sqlalchemy.orm import Session

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)
from app.models.user import User
from app.repositories.user_repository import UserRepository


class AuthService:

    @staticmethod
    def register(
        db: Session,
        username: str,
        email: str,
        password: str,
        full_name: str | None = None,
        phone: str | None = None,
    ):

        if UserRepository.get_by_email(db, email):
            raise ValueError("Email already exists.")

        if UserRepository.get_by_username(db, username):
            raise ValueError("Username already exists.")

        user = User(
            username=username,
            email=email,
            password_hash=hash_password(password),
            full_name=full_name,
            phone=phone,
            role="user",
            is_active=True,
            is_verified=False,
        )

        return UserRepository.create(db, user)

    @staticmethod
    def login(
        db: Session,
        email: str,
        password: str,
    ):

        user = UserRepository.get_by_email(db, email)

        if user is None:
            return None

        if not user.is_active:
            return None

        if not verify_password(
            password,
            user.password_hash,
        ):
            return None

        UserRepository.update_last_login(
            db,
            user,
            datetime.now(timezone.utc),
        )

        token = create_access_token(
            {
                "sub": str(user.id),
                "email": user.email,
                "role": user.role,
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "expires_in": 86400,
            "user": user,
            
        }

    @staticmethod
    def get_profile(
        db: Session,
        user_id: int,
    ):

        return UserRepository.get_by_id(
            db,
            user_id,
        )

    @staticmethod
    def update_profile(
        db: Session,
        user: User,
        data: dict,
    ):

        for key, value in data.items():
            if hasattr(user, key) and value is not None:
                setattr(user, key, value)

        return UserRepository.update(
            db,
            user,
        )

    @staticmethod
    def change_password(
        db: Session,
        user: User,
        old_password: str,
        new_password: str,
    ):

        if not verify_password(
            old_password,
            user.password_hash,
        ):
            return False

        user.password_hash = hash_password(
            new_password
        )

        UserRepository.update(
            db,
            user,
        )

        return True