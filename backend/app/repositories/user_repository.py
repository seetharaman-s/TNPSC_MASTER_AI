from typing import Optional

from sqlalchemy.orm import Session

from app.models.user import User


class UserRepository:

    @staticmethod
    def get_by_id(db: Session, user_id: int) -> Optional[User]:
        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    @staticmethod
    def get_by_email(db: Session, email: str) -> Optional[User]:
        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    @staticmethod
    def get_by_username(db: Session, username: str) -> Optional[User]:
        return (
            db.query(User)
            .filter(User.username == username)
            .first()
        )

    @staticmethod
    def create(db: Session, user: User) -> User:
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    @staticmethod
    def update(db: Session, user: User) -> User:
        db.commit()
        db.refresh(user)
        return user

    @staticmethod
    def delete(db: Session, user: User):
        db.delete(user)
        db.commit()

    @staticmethod
    def list_users(
        db: Session,
        skip: int = 0,
        limit: int = 100,
    ):
        return (
            db.query(User)
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def update_last_login(
        db: Session,
        user: User,
        login_time,
    ) -> User:
        user.last_login = login_time
        db.commit()
        db.refresh(user)
        return user