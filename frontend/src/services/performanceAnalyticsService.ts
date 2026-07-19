import api from "@/lib/api";

/* ==========================================================
   Performance Overview
========================================================== */

export interface PerformanceOverview {
  overall_score: number;
  average_accuracy: number;
  tests_completed: number;
  questions_attempted: number;
  questions_correct: number;
  total_study_hours: number;
}

/* ==========================================================
   Subject Performance
========================================================== */

export interface SubjectPerformance {
  subject: string;
  accuracy: number;
  questions_attempted: number;
  questions_correct: number;
  study_hours: number;
  mastery_score: number;
  ai_confidence: number;
}

/* ==========================================================
   Weekly Performance
========================================================== */

export interface WeeklyPerformance {
  week: string;
  score: number;
  accuracy: number;
  study_hours: number;
  tests_completed: number;
}

/* ==========================================================
   Time Analysis
========================================================== */

export interface TimeAnalysis {
  average_time_per_question: number;
  fastest_subject: string;
  slowest_subject: string;
  daily_study_hours: number;
  weekly_study_hours: number;
}

/* ==========================================================
   Rank Prediction
========================================================== */

export interface RankPrediction {
  predicted_score: number;
  predicted_district_rank?: number;
  predicted_state_rank?: number;
  selection_probability: number;
}

/* ==========================================================
   AI Insights
========================================================== */

export interface AIInsight {
  title: string;
  description: string;
  priority: string;
}

/* ==========================================================
   Study Recommendation
========================================================== */

export interface StudyRecommendation {
  subject: string;
  recommendation: string;
  recommended_hours: number;
  priority: string;
}

/* ==========================================================
   Strength & Weakness
========================================================== */

export interface StrengthWeakness {
  strengths: string[];
  weaknesses: string[];
}

/* ==========================================================
   Dashboard
========================================================== */

export interface PerformanceAnalyticsDashboard {
  overview: PerformanceOverview;
  subject_performance: SubjectPerformance[];
  weekly_performance: WeeklyPerformance[];
  time_analysis: TimeAnalysis;
  rank_prediction: RankPrediction;
  ai_insights: AIInsight[];
  study_recommendations: StudyRecommendation[];
  strength_weakness: StrengthWeakness;
}

/* ==========================================================
   Performance Analytics Service
========================================================== */

class PerformanceAnalyticsService {
  private readonly BASE_URL =
    "/performance-analytics";

  async getDashboard(
    userId: number
  ): Promise<PerformanceAnalyticsDashboard> {
    const response = await api.get(
      `${this.BASE_URL}/dashboard`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getOverview(
    userId: number
  ): Promise<PerformanceOverview> {
    const response = await api.get(
      `${this.BASE_URL}/overview`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getSubjectPerformance(
    userId: number
  ): Promise<SubjectPerformance[]> {
    const response = await api.get(
      `${this.BASE_URL}/subjects`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getWeeklyPerformance(
    userId: number
  ): Promise<WeeklyPerformance[]> {
    const response = await api.get(
      `${this.BASE_URL}/weekly-performance`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getTimeAnalysis(
    userId: number
  ): Promise<TimeAnalysis> {
    const response = await api.get(
      `${this.BASE_URL}/time-analysis`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getRankPrediction(
    userId: number
  ): Promise<RankPrediction> {
    const response = await api.get(
      `${this.BASE_URL}/rank-prediction`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getAIInsights(
    userId: number
  ): Promise<AIInsight[]> {
    const response = await api.get(
      `${this.BASE_URL}/ai-insights`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getStudyRecommendations(
    userId: number
  ): Promise<StudyRecommendation[]> {
    const response = await api.get(
      `${this.BASE_URL}/study-recommendations`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getStrengthWeakness(
    userId: number
  ): Promise<StrengthWeakness> {
    const response = await api.get(
      `${this.BASE_URL}/strength-weakness`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }
}

export default new PerformanceAnalyticsService();