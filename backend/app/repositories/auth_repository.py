from typing import Optional

from sqlalchemy.orm import Session

from app.models.refresh_token import RefreshToken
from app.models.user import User
from uuid import UUID


class AuthRepository:

    # ==========================
    # User Authentication
    # ==========================

    @staticmethod
    def get_user_by_email(
        db: Session,
        email: str,
    ) -> Optional[User]:
        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    @staticmethod
    def get_user_by_username(
        db: Session,
        username: str,
    ) -> Optional[User]:
        return (
            db.query(User)
            .filter(User.username == username)
            .first()
        )

    @staticmethod
    def save_user(
        db: Session,
        user: User,
    ) -> User:
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    @staticmethod
    def update_login(
        db: Session,
        user: User,
    ) -> User:
        db.commit()
        db.refresh(user)
        return user

    # ==========================
    # Refresh Token
    # ==========================

    @staticmethod
    def save_refresh_token(
        db: Session,
        token: RefreshToken,
    ) -> RefreshToken:
        db.add(token)
        db.commit()
        db.refresh(token)
        return token

    @staticmethod
    def get_refresh_token(
        db: Session,
        token_hash: str,
    ) -> Optional[RefreshToken]:
        return (
            db.query(RefreshToken)
            .filter(
                RefreshToken.token_hash == token_hash
            )
            .first()
        )

    @staticmethod
    def revoke_refresh_token(
        db: Session,
        refresh_token: RefreshToken,
    ) -> RefreshToken:
        db.commit()
        db.refresh(refresh_token)
        return refresh_token

    @staticmethod
    def delete_user_tokens(
        db: Session,
        user_id,
    ):
        (
            db.query(RefreshToken)
            .filter(
                RefreshToken.user_id == user_id
            )
            .delete()
        )

        db.commit()



    @staticmethod
    def get_user_by_id(db, user_id: UUID) -> User | None:
        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )