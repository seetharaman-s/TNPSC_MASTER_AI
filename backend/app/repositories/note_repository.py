from typing import Optional

from sqlalchemy import desc, or_
from sqlalchemy.orm import Session

from app.models.note import Note


class NoteRepository:

    @staticmethod
    def create(
        db: Session,
        note: Note,
    ) -> Note:
        db.add(note)
        db.commit()
        db.refresh(note)
        return note

    @staticmethod
    def get_by_id(
        db: Session,
        note_id: int,
    ) -> Optional[Note]:
        return (
            db.query(Note)
            .filter(Note.id == note_id)
            .first()
        )

    @staticmethod
    def get_all(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):
        return (
            db.query(Note)
            .order_by(
                Note.standard,
                Note.subject,
                Note.unit,
            )
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_featured(
        db: Session,
    ):
        return (
            db.query(Note)
            .filter(Note.featured.is_(True))
            .all()
        )

    @staticmethod
    def get_latest(
        db: Session,
        limit: int = 10,
    ):
        return (
            db.query(Note)
            .order_by(desc(Note.created_at))
            .limit(limit)
            .all()
        )

    @staticmethod
    def search(
        db: Session,
        keyword: str,
    ):
        return (
            db.query(Note)
            .filter(
                or_(
                    Note.title.ilike(f"%{keyword}%"),
                    Note.subject.ilike(f"%{keyword}%"),
                    Note.description.ilike(f"%{keyword}%"),
                )
            )
            .all()
        )

    @staticmethod
    def filter(
        db: Session,
        subject: str | None = None,
        standard: int | None = None,
        unit: int | None = None,
        medium: str | None = None,
    ):
        query = db.query(Note)

        if subject:
            query = query.filter(Note.subject == subject)

        if standard:
            query = query.filter(Note.standard == standard)

        if unit:
            query = query.filter(Note.unit == unit)

        if medium:
            query = query.filter(Note.medium == medium)

        return query.all()

    @staticmethod
    def update(
        db: Session,
        note: Note,
    ) -> Note:
        db.commit()
        db.refresh(note)
        return note

    @staticmethod
    def delete(
        db: Session,
        note: Note,
    ):
        note.is_active = False
        db.commit()