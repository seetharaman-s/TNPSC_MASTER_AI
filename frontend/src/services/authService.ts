import api from "@/lib/api";

/* ============================================================
   Interfaces
============================================================ */

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    full_name?: string;
    email: string;
    password: string;
    phone?: string;
}

export interface UpdateProfileRequest {
    username?: string;
    full_name?: string;
    phone?: string;
    email?: string;
}

export interface ChangePasswordRequest {
    old_password: string;
    new_password: string;
}

export interface User {
    id: string; // UUID from FastAPI
    username: string;
    full_name?: string;
    email: string;
    phone?: string;
    role?: string;
    is_active?: boolean;
    created_at?: string;
}
/* ============================================================
   Token Keys
============================================================ */

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

/* ============================================================
   Helper Functions
============================================================ */

const isBrowser = () => typeof window !== "undefined";

const saveAccessToken = (token: string) => {
    if (isBrowser()) {
        localStorage.setItem(ACCESS_TOKEN, token);
    }
};

const saveRefreshToken = (token: string) => {
    if (isBrowser()) {
        localStorage.setItem(REFRESH_TOKEN, token);
    }
};

const removeTokens = () => {
    if (isBrowser()) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
    }
};

const getAccessToken = (): string | null => {
    if (!isBrowser()) return null;
    return localStorage.getItem(ACCESS_TOKEN);
};

const getRefreshToken = (): string | null => {
    if (!isBrowser()) return null;
    return localStorage.getItem(REFRESH_TOKEN);
};

/* ============================================================
   Auth Service
============================================================ */

export const AuthService = {

    /* ========================================================
       Register
    ======================================================== */

    async register(data: RegisterRequest) {

        const response = await api.post(
            "/auth/register",
            data
        );

        return response.data;
    },

    /* ========================================================
       Login
    ======================================================== */

    async login(data: LoginRequest) {

        const response = await api.post(
            "/auth/login",
            data
        );

        const token =
            response.data.access_token;

        const refresh =
            response.data.refresh_token;

        if (token) {
            saveAccessToken(token);
        }

        if (refresh) {
            saveRefreshToken(refresh);
        }

        return response.data;
    },

    /* ========================================================
       Current User
    ======================================================== */

    async me(): Promise<User> {

        const response = await api.get(
            "/auth/me"
        );

        return response.data;
    },

    /* ========================================================
       Update Profile
    ======================================================== */

    async updateProfile(
        data: UpdateProfileRequest
    ) {

        const response = await api.put(
            "/auth/profile",
            data
        );

        return response.data;
    },

    /* ========================================================
       Change Password
    ======================================================== */

    async changePassword(
        data: ChangePasswordRequest
    ) {

        const response = await api.put(
            "/auth/change-password",
            data
        );

        return response.data;
    },

    /* ========================================================
       Logout
    ======================================================== */

    async logout() {

        try {

            await api.post(
                "/auth/logout"
            );

        } catch (error) {

            console.warn(
                "Logout API failed",
                error
            );

        } finally {

            removeTokens();

        }

    },

    /* ========================================================
       Refresh Token (Future)
    ======================================================== */

    async refreshToken() {
    try {
        const refresh = getRefreshToken();

        if (!refresh) {
            return null;
        }

        const response = await api.post(
            "/auth/refresh",
            {
                refresh_token: refresh,
            }
        );

        const newToken = response.data.access_token;

        if (newToken) {
            saveAccessToken(newToken);
        }

        return response.data;

    } catch (error) {

        removeTokens();
        return null;

    }
    },

    /* ========================================================
       Token Helpers
    ======================================================== */

    getToken() {
        return getAccessToken();
    },

    getRefreshToken() {
        return getRefreshToken();
    },

    /* ========================================================
       Authentication Status
    ======================================================== */

    isAuthenticated() {
    const token = getAccessToken();
    return token !== null && token.length > 0;
    },
    /* ========================================================
       Clear Tokens
    ======================================================== */

    clearTokens() {
        removeTokens();
    }

};

export default AuthService;