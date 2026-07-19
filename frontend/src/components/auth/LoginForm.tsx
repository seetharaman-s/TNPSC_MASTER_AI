"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {

    const router = useRouter();

    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function handleSubmit(
        e: React.FormEvent,
    ) {

        e.preventDefault();

        setLoading(true);

        setError("");

        const success = await login(
            email,
            password,
        );

        if (success) {

            router.push("/admin/dashboard");

        } else {

            setError(
                "Invalid email or password."
            );

        }

        setLoading(false);

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl space-y-6"
        >

            <div className="text-center">

                <h1 className="text-3xl font-bold">
                    TNPSC MASTER AI
                </h1>

                <p className="mt-2 text-gray-500">
                    Administrator Login
                </p>

            </div>

            {error && (

                <div className="rounded-lg bg-red-100 p-3 text-red-700">

                    {error}

                </div>

            )}

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Email
                </label>

                <input
                    type="email"
                    className="w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Password
                </label>

                <input
                    type="password"
                    className="w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >

                {loading
                    ? "Signing In..."
                    : "Login"}

            </button>

        </form>

    );

}