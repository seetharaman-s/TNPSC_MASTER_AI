"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Brain, BookOpen, Newspaper, BarChart3 } from "lucide-react";

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

        const success = await login(email, password);

        setLoading(false);

        if (success) {
            router.replace("/dashboard");
        } else {
            setError("Invalid email or password.");
        }
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-100 dark:bg-slate-950">

            {/* Left Panel */}

            <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white px-16">

                <h1 className="text-5xl font-extrabold">
                    TNPSC MASTER AI
                </h1>

                <p className="mt-6 text-xl text-blue-100">
                    Prepare Smarter. Practice Better. Succeed Faster.
                </p>

                <div className="mt-12 space-y-5">

                    <div className="flex items-center gap-3">
                        <Brain className="h-6 w-6" />
                        <span>AI Study Assistant</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6" />
                        <span>Latest TNPSC Books & Notes</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Newspaper className="h-6 w-6" />
                        <span>Daily Current Affairs</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <BarChart3 className="h-6 w-6" />
                        <span>Performance Analytics</span>
                    </div>

                </div>

            </div>

            {/* Right Panel */}

            <div className="flex items-center justify-center px-6 py-12">

                <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 shadow-2xl p-10">

                    <div className="text-center">

                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Welcome Back
                        </h2>

                        <p className="mt-2 text-slate-500 dark:text-slate-400">
                            Sign in to continue your TNPSC preparation.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                    >

                        <div>

                            <label className="mb-2 block text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-medium">
                                Password
                            </label>

                            <div className="relative">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>

                            </div>

                        </div>

                        <div className="flex items-center justify-between text-sm">

                            <label className="flex items-center gap-2">

                                <input
                                    type="checkbox"
                                    className="rounded"
                                />

                                Remember Me

                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>

                        </div>

                        {error && (

                            <div className="rounded-xl border border-red-300 bg-red-100 px-4 py-3 text-red-700">
                                {error}
                            </div>

                        )}

                        <button
                            disabled={loading}
                            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Signing In..." : "Login"}
                        </button>

                    </form>

                    <div className="mt-8 text-center text-sm">

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

        </div>
    );
}