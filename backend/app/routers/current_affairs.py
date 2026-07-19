from datetime import date
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.current_affair import (
    CategoryResponse,
    CurrentAffairCreate,
    CurrentAffairResponse,
    CurrentAffairUpdate,
    CurrentAffairsDashboard,
    LanguageResponse,
    TopicResponse,
)
from app.services.current_affair_service import CurrentAffairService

router = APIRouter(
    prefix="/current-affairs",
    tags=["Current Affairs"],
)

# ==========================================================
# Dashboard
# ==========================================================

@router.get(
    "/dashboard",
    response_model=CurrentAffairsDashboard,
)
def get_dashboard(
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_dashboard(db)


# ==========================================================
# Latest
# ==========================================================

@router.get(
    "/latest",
    response_model=list[CurrentAffairResponse],
)
def get_latest(
    limit: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_latest(
        db=db,
        limit=limit,
    )


# ==========================================================
# Featured
# ==========================================================

@router.get(
    "/featured",
    response_model=list[CurrentAffairResponse],
)
def get_featured(
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_featured(db)


# ==========================================================
# Search
# ==========================================================

@router.get(
    "/search",
    response_model=list[CurrentAffairResponse],
)
def search(
    keyword: str,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.search(
        db=db,
        keyword=keyword,
    )


# ==========================================================
# Filter
# ==========================================================

@router.get(
    "/filter",
    response_model=list[CurrentAffairResponse],
)
def filter_articles(
    category: Optional[str] = None,
    topic: Optional[str] = None,
    language: Optional[str] = None,
    publish_date: Optional[date] = None,
    featured: Optional[bool] = None,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.filter(
        db=db,
        category=category,
        topic=topic,
        language=language,
        publish_date=publish_date,
        featured=featured,
    )


# ==========================================================
# Categories
# ==========================================================

@router.get(
    "/categories",
    response_model=CategoryResponse,
)
def get_categories(
    db: Session = Depends(get_db),
):
    return {
        "categories": CurrentAffairService.get_categories(db)
    }


# ==========================================================
# Topics
# ==========================================================

@router.get(
    "/topics",
    response_model=TopicResponse,
)
def get_topics(
    db: Session = Depends(get_db),
):
    return {
        "topics": CurrentAffairService.get_topics(db)
    }


# ==========================================================
# Languages
# ==========================================================

@router.get(
    "/languages",
    response_model=LanguageResponse,
)
def get_languages(
    db: Session = Depends(get_db),
):
    return {
        "languages": CurrentAffairService.get_languages(db)
    }


# ==========================================================
# Get All
# ==========================================================

@router.get(
    "/",
    response_model=list[CurrentAffairResponse],
)
def get_all(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return CurrentAffairService.get_all(
        db=db,
        skip=skip,
        limit=limit,
    )


# ==========================================================
# Create
# ==========================================================

@router.post(
    "/",
    response_model=CurrentAffairResponse,
    status_code=status.HTTP_201_CREATED,
)
def create(
    affair: CurrentAffairCreate,
    db: Session = Depends(get_db),
):
    return CurrentAffairService.create(
        db=db,
        affair=affair,
    )


# ==========================================================
# Update
# ==========================================================

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
        db=db,
        affair_id=affair_id,
        affair=affair,
    )

    if updated is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Current Affair not found",
        )

    return updated


# ==========================================================
# Delete
# ==========================================================

@router.delete(
    "/{affair_id}",
)
def delete(
    affair_id: int,
    db: Session = Depends(get_db),
):
    success = CurrentAffairService.delete(
        db=db,
        affair_id=affair_id,
    )

    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Current Affair not found",
        )

    return {
        "success": True,
        "message": "Current Affair deleted successfully",
    }


# ==========================================================
# Get By ID
# IMPORTANT:
# Keep this route LAST so it doesn't conflict with
# /categories, /topics, /languages, etc.
# ==========================================================

@router.get(
    "/{affair_id}",
    response_model=CurrentAffairResponse,
)
def get_by_id(
    affair_id: int,
    db: Session = Depends(get_db),
):
    affair = CurrentAffairService.get_by_id(
        db=db,
        affair_id=affair_id,
    )

    if affair is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Current Affair not found",
        )

    return affair