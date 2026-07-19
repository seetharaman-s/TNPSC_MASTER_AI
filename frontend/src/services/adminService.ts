import api from "./api";

export const AdminService = {

    dashboard() {
        return api.get("/admin/dashboard");
    },

};