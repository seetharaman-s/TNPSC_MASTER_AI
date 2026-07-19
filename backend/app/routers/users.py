from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.dependencies.auth import get_current_admin
from app.models.user import User
from app.schemas.user import (
    UserResponse,
    UserUpdate,
)
from app.services.user_service import UserService

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# --------------------------------------------------
# List Users
# --------------------------------------------------

@router.get(
    "/",
    response_model=list[UserResponse],
)
def list_users(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return UserService.list_users(
        db,
        skip,
        limit,
    )


# --------------------------------------------------
# Search Users
# --------------------------------------------------

@router.get(
    "/search",
    response_model=list[UserResponse],
)
def search_users(
    keyword: str,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return UserService.search(
        db,
        keyword,
    )


# --------------------------------------------------
# Filter by Role
# --------------------------------------------------

@router.get(
    "/role/{role}",
    response_model=list[UserResponse],
)
def filter_role(
    role: str,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return UserService.filter_by_role(
        db,
        role,
    )


# --------------------------------------------------
# Filter Active / Inactive
# --------------------------------------------------

@router.get(
    "/active/{active}",
    response_model=list[UserResponse],
)
def filter_active(
    active: bool,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return UserService.filter_active(
        db,
        active,
    )


# --------------------------------------------------
# Get User
# --------------------------------------------------

@router.get(
    "/{user_id}",
    response_model=UserResponse,
)
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    user = UserService.get_by_id(
        db,
        user_id,
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return user


# --------------------------------------------------
# Update User
# --------------------------------------------------

@router.put(
    "/{user_id}",
    response_model=UserResponse,
)
def update_user(
    user_id: int,
    payload: UserUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    user = UserService.get_by_id(
        db,
        user_id,
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return UserService.update(
        db,
        user,
        payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Delete User
# --------------------------------------------------

@router.delete(
    "/{user_id}",
)
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    user = UserService.get_by_id(
        db,
        user_id,
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return UserService.delete(
        db,
        user,
    )


# --------------------------------------------------
# Activate User
# --------------------------------------------------

@router.put(
    "/{user_id}/activate",
    response_model=UserResponse,
)
def activate_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    user = UserService.get_by_id(
        db,
        user_id,
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return UserService.set_active(
        db,
        user,
        True,
    )


# --------------------------------------------------
# Deactivate User
# --------------------------------------------------

@router.put(
    "/{user_id}/deactivate",
    response_model=UserResponse,
)
def deactivate_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    user = UserService.get_by_id(
        db,
        user_id,
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return UserService.set_active(
        db,
        user,
        False,
    )


# --------------------------------------------------
# Change Role
# --------------------------------------------------

@router.put(
    "/{user_id}/role/{role}",
    response_model=UserResponse,
)
def change_role(
    user_id: int,
    role: str,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    if role not in ("admin", "user"):

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid role.",
        )

    user = UserService.get_by_id(
        db,
        user_id,
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    return UserService.change_role(
        db,
        user,
        role,
    )