from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.schemas.current_affair import (
    CurrentAffairCreate,
    CurrentAffairUpdate,
    CurrentAffairResponse,
)

from app.schemas.current_affair_bookmark import (
    CurrentAffairBookmarkCreate,
    CurrentAffairBookmarkResponse,
)

from backend.app.services.current_affair_service import (
    CurrentAffairService,
)

router = APIRouter(
    prefix="/current-affairs",
    tags=["Current Affairs"],
)


@router.get(
    "/",
    response_model=List[CurrentAffairResponse],
)
def get_all(
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_all(db)


@router.get(
    "/latest",
    response_model=List[CurrentAffairResponse],
)
def latest(
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_latest(
        db,
        limit,
    )


@router.get(
    "/featured",
    response_model=List[CurrentAffairResponse],
)
def featured(
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_featured(db)


@router.get(
    "/category/{category}",
    response_model=List[CurrentAffairResponse],
)
def category(
    category: str,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_by_category(
        db,
        category,
    )


@router.get(
    "/search",
    response_model=List[CurrentAffairResponse],
)
def search(
    keyword: str,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.search(
        db,
        keyword,
    )


@router.get(
    "/{affair_id}",
    response_model=CurrentAffairResponse,
)
def get_one(
    affair_id: int,
    db: Session = Depends(get_db),
):
    affair = CurrentAffairService.get_by_id(
        db,
        affair_id,
    )

    if not affair:
        raise HTTPException(
            status_code=404,
            detail="Current Affair not found",
        )

    return affair


@router.post(
    "/",
    response_model=CurrentAffairResponse,
    status_code=201,
)
def create(
    affair: CurrentAffairCreate,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.create(
        db,
        affair,
    )


@router.put(
    "/{affair_id}",
    response_model=CurrentAffairResponse,
)
def update(
    affair_id: int,
    affair: CurrentAffairUpdate,
    db: Session = Depends(get_db),
):
    updated = CurrentAffairService.update(
        db,
        affair_id,
        affair,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Current Affair not found",
        )

    return updated


@router.delete("/{affair_id}")
def delete(
    affair_id: int,
    db: Session = Depends(get_db),
):
    deleted = CurrentAffairService.delete(
        db,
        affair_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Current Affair not found",
        )

    return {
        "message": "Deleted Successfully"
    }


@router.post(
    "/bookmark",
    response_model=CurrentAffairBookmarkResponse,
)
def bookmark(
    bookmark: CurrentAffairBookmarkCreate,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.bookmark(
        db,
        bookmark.user_id,
        bookmark.current_affair_id,
    )