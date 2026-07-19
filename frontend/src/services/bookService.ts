import api from "./api";

export const BookService = {
  getAll() {
    return api.get("/books");
  },

  getById(id: number) {
    return api.get(`/books/${id}`);
  },

  create(data: any) {
    return api.post("/books", data);
  },

  update(id: number, data: any) {
    return api.put(`/books/${id}`, data);
  },

  delete(id: number) {
    return api.delete(`/books/${id}`);
  },

  featured() {
    return api.get("/books/featured");
  },

  latest(limit = 10) {
    return api.get(`/books/latest?limit=${limit}`);
  },

  search(keyword: string) {
    return api.get("/books/search", {
      params: { keyword },
    });
  },

  filter(params: {
    subject?: string;
    standard?: number;
    medium?: string;
  }) {
    return api.get("/books/filter", {
      params,
    });
  },
};