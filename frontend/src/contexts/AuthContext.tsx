"use client";
import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import AuthService, {
    User,
    LoginRequest,
} from "@/services/authService";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;

    login: (
        email: string,
        password: string,
    ) => Promise<boolean>;

    logout: () => Promise<void>;

    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        refreshUser();

    }, []);

    async function refreshUser() {

        try {

            if (!AuthService.isAuthenticated()) {

                setUser(null);
                return;

            }

            const profile = await AuthService.me();

            setUser(profile);

        } catch (error) {
            console.error(error);

            if (axios.isAxiosError(error) && error.response?.status === 401) {
                AuthService.clearTokens();
            }

            setUser(null);
        } finally {

            setLoading(false);

        }

    }

    async function login(
        email: string,
        password: string,
    ): Promise<boolean> {

        try {

            const data: LoginRequest = {
                email,
                password,
            };

            const response = await AuthService.login(data);

            setUser(response.user);

            return true;

        } catch (error) {

            console.error(error);

            return false;

        }

    }

    async function logout() {

        await AuthService.logout();

        setUser(null);

    }

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                refreshUser,
                isAuthenticated: !!user,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth must be used within AuthProvider."
        );

    }

    return context;

}