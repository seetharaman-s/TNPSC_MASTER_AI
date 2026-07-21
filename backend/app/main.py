from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.db.session import Base, engine
import app.models

# Middlewares
from app.middleware.logging import LoggingMiddleware
from app.middleware.rate_limit import RateLimitMiddleware

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
    current_affairs,
)


# ==========================================================
# Lifespan
# ==========================================================

@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)

    Path("uploads").mkdir(exist_ok=True)

    yield


# ==========================================================
# FastAPI App
# ==========================================================

app = FastAPI(
    title="TNPSC MASTER AI",
    version="1.0.0",
    description="TNPSC Learning Platform API",
    lifespan=lifespan,
)


# ==========================================================
# Middleware
# ==========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(LoggingMiddleware)
app.add_middleware(RateLimitMiddleware)


# ==========================================================
# Static Files
# ==========================================================

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)


# ==========================================================
# Routers
# ==========================================================

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


# ==========================================================
# Root
# ==========================================================

@app.get("/", tags=["System"])
def root():
    return {
        "application": "TNPSC MASTER AI",
        "version": "1.0.0",
        "status": "Running",
    }


# ==========================================================
# Health Check
# ==========================================================

@app.get("/health", tags=["System"])
def health():
    return {
        "status": "Healthy",
    }