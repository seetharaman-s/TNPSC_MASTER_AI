from datetime import date
from typing import Optional

from sqlalchemy import desc, func, or_
from sqlalchemy.orm import Session

from app.models.current_affair import CurrentAffair
from app.schemas.current_affair import (
    CurrentAffairCreate,
    CurrentAffairUpdate,
)


class CurrentAffairRepository:

    # =====================================================
    # CREATE
    # =====================================================

    @staticmethod
    def create(
        db: Session,
        affair: CurrentAffairCreate,
    ) -> CurrentAffair:

        db_affair = CurrentAffair(
            **affair.model_dump()
        )

        db.add(db_affair)
        db.commit()
        db.refresh(db_affair)

        return db_affair

    # =====================================================
    # GET BY ID
    # =====================================================

    @staticmethod
    def get_by_id(
        db: Session,
        affair_id: int,
    ) -> Optional[CurrentAffair]:

        affair = (
            db.query(CurrentAffair)
            .filter(CurrentAffair.id == affair_id)
            .first()
        )

        if affair:
            affair.views += 1
            db.commit()
            db.refresh(affair)

        return affair

    # =====================================================
    # GET ALL
    # =====================================================

    @staticmethod
    def get_all(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):

        return (
            db.query(CurrentAffair)
            .filter(CurrentAffair.is_active.is_(True))
            .order_by(desc(CurrentAffair.publish_date))
            .offset(skip)
            .limit(limit)
            .all()
        )

    # =====================================================
    # COUNT
    # =====================================================

    @staticmethod
    def count(db: Session):

        return (
            db.query(CurrentAffair)
            .filter(CurrentAffair.is_active.is_(True))
            .count()
        )

    # =====================================================
    # UPDATE
    # =====================================================

    @staticmethod
    def update(
        db: Session,
        affair_id: int,
        affair_update: CurrentAffairUpdate,
    ):

        affair = (
            db.query(CurrentAffair)
            .filter(CurrentAffair.id == affair_id)
            .first()
        )

        if affair is None:
            return None

        update_data = affair_update.model_dump(
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(affair, key, value)

        db.commit()
        db.refresh(affair)

        return affair

    # =====================================================
    # DELETE
    # =====================================================

    @staticmethod
    def delete(
        db: Session,
        affair_id: int,
    ) -> bool:

        affair = (
            db.query(CurrentAffair)
            .filter(CurrentAffair.id == affair_id)
            .first()
        )

        if affair is None:
            return False

        db.delete(affair)
        db.commit()

        return True

    # =====================================================
    # FEATURED
    # =====================================================

    @staticmethod
    def get_featured(db: Session):

        return (
            db.query(CurrentAffair)
            .filter(
                CurrentAffair.featured.is_(True),
                CurrentAffair.is_active.is_(True),
            )
            .order_by(desc(CurrentAffair.publish_date))
            .all()
        )

    # =====================================================
    # LATEST
    # =====================================================

    @staticmethod
    def get_latest(
        db: Session,
        limit: int = 10,
    ):

        return (
            db.query(CurrentAffair)
            .filter(CurrentAffair.is_active.is_(True))
            .order_by(desc(CurrentAffair.publish_date))
            .limit(limit)
            .all()
        )

    # =====================================================
    # SEARCH
    # =====================================================

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):

        return (
            db.query(CurrentAffair)
            .filter(
                or_(
                    CurrentAffair.title.ilike(f"%{keyword}%"),
                    CurrentAffair.topic.ilike(f"%{keyword}%"),
                    CurrentAffair.category.ilike(f"%{keyword}%"),
                    CurrentAffair.content.ilike(f"%{keyword}%"),
                    CurrentAffair.source.ilike(f"%{keyword}%"),
                )
            )
            .order_by(desc(CurrentAffair.publish_date))
            .all()
        )

    # =====================================================
    # FILTER
    # =====================================================

    @staticmethod
    def filter(
        db: Session,
        category: Optional[str] = None,
        topic: Optional[str] = None,
        language: Optional[str] = None,
        publish_date: Optional[date] = None,
        featured: Optional[bool] = None,
    ):

        query = db.query(CurrentAffair)

        if category:
            query = query.filter(
                CurrentAffair.category == category
            )

        if topic:
            query = query.filter(
                CurrentAffair.topic == topic
            )

        if language:
            query = query.filter(
                CurrentAffair.language == language
            )

        if publish_date:
            query = query.filter(
                CurrentAffair.publish_date == publish_date
            )

        if featured is not None:
            query = query.filter(
                CurrentAffair.featured == featured
            )

        return (
            query.order_by(
                desc(CurrentAffair.publish_date)
            )
            .all()
        )

    # =====================================================
    # DISTINCT VALUES
    # =====================================================

    @staticmethod
    def get_categories(db: Session):

        rows = (
            db.query(CurrentAffair.category)
            .distinct()
            .order_by(CurrentAffair.category)
            .all()
        )

        return [row[0] for row in rows if row[0]]

    @staticmethod
    def get_topics(db: Session):

        rows = (
            db.query(CurrentAffair.topic)
            .distinct()
            .order_by(CurrentAffair.topic)
            .all()
        )

        return [row[0] for row in rows if row[0]]

    @staticmethod
    def get_languages(db: Session):

        rows = (
            db.query(CurrentAffair.language)
            .distinct()
            .order_by(CurrentAffair.language)
            .all()
        )

        return [row[0] for row in rows if row[0]]

    # =====================================================
    # ANALYTICS
    # =====================================================

    @staticmethod
    def total_views(db: Session):

        return (
            db.query(
                func.coalesce(
                    func.sum(CurrentAffair.views),
                    0,
                )
            )
            .scalar()
        )