import api from "./api";

export interface ProgressOverview {
  overall_progress: number;
  average_score: number;
  quizzes_completed: number;
  chapters_completed: number;
  study_hours: number;
  current_streak: number;
}

export interface SubjectProgress {
  subject: string;
  progress: number;
  completed_topics: number;
  total_topics: number;
  average_score: number;
}

export interface WeeklyStudy {
  day: string;
  study_hours: number;
  quizzes_completed: number;
}

export interface PerformanceHistory {
  date: string;
  quiz_name: string;
  subject: string;
  score: number;
  total_questions: number;
  correct_answers: number;
}

export interface AchievementBadge {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface StudyStreak {
  current_streak: number;
  longest_streak: number;
  last_study_date: string;
}

export interface ProgressDashboard {
  overview: ProgressOverview;
  subjects: SubjectProgress[];
  weekly_study: WeeklyStudy[];
  recent_history: PerformanceHistory[];
  achievements: AchievementBadge[];
  streak: StudyStreak;
}

class ProgressService {
  async getDashboard(userId: number): Promise<ProgressDashboard> {
    const response = await api.get("/progress/dashboard", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }

  async getSubjects(userId: number): Promise<SubjectProgress[]> {
    const response = await api.get("/progress/subjects", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }

  async getWeeklyStudy(userId: number): Promise<WeeklyStudy[]> {
    const response = await api.get("/progress/weekly-study", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }

  async getHistory(userId: number): Promise<PerformanceHistory[]> {
    const response = await api.get("/progress/history", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }

  async getAchievements(userId: number): Promise<AchievementBadge[]> {
    const response = await api.get("/progress/achievements", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }

  async getStreak(userId: number): Promise<StudyStreak> {
    const response = await api.get("/progress/streak", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }

  async getContinueReading(userId: number) {
    const response = await api.get("/progress/continue-reading", {
      params: {
        user_id: userId,
      },
    });

    return response.data;
  }
}

export default new ProgressService();