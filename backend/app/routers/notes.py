from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.db.session import get_db
from app.schemas.note import (
    NoteCreate,
    NoteUpdate,
    NoteResponse,
)
from app.services.note_service import NoteService

router = APIRouter(
    prefix="/notes",
    tags=["Notes"],
)


@router.post(
    "/",
    response_model=NoteResponse,
    status_code=201,
)
def create_note(
    note: NoteCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return NoteService.create_note(
        db=db,
        note=note,
        current_user=current_user,
    )


@router.get(
    "/",
    response_model=list[NoteResponse],
)
def get_notes(
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db),
):
    return NoteService.get_notes(db, skip, limit)


@router.get(
    "/featured",
    response_model=list[NoteResponse],
)
def featured_notes(
    db: Session = Depends(get_db),
):
    return NoteService.get_featured_notes(db)


@router.get(
    "/latest",
    response_model=list[NoteResponse],
)
def latest_notes(
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return NoteService.get_latest_notes(db, limit)


@router.get(
    "/search",
    response_model=list[NoteResponse],
)
def search_notes(
    keyword: str,
    db: Session = Depends(get_db),
):
    return NoteService.search_notes(db, keyword)


@router.get(
    "/filter",
    response_model=list[NoteResponse],
)
def filter_notes(
    subject: Optional[str] = None,
    standard: Optional[int] = None,
    unit: Optional[int] = None,
    medium: Optional[str] = None,
    db: Session = Depends(get_db),
):
    return NoteService.filter_notes(
        db=db,
        subject=subject,
        standard=standard,
        unit=unit,
        medium=medium,
    )


@router.get(
    "/{note_id}",
    response_model=NoteResponse,
)
def get_note(
    note_id: int,
    db: Session = Depends(get_db),
):
    note = NoteService.get_note(db, note_id)

    if not note:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    return note


@router.put(
    "/{note_id}",
    response_model=NoteResponse,
)
def update_note(
    note_id: int,
    note: NoteUpdate,
    db: Session = Depends(get_db),
):
    updated = NoteService.update_note(
        db,
        note_id,
        note,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    return updated


@router.delete("/{note_id}")
def delete_note(
    note_id: int,
    db: Session = Depends(get_db),
):
    success = NoteService.delete_note(
        db,
        note_id,
    )

    if not success:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    return {
        "message": "Note deleted successfully"
    }