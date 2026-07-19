from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.models.user import User
from app.schemas.ai import (
    AIHealthResponse,
    ChatRequest,
    ChatResponse,
    ExplainRequest,
    ExplainResponse,
    MCQRequest,
    MCQResponse,
    PerformanceAnalysisRequest,
    PerformanceAnalysisResponse,
    StudyPlanRequest,
    StudyPlanResponse,
    SummaryRequest,
    SummaryResponse,
)
from app.services.ai_service import AIService

router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"],
)

service = AIService()


@router.get(
    "/health",
    response_model=AIHealthResponse,
)
def health():
    return service.health()


@router.post(
    "/chat",
    response_model=ChatResponse,
)
def chat(
    request: ChatRequest,
    current_user: User = Depends(get_current_user),
):
    return service.chat(request)


@router.post(
    "/explain",
    response_model=ExplainResponse,
)
def explain(
    request: ExplainRequest,
    current_user: User = Depends(get_current_user),
):
    return service.explain(request)


@router.post(
    "/generate-mcq",
    response_model=MCQResponse,
)
def generate_mcq(
    request: MCQRequest,
    current_user: User = Depends(get_current_user),
):
    return service.generate_mcq(request)


@router.post(
    "/study-plan",
    response_model=StudyPlanResponse,
)
def study_plan(
    request: StudyPlanRequest,
    current_user: User = Depends(get_current_user),
):
    return service.study_plan(request)


@router.post(
    "/analyze-performance",
    response_model=PerformanceAnalysisResponse,
)
def analyze_performance(
    request: PerformanceAnalysisRequest,
    current_user: User = Depends(get_current_user),
):
    return service.analyze_performance(request)


@router.post(
    "/summarize",
    response_model=SummaryResponse,
)
def summarize(
    request: SummaryRequest,
    current_user: User = Depends(get_current_user),
):
    return service.summarize(request)