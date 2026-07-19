import api from "./api";

export interface DashboardSummary {
  total_users: number;
  total_books: number;
  total_notes: number;
  total_current_affairs: number;
  total_quizzes: number;
  total_questions: number;
  total_uploads: number;
}

export interface UserAnalytics {
  active_users: number;
  inactive_users: number;
  verified_users: number;
  admin_users: number;
  student_users: number;
  new_users_this_month: number;
}

export interface QuizAnalytics {
  total_attempts: number;
  average_score: number;
  pass_rate: number;
  failed_rate: number;
  highest_score: number;
  lowest_score: number;
}

export interface BookAnalytics {
  total_books: number;
  total_downloads: number;
  total_views: number;
  most_viewed_book: string;
  most_downloaded_book: string;
}

export interface CurrentAffairsAnalytics {
  total_articles: number;
  published_this_month: number;
  total_views: number;
}

export interface UploadAnalytics {
  total_uploads: number;
  total_pdf: number;
  total_images: number;
  total_videos: number;
  total_size_mb: number;
}

export interface ExamAnalytics {
  group1: number;
  group2: number;
  group2a: number;
  group4: number;
  vao: number;
}

export interface MonthlyChart {
  month: string;
  value: number;
}

export interface RecentActivity {
  title: string;
  description: string;
  created_at: string;
}

export interface DashboardReport {
  summary: DashboardSummary;
  users: UserAnalytics;
  quizzes: QuizAnalytics;
  books: BookAnalytics;
  current_affairs: CurrentAffairsAnalytics;
  uploads: UploadAnalytics;
  exams: ExamAnalytics;
  monthly_users: MonthlyChart[];
  monthly_quizzes: MonthlyChart[];
  recent_activities: RecentActivity[];
}

export const ReportService = {

  async getDashboard(): Promise<DashboardReport> {
    const response = await api.get("/reports/dashboard");
    return response.data;
  },

  async getUsers(): Promise<UserAnalytics> {
    const response = await api.get("/reports/users");
    return response.data;
  },

  async getQuizzes(): Promise<QuizAnalytics> {
    const response = await api.get("/reports/quizzes");
    return response.data;
  },

  async getBooks(): Promise<BookAnalytics> {
    const response = await api.get("/reports/books");
    return response.data;
  },

  async getCurrentAffairs(): Promise<CurrentAffairsAnalytics> {
    const response = await api.get("/reports/current-affairs");
    return response.data;
  },

  async getUploads(): Promise<UploadAnalytics> {
    const response = await api.get("/reports/uploads");
    return response.data;
  },

  async getExams(): Promise<ExamAnalytics> {
    const response = await api.get("/reports/exams");
    return response.data;
  },

};