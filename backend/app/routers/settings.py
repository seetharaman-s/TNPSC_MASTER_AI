from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.dependencies.auth import get_current_admin
from app.models.user import User
from app.schemas.setting import (
    SettingResponse,
    SettingUpdate,
)
from app.services.setting_service import SettingService

router = APIRouter(
    prefix="/settings",
    tags=["Settings"],
)


# --------------------------------------------------
# Get Settings
# --------------------------------------------------

@router.get(
    "/",
    response_model=SettingResponse,
)
def get_settings(
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.get_settings(db)


# --------------------------------------------------
# Update All Settings
# --------------------------------------------------

@router.put(
    "/",
    response_model=SettingResponse,
)
def update_settings(
    payload: SettingUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.update_settings(
        db,
        payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Update General Settings
# --------------------------------------------------

@router.put(
    "/general",
    response_model=SettingResponse,
)
def update_general(
    payload: SettingUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.update_general(
        db,
        payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Update Appearance Settings
# --------------------------------------------------

@router.put(
    "/appearance",
    response_model=SettingResponse,
)
def update_appearance(
    payload: SettingUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.update_appearance(
        db,
        payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Update TNPSC Settings
# --------------------------------------------------

@router.put(
    "/tnpsc",
    response_model=SettingResponse,
)
def update_tnpsc(
    payload: SettingUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.update_tnpsc(
        db,
        payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Update Upload Settings
# --------------------------------------------------

@router.put(
    "/upload",
    response_model=SettingResponse,
)
def update_upload(
    payload: SettingUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.update_upload(
        db,
        payload.model_dump(exclude_unset=True),
    )


# --------------------------------------------------
# Reset Settings
# --------------------------------------------------

@router.post(
    "/reset",
    response_model=SettingResponse,
)
def reset_settings(
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin),
):

    return SettingService.reset_settings(db)