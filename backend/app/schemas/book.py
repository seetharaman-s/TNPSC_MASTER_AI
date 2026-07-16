from pydantic import BaseModel


class BookBase(BaseModel):
    title: str
    subject: str
    standard: int
    medium: str
    pdf_url: str
    cover_image: str
    pages: int


class BookCreate(BookBase):
    pass


class BookRead(BookBase):
    id: int
    featured: bool

    class Config:
        from_attributes = True