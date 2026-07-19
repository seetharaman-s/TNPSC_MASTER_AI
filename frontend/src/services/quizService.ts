import api from "./api";

export const QuizService = {

  getAll() {
    return api.get("/quizzes");
  },

  getById(id: number) {
    return api.get(`/quizzes/${id}`);
  },

  create(data: any) {
    return api.post("/quizzes", data);
  },

  update(id: number, data: any) {
    return api.put(`/quizzes/${id}`, data);
  },

  delete(id: number) {
    return api.delete(`/quizzes/${id}`);
  },

  featured() {
    return api.get("/quizzes/featured");
  },

  latest(limit = 10) {
    return api.get(`/quizzes/latest?limit=${limit}`);
  },

  search(keyword: string) {
    return api.get("/quizzes/search", {
      params: {
        keyword,
      },
    });
  },

  filter(filters: {
    subject?: string;
    standard?: number;
    unit?: number;
    difficulty?: string;
  }) {
    return api.get("/quizzes/filter", {
      params: filters,
    });
  },

  getQuestions(id: number) {
    return api.get(`/quizzes/${id}/questions`);
  },
};