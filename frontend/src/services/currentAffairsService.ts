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

export interface CurrentAffairCreate {
  title: string;
  category: string;
  topic?: string;

  content: string;

  source?: string;
  pdf_url?: string;
  image_url?: string;

  publish_date: string;

  language?: string;

  featured?: boolean;
  is_active?: boolean;
}

export type CurrentAffairUpdate = Partial<CurrentAffairCreate>;

class CurrentAffairsService {
  private readonly BASE = "/current-affairs";

  async getAll(skip = 0, limit = 20): Promise<CurrentAffair[]> {
    const { data } = await api.get(this.BASE, {
      params: { skip, limit },
    });
    return data;
  }

  async getById(id: number): Promise<CurrentAffair> {
    const { data } = await api.get(`${this.BASE}/${id}`);
    return data;
  }

  async create(payload: CurrentAffairCreate): Promise<CurrentAffair> {
    const { data } = await api.post(this.BASE, payload);
    return data;
  }

  async update(
    id: number,
    payload: CurrentAffairUpdate
  ): Promise<CurrentAffair> {
    const { data } = await api.put(`${this.BASE}/${id}`, payload);
    return data;
  }

  async delete(id: number) {
    return api.delete(`${this.BASE}/${id}`);
  }

  async getFeatured(): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.BASE}/featured`);
    return data;
  }

  async getLatest(limit = 10): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.BASE}/latest`, {
      params: { limit },
    });
    return data;
  }

  async search(keyword: string): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.BASE}/search`, {
      params: { keyword },
    });
    return data.results ?? data;
  }

  async filter(params: {
    category?: string;
    topic?: string;
    language?: string;
    publish_date?: string;
    featured?: boolean;
  }): Promise<CurrentAffair[]> {
    const { data } = await api.get(`${this.BASE}/filter`, {
      params,
    });
    return data;
  }

  async getCategories(): Promise<string[]> {
    const { data } = await api.get(`${this.BASE}/categories`);
    return data.categories ?? data;
  }

  async getTopics(): Promise<string[]> {
    const { data } = await api.get(`${this.BASE}/topics`);
    return data.topics ?? data;
  }

  async getLanguages(): Promise<string[]> {
    const { data } = await api.get(`${this.BASE}/languages`);
    return data.languages ?? data;
  }

  async getDashboard() {
    const { data } = await api.get(`${this.BASE}/dashboard`);
    return data;
  }
}

const currentAffairsService = new CurrentAffairsService();

export default currentAffairsService;

export interface TrendAnalysis {
  period: string;

  views_over_time: {
    date: string;
    views: number;
  }[];

  top_articles: CurrentAffair[];

  trending_topics: string[];

  recommendation: string;

  expected_questions: string[];
}

export interface SubjectNews {
  subject: string;
  articles: CurrentAffair[];
}

export interface OneLiner {
  id: number;
  text: string;
  language?: string;
}

export interface QuizQuestion {
  id: number;

  question: string;

  options: string[];

  correct_answer: string;

  explanation: string;

  category: string;

  difficulty: "Easy" | "Medium" | "Hard";

  answer?: string | number;
}

export interface CurrentAffairsDashboard {
  latest_articles: CurrentAffair[];
  featured_articles: CurrentAffair[];

  total_articles: number;
  total_views: number;

  categories: string[];
  topics: string[];

  subject_wise_news: SubjectNews[];
  one_liners: OneLiner[];
  daily_quiz: QuizQuestion[];
  trend_analysis: TrendAnalysis;

  daily_current_affairs: {
    total_articles: number;
    featured_articles: CurrentAffair[];
  };
}