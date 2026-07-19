import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <LoginForm />
    </main>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {

    const router = useRouter();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        setError("");

        if (!email.trim()) {
            setError("Email is required.");
            return;
        }

        if (!password.trim()) {
            setError("Password is required.");
            return;
        }

        setLoading(true);

        const success = await login(
            email,
            password,
        );

        setLoading(false);

        if (success) {

            router.replace("/dashboard");

        } else {

            setError(
                "Invalid email or password."
            );

        }

    }

    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">

                <div className="mb-8 text-center">

                    <h1 className="text-3xl font-bold">

                        TNPSC MASTER AI

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Sign in to continue

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block text-sm font-medium mb-2">

                            Email

                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            placeholder="Enter email"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-medium mb-2">

                            Password

                        </label>

                        <div className="relative">

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                placeholder="Enter password"
                                className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-3"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >

                                {showPassword
                                    ? <EyeOff size={20}/>
                                    : <Eye size={20}/>}

                            </button>

                        </div>

                    </div>

                    {error && (

                        <div className="rounded-lg bg-red-100 border border-red-300 text-red-700 px-4 py-3">

                            {error}

                        </div>

                    )}

                    <button
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >

                        {loading
                            ? "Signing In..."
                            : "Login"}

                    </button>

                </form>

                <div className="mt-6 text-center text-sm">

                    Don't have an account?{" "}

                    <Link
                        href="/register"
                        className="font-semibold text-blue-600 hover:underline"
                    >

                        Register

                    </Link>

                </div>

            </div>

        </div>

    );

}