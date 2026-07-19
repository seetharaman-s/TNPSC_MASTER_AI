from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.db.database import Base, engine
import app.models

# Routers
from app.routers import (
    auth,
    admin,
    books,
    notes,
    dashboard,
    upload,
    quiz,
    progress,
    adaptive_learning,
    mock_interview,
    career_guidance,
    performance_analytics,
    current_affairs
)

app = FastAPI(
    title="TNPSC MASTER AI",
    version="1.0.0",
    description="TNPSC Learning Platform API",
)


@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)


# ------------------------
# Register Routers
# ------------------------

app.include_router(auth.router)
app.include_router(admin.router)
app.include_router(books.router)
app.include_router(notes.router)
app.include_router(dashboard.router)
app.include_router(upload.router)

app.include_router(quiz.router)
app.include_router(progress.router)

app.include_router(adaptive_learning.router)
app.include_router(mock_interview.router)
app.include_router(career_guidance.router)
app.include_router(performance_analytics.router)

app.include_router(current_affairs.router)


@app.get("/")
def root():
    return {
        "application": "TNPSC MASTER AI",
        "version": "1.0.0",
        "status": "Running",
    }


@app.get("/health")
def health():
    return {
        "status": "Healthy",
    }