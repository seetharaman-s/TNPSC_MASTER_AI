import api from "./api";

export const NoteService = {
  getAll() {
    return api.get("/notes");
  },

  getById(id: number) {
    return api.get(`/notes/${id}`);
  },

  create(data: any) {
    return api.post("/notes", data);
  },

  update(id: number, data: any) {
    return api.put(`/notes/${id}`, data);
  },

  delete(id: number) {
    return api.delete(`/notes/${id}`);
  },

  featured() {
    return api.get("/notes/featured");
  },

  latest(limit = 10) {
    return api.get(`/notes/latest?limit=${limit}`);
  },

  search(keyword: string) {
    return api.get("/notes/search", {
      params: { keyword },
    });
  },

  filter(params: {
    subject?: string;
    standard?: number;
    unit?: number;
    medium?: string;
  }) {
    return api.get("/notes/filter", {
      params,
    });
  },
};