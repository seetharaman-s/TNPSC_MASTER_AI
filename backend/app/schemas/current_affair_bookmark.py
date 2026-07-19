from datetime import datetime

from pydantic import BaseModel, ConfigDict


class CurrentAffairBookmarkBase(BaseModel):
    user_id: int
    current_affair_id: int


class CurrentAffairBookmarkCreate(CurrentAffairBookmarkBase):
    pass


class CurrentAffairBookmarkResponse(CurrentAffairBookmarkBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)