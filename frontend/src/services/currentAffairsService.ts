import api from "./api";

export interface CurrentAffair {
  id: number;
  title: string;
  category: string;
  topic?: string;
  content: string;
  source?: string;
  pdf_url?: string;
  image_url?: string;
  publish_date: string;
  language: string;
  featured: boolean;
  is_active: boolean;
  views: number;
  created_at: string;
  updated_at: string;
}

export interface DashboardSummary {
  total_articles: number;
  featured_articles: number;
  active_articles: number;
  total_views: number;
}

export interface OneLinerRevision {
  id: number;
  fact: string;
  category: string;
}

export interface DailyQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  category: string;
  difficulty: string;
}

export interface SubjectWiseCurrentAffairs {
  subject: string;
  articles: CurrentAffair[];
}

export interface AITrendAnalysis {
  trending_topics: string[];
  recommendation: string;
  expected_questions: string[];
}

export interface DailyCurrentAffairs {
  date: string;
  total_articles: number;
  featured_articles: CurrentAffair[];
}

export interface CurrentAffairsDashboard {
  summary: DashboardSummary;
  daily_current_affairs: DailyCurrentAffairs;
  latest_articles: CurrentAffair[];
  subject_wise_news: SubjectWiseCurrentAffairs[];
  one_liners: OneLinerRevision[];
  daily_quiz: DailyQuizQuestion[];
  trend_analysis: AITrendAnalysis;
}

class CurrentAffairsService {
  private readonly baseUrl = "/current-affairs";

  async getDashboard(): Promise<CurrentAffairsDashboard> {
    const { data } = await api.get(`${this.baseUrl}/dashboard`);
    return data;
  }

  async getAll(skip = 0, limit = 20): Promise<CurrentAffair[]> {
    const { data } = await api.get(this.baseUrl, {
      params: { skip, limit },
    });
    return data;
  }

  async getById(id: number): Promise<CurrentAffair> {
    const { data } = await api.get(`${this.baseUrl}/${id}`);
    return data;
  }

  async getLatest(limit = 10): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.baseUrl}/latest`, {
      params: { limit },
    });
    return data;
  }

  async getFeatured(): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.baseUrl}/featured`);
    return data;
  }

  async search(keyword: string): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.baseUrl}/search`, {
      params: { keyword },
    });
    return data;
  }

  async filter(params: {
    category?: string;
    language?: string;
    publish_date?: string;
  }): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.baseUrl}/filter`, {
      params,
    });
    return data;
  }

  async getCategories(): Promise<string[]> {
    const { data } = await api.get(`${this.baseUrl}/categories`);
    return data;
  }

  async getTopics(): Promise<string[]> {
    const { data } = await api.get(`${this.baseUrl}/topics`);
    return data;
  }

  async getLanguages(): Promise<string[]> {
    const { data } = await api.get(`${this.baseUrl}/languages`);
    return data;
  }

  async create(
    payload: Omit<
      CurrentAffair,
      "id" | "views" | "created_at" | "updated_at"
    >
  ): Promise<CurrentAffair> {
    const { data } = await api.post(this.baseUrl, payload);
    return data;
  }

  async update(
    id: number,
    payload: Partial<CurrentAffair>
  ): Promise<CurrentAffair> {
    const { data } = await api.put(`${this.baseUrl}/${id}`, payload);
    return data;
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.baseUrl}/${id}`);
  }
}

export default new CurrentAffairsService();