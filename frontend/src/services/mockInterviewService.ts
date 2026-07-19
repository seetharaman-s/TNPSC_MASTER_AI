import api from "./api";

/* ==========================================================
   Interfaces
========================================================== */

export interface InterviewQuestion {
  id: number;
  subject: string;
  topic: string;
  difficulty: string;
  question: string;
}

export interface AnswerSubmission {
  question_id: number;
  answer: string;
}

export interface EvaluationCriterion {
  name: string;
  score: number;
  feedback: string;
}

export interface AnswerEvaluation {
  overall_score: number;
  strengths: string[];
  improvements: string[];
  ai_feedback: string;
  criteria: EvaluationCriterion[];
}

export interface InterviewSession {
  session_id: number;
  subject: string;
  total_questions: number;
  completed_questions: number;
  average_score: number;
}

export interface InterviewHistory {
  session_id: number;
  subject: string;
  date: string;
  score: number;
}

export interface InterviewDashboard {
  current_session: InterviewSession;
  history: InterviewHistory[];
}

/* ==========================================================
   Service
========================================================== */

class MockInterviewService {
  async getDashboard(
    userId: number
  ): Promise<InterviewDashboard> {
    const response = await api.get(
      "/mock-interview/dashboard",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getQuestions(
    subject: string,
    difficulty: string = "Medium"
  ): Promise<InterviewQuestion[]> {
    const response = await api.get(
      "/mock-interview/questions",
      {
        params: {
          subject,
          difficulty,
        },
      }
    );

    return response.data;
  }

  async evaluateAnswer(
    submission: AnswerSubmission
  ): Promise<AnswerEvaluation> {
    const response = await api.post(
      "/mock-interview/evaluate",
      submission
    );

    return response.data;
  }

  async getCurrentSession(
    userId: number
  ): Promise<InterviewSession> {
    const response = await api.get(
      "/mock-interview/current-session",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getHistory(
    userId: number
  ): Promise<InterviewHistory[]> {
    const response = await api.get(
      "/mock-interview/history",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }
}

export default new MockInterviewService();