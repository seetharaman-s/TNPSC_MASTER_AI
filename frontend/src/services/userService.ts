import api from "./api";

export const UserService = {

    // ------------------------------------
    // List Users
    // ------------------------------------

    getAll(
        skip = 0,
        limit = 20,
    ) {

        return api.get("/users", {
            params: {
                skip,
                limit,
            },
        });

    },

    // ------------------------------------
    // Get User
    // ------------------------------------

    getById(
        id: number,
    ) {

        return api.get(`/users/${id}`);

    },

    // ------------------------------------
    // Search Users
    // ------------------------------------

    search(
        keyword: string,
    ) {

        return api.get("/users/search", {
            params: {
                keyword,
            },
        });

    },

    // ------------------------------------
    // Filter by Role
    // ------------------------------------

    filterByRole(
        role: string,
    ) {

        return api.get(`/users/role/${role}`);

    },

    // ------------------------------------
    // Filter Active Users
    // ------------------------------------

    filterByStatus(
        active: boolean,
    ) {

        return api.get(`/users/active/${active}`);

    },

    // ------------------------------------
    // Update User
    // ------------------------------------

    update(
        id: number,
        data: any,
    ) {

        return api.put(
            `/users/${id}`,
            data,
        );

    },

    // ------------------------------------
    // Delete User
    // ------------------------------------

    delete(
        id: number,
    ) {

        return api.delete(
            `/users/${id}`,
        );

    },

    // ------------------------------------
    // Activate User
    // ------------------------------------

    activate(
        id: number,
    ) {

        return api.put(
            `/users/${id}/activate`,
        );

    },

    // ------------------------------------
    // Deactivate User
    // ------------------------------------

    deactivate(
        id: number,
    ) {

        return api.put(
            `/users/${id}/deactivate`,
        );

    },

    // ------------------------------------
    // Change Role
    // ------------------------------------

    changeRole(
        id: number,
        role: "admin" | "user",
    ) {

        return api.put(
            `/users/${id}/role/${role}`,
        );

    },

};