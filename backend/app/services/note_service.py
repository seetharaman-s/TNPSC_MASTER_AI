from typing import Optional

from sqlalchemy.orm import Session

from app.models.note import Note
from app.repositories.note_repository import NoteRepository
from app.schemas.note import NoteCreate, NoteUpdate


class NoteService:

    @staticmethod
    def create_note(
        db: Session,
        note: NoteCreate,
    ) -> Note:

        db_note = Note(**note.model_dump())

        return NoteRepository.create(
            db,
            db_note,
        )

    @staticmethod
    def get_note(
        db: Session,
        note_id: int,
    ) -> Optional[Note]:

        return NoteRepository.get_by_id(
            db,
            note_id,
        )

    @staticmethod
    def get_notes(
        db: Session,
        skip: int = 0,
        limit: int = 20,
    ):

        return NoteRepository.get_all(
            db,
            skip,
            limit,
        )

    @staticmethod
    def get_featured_notes(
        db: Session,
    ):

        return NoteRepository.get_featured(db)

    @staticmethod
    def get_latest_notes(
        db: Session,
        limit: int = 10,
    ):

        return NoteRepository.get_latest(
            db,
            limit,
        )

    @staticmethod
    def search_notes(
        db: Session,
        keyword: str,
    ):

        return NoteRepository.search(
            db,
            keyword,
        )

    @staticmethod
    def filter_notes(
        db: Session,
        subject: str | None = None,
        standard: int | None = None,
        unit: int | None = None,
        medium: str | None = None,
    ):

        return NoteRepository.filter(
            db=db,
            subject=subject,
            standard=standard,
            unit=unit,
            medium=medium,
        )

    @staticmethod
    def update_note(
        db: Session,
        note_id: int,
        note_update: NoteUpdate,
    ):

        note = NoteRepository.get_by_id(
            db,
            note_id,
        )

        if not note:
            return None

        update_data = note_update.model_dump(
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(note, key, value)

        return NoteRepository.update(
            db,
            note,
        )

    @staticmethod
    def delete_note(
        db: Session,
        note_id: int,
    ):

        note = NoteRepository.get_by_id(
            db,
            note_id,
        )

        if not note:
            return False

        NoteRepository.delete(
            db,
            note,
        )

        return True