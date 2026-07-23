import api from "./api";

export interface CurrentAffairsCategory {
  id: number;
  name: string;
  tamil_name: string;
  icon: string;
  color: string;
  sort_order: number;
  is_active: boolean;
}

export interface CurrentAffairsCategoryCreate {
  name: string;
  tamil_name: string;
  icon: string;
  color: string;
  sort_order: number;
  is_active: boolean;
}

class CurrentAffairsCategoryServiceClass {
  private readonly BASE = "/current-affairs/categories";

  async getAll() {
    const { data } = await api.get(this.BASE);
    return data;
  }

  async getById(id: number) {
    const { data } = await api.get(`${this.BASE}/${id}`);
    return data;
  }

  async create(payload: CurrentAffairsCategoryCreate) {
    const { data } = await api.post(this.BASE, payload);
    return data;
  }

  async update(
    id: number,
    payload: Partial<CurrentAffairsCategoryCreate>
  ) {
    const { data } = await api.put(`${this.BASE}/${id}`, payload);
    return data;
  }

  async delete(id: number) {
    return api.delete(`${this.BASE}/${id}`);
  }
}

export const CurrentAffairsCategoryService =
  new CurrentAffairsCategoryServiceClass();

export default CurrentAffairsCategoryService;