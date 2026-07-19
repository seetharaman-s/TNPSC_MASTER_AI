import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// ===============================
// Types
// ===============================

export interface CurrentAffair {
  id: number;
  title: string;
  category: string;
  topic: string;
  content: string;
  source?: string;
  pdf_url?: string;
  image_url?: string;
  publish_date: string;
  language: string;
  featured: boolean;
  is_active: boolean;
  views: number;
}

export interface DashboardSummary {
  total_articles: number;
  active_articles: number;
  featured_articles: number;
  total_views: number;
}

export interface Dashboard {
  summary: DashboardSummary;
  latest_articles: CurrentAffair[];
  featured_articles: CurrentAffair[];
  subject_wise_news: any[];
  one_liners: any[];
  daily_quiz: any[];
  trend_analysis: any;
  statistics: any;
}

// ===============================
// API
// ===============================

export const CurrentAffairsAPI = {
  async dashboard() {
    const { data } = await API.get("/current-affairs/dashboard");
    return data;
  },

  async latest(limit = 10) {
    const { data } = await API.get("/current-affairs/latest", {
      params: { limit },
    });
    return data;
  },

  async featured() {
    const { data } = await API.get("/current-affairs/featured");
    return data;
  },

  async categories() {
    const { data } = await API.get("/current-affairs/categories");
    return data;
  },

  async topics() {
    const { data } = await API.get("/current-affairs/topics");
    return data;
  },

  async languages() {
    const { data } = await API.get("/current-affairs/languages");
    return data;
  },

  async search(keyword: string) {
    const { data } = await API.get("/current-affairs/search", {
      params: { keyword },
    });

    return data;
  },

  async filter(params: any) {
    const { data } = await API.get("/current-affairs/filter", {
      params,
    });

    return data;
  },

  async get(id: number) {
    const { data } = await API.get(`/current-affairs/${id}`);
    return data;
  },

  async create(payload: any) {
    const { data } = await API.post("/current-affairs", payload);
    return data;
  },

  async update(id: number, payload: any) {
    const { data } = await API.put(`/current-affairs/${id}`, payload);
    return data;
  },

  async delete(id: number) {
    const { data } = await API.delete(`/current-affairs/${id}`);
    return data;
  },
};