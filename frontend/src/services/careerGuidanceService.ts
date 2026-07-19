import api from "@/lib/api";

/* ============================
   Interfaces
============================ */

export interface StudyTask {
  task_id: number;
  title: string;
  subject: string;
  topic: string;
  duration_minutes: number;
  priority: string;
  completed: boolean;
}

export interface DailyStudyPlan {
  date: string;
  total_study_minutes: number;
  completion_percentage: number;
  tasks: StudyTask[];
}

export interface WeeklyStudyPlan {
  week_start: string;
  week_end: string;
  target_hours: number;
  completed_hours: number;
  daily_plans: DailyStudyPlan[];
}

export interface SubjectRecommendation {
  subject: string;
  strength_score: number;
  recommendation: string;
  recommended_topics: string[];
  priority: string;
}

export interface Goal {
  goal_id: number;
  title: string;
  description: string;
  target_date: string;
  progress_percentage: number;
  completed: boolean;
}

export interface ExamReadiness {
  overall_readiness: number;
  predicted_score: number;
  predicted_rank?: number;
  passing_probability: number;
  strengths: string[];
  weak_areas: string[];
  recommendations: string[];
}

export interface Motivation {
  quote: string;
  author: string;
  study_tip: string;
  productivity_score: number;
  consistency_streak: number;
}

export interface CareerDashboard {
  daily_plan: DailyStudyPlan;
  weekly_plan: WeeklyStudyPlan;
  subject_recommendations: SubjectRecommendation[];
  goals: Goal[];
  exam_readiness: ExamReadiness;
  motivation: Motivation;
}

/* ============================
   Career Guidance Service
============================ */

class CareerGuidanceService {
  private readonly BASE_URL = "/career-guidance";

  async getDashboard(
    userId: number
  ): Promise<CareerDashboard> {
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

  async getDailyPlan(
    userId: number
  ): Promise<DailyStudyPlan> {
    const response = await api.get(
      `${this.BASE_URL}/daily-plan`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getWeeklyPlan(
    userId: number
  ): Promise<WeeklyStudyPlan> {
    const response = await api.get(
      `${this.BASE_URL}/weekly-plan`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getRecommendations(
    userId: number
  ): Promise<SubjectRecommendation[]> {
    const response = await api.get(
      `${this.BASE_URL}/recommendations`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getGoals(
    userId: number
  ): Promise<Goal[]> {
    const response = await api.get(
      `${this.BASE_URL}/goals`,
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
      `${this.BASE_URL}/exam-readiness`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }

  async getMotivation(
    userId: number
  ): Promise<Motivation> {
    const response = await api.get(
      `${this.BASE_URL}/motivation`,
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  }
}

export default new CareerGuidanceService();