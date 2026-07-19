import api from "./api";

export const CurrentAffairsService = {
  getAll() {
    return api.get("/current-affairs");
  },

  getById(id: number) {
    return api.get(`/current-affairs/${id}`);
  },

  create(data: any) {
    return api.post("/current-affairs", data);
  },

  update(id: number, data: any) {
    return api.put(`/current-affairs/${id}`, data);
  },

  delete(id: number) {
    return api.delete(`/current-affairs/${id}`);
  },

  featured() {
    return api.get("/current-affairs/featured");
  },

  latest(limit = 10) {
    return api.get(`/current-affairs/latest?limit=${limit}`);
  },

  search(keyword: string) {
    return api.get("/current-affairs/search", {
      params: { keyword },
    });
  },

  filter(params: {
    category?: string;
    publish_date?: string;
    language?: string;
  }) {
    return api.get("/current-affairs/filter", {
      params,
    });
  },
};