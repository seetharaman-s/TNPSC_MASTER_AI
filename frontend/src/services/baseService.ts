import api from "@/lib/api";

export class BaseService<T> {
  constructor(private endpoint: string) {}

  getAll(params?: any) {
    return api.get(this.endpoint, { params });
  }

  getById(id: string | number) {
    return api.get(`${this.endpoint}/${id}`);
  }

  create(data: T) {
    return api.post(this.endpoint, data);
  }

  update(id: string | number, data: T) {
    return api.put(`${this.endpoint}/${id}`, data);
  }

  delete(id: string | number) {
    return api.delete(`${this.endpoint}/${id}`);
  }
}