from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class CurrentAffairCategoryBase(BaseModel):
    name: str
    description: Optional[str] = None
    icon: Optional[str] = None
    color: Optional[str] = None
    sort_order: int = 0
    is_active: bool = True


class CurrentAffairCategoryCreate(CurrentAffairCategoryBase):
    pass


class CurrentAffairCategoryUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    icon: Optional[str] = None
    color: Optional[str] = None
    sort_order: Optional[int] = None
    is_active: Optional[bool] = None


class CurrentAffairCategoryResponse(CurrentAffairCategoryBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)