import api from "./api";

/* ==========================================================
   Interfaces
========================================================== */

export interface WeakTopic {
  subject: string;
  topic: string;
  confidence: number;
  recommended_action: string;
}

export interface RevisionTask {
  day: string;
  subject: string;
  topic: string;
  estimated_minutes: number;
  priority: string;
}

export interface RecommendedMCQ {
  subject: string;
  topic: string;
  difficulty: string;
  question_count: number;
}

export interface SubjectMastery {
  subject: string;
  mastery_percentage: number;
  level: string;
}

export interface ExamReadiness {
  readiness_score: number;
  predicted_score: number;
  confidence: number;
  recommendation: string;
}

export interface DailyGoal {
  title: string;
  description: string;
  completed: boolean;
}

export interface AdaptiveDashboard {
  weak_topics: WeakTopic[];
  revision_plan: RevisionTask[];
  recommended_mcqs: RecommendedMCQ[];
  mastery: SubjectMastery[];
  exam_readiness: ExamReadiness;
  daily_goals: DailyGoal[];
}

/* ==========================================================
   Service
========================================================== */

class AdaptiveLearningService {
  async getDashboard(
    userId: number
  ): Promise<AdaptiveDashboard> {
    const response = await api.get(
      "/adaptive/dashboard",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getWeakTopics(
    userId: number
  ): Promise<WeakTopic[]> {
    const response = await api.get(
      "/adaptive/weak-topics",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getRevisionPlan(
    userId: number
  ): Promise<RevisionTask[]> {
    const response = await api.get(
      "/adaptive/revision-plan",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getRecommendedMCQs(
    userId: number
  ): Promise<RecommendedMCQ[]> {
    const response = await api.get(
      "/adaptive/recommended-mcqs",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getSubjectMastery(
    userId: number
  ): Promise<SubjectMastery[]> {
    const response = await api.get(
      "/adaptive/mastery",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getExamReadiness(
    userId: number
  ): Promise<ExamReadiness> {
    const response = await api.get(
      "/adaptive/exam-readiness",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getDailyGoals(
    userId: number
  ): Promise<DailyGoal[]> {
    const response = await api.get(
      "/adaptive/daily-goals",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }
}

export default new AdaptiveLearningService();