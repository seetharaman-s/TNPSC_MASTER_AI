import api from "@/lib/api";

const BASE = "/questions";

export const QuestionBankService = {

    getAll(params?: any) {

        return api.get(BASE, { params });

    },

    getById(id: number) {

        return api.get(`${BASE}/${id}`);

    },

    create(data: any) {

        return api.post(BASE, data);

    },

    update(id: number, data: any) {

        return api.put(`${BASE}/${id}`, data);

    },

    delete(id: number) {

        return api.delete(`${BASE}/${id}`);

    },

    duplicate(id: number) {

        return api.post(`${BASE}/${id}/duplicate`);

    },

    verify(id: number) {

        return api.patch(`${BASE}/${id}/verify`);

    },

    publish(id: number) {

        return api.patch(`${BASE}/${id}/publish`);

    },

    bulkDelete(ids: number[]) {

        return api.post(`${BASE}/bulk-delete`, { ids });

    },

    bulkVerify(ids: number[]) {

        return api.post(`${BASE}/bulk-verify`, { ids });

    },

    bulkPublish(ids: number[]) {

        return api.post(`${BASE}/bulk-publish`, { ids });

    }

};