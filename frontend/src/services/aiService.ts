import api from "./api";

/* -----------------------------
   Health
------------------------------ */

export interface AIHealthResponse {
  status: string;
  provider: string;
  model: string;
}

/* -----------------------------
   Chat
------------------------------ */

export interface ChatRequest {
  message: string;
  language: "Tamil" | "English";
}

export interface ChatResponse {
  reply: string;
  language: string;
}

/* -----------------------------
   Explain
------------------------------ */

export interface ExplainRequest {
  topic: string;
  language: "Tamil" | "English";
}

export interface ExplainResponse {
  title: string;
  explanation: string;
  key_points: string[];
  important_facts: string[];
  memory_trick?: string;
}

/* -----------------------------
   MCQ Generator
------------------------------ */

export interface MCQRequest {
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  number_of_questions: number;
}

export interface MCQOption {
  option: string;
}

export interface MCQ {
  question: string;
  options: MCQOption[];
  answer: string;
  explanation: string;
}

export interface MCQResponse {
  topic: string;
  questions: MCQ[];
}

/* -----------------------------
   Study Planner
------------------------------ */

export interface StudyPlanRequest {
  exam: string;
  days_left: number;
  study_hours_per_day: number;
}

export interface StudyTask {
  day: number;
  subject: string;
  topic: string;
  duration_hours: number;
}

export interface StudyPlanResponse {
  exam: string;
  total_days: number;
  tasks: StudyTask[];
}

/* -----------------------------
   Performance Analysis
------------------------------ */

export interface PerformanceAnalysisRequest {
  weak_subjects: string[];
  average_score: number;
  target_exam: string;
}

export interface PerformanceAnalysisResponse {
  readiness_percentage: number;
  weak_topics: string[];
  recommendations: string[];
  revision_priority: string[];
}

/* -----------------------------
   Summary
------------------------------ */

export interface SummaryRequest {
  title: string;
  content: string;
  language: "Tamil" | "English";
}

export interface SummaryResponse {
  title: string;
  summary: string;
  important_points: string[];
}

/* -----------------------------
   AI Service
------------------------------ */

export const AIService = {

  async health(): Promise<AIHealthResponse> {
    const { data } = await api.get("/ai/health");
    return data;
  },

  async chat(
    request: ChatRequest,
  ): Promise<ChatResponse> {

    const { data } = await api.post(
      "/ai/chat",
      request,
    );

    return data;
  },

  async explain(
    request: ExplainRequest,
  ): Promise<ExplainResponse> {

    const { data } = await api.post(
      "/ai/explain",
      request,
    );

    return data;
  },

  async generateMCQ(
    request: MCQRequest,
  ): Promise<MCQResponse> {

    const { data } = await api.post(
      "/ai/generate-mcq",
      request,
    );

    return data;
  },

  async studyPlan(
    request: StudyPlanRequest,
  ): Promise<StudyPlanResponse> {

    const { data } = await api.post(
      "/ai/study-plan",
      request,
    );

    return data;
  },

  async analyzePerformance(
    request: PerformanceAnalysisRequest,
  ): Promise<PerformanceAnalysisResponse> {

    const { data } = await api.post(
      "/ai/analyze-performance",
      request,
    );

    return data;
  },

  async summarize(
    request: SummaryRequest,
  ): Promise<SummaryResponse> {

    const { data } = await api.post(
      "/ai/summarize",
      request,
    );

    return data;
  },

};