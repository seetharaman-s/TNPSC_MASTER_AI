"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import AuthService from "@/services/authService";
import axios from "axios";

export default function RegisterPage() {

    const router = useRouter();

    const [form, setForm] = useState({
        username: "",
        full_name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function updateField(
        key: string,
        value: string,
    ) {

        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

    }

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>,
    ) {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (!form.username.trim()) {
            return setError("Username is required.");
        }

        if (!form.email.trim()) {
            return setError("Email is required.");
        }

        if (form.password.length < 6) {
            return setError(
                "Password must contain at least 6 characters."
            );
        }

        if (
            form.password !==
            form.confirmPassword
        ) {
            return setError(
                "Passwords do not match."
            );
        }

        try {

            setLoading(true);

            await AuthService.register({
                username: form.username,
                full_name: form.full_name,
                email: form.email,
                phone: form.phone,
                password: form.password,
            });

            setSuccess(
                "Registration successful."
            );

            setTimeout(() => {

                router.push("/login");

            }, 1500);

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(
                    typeof err.response?.data?.detail === "string"
                        ? err.response.data.detail
                        : "Registration failed."
                );
            } else {
                setError("Registration failed.");
            }
        } finally {
            setLoading(false);
        }
        }

    return (

        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-100 dark:bg-slate-950">

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">

                <h1 className="text-3xl font-bold text-center">

                    Create Account

                </h1>

                <p className="text-center text-gray-500 mt-2">

                    TNPSC MASTER AI

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 mt-8"
                >

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="Username"
                        value={form.username}
                        onChange={(e)=>
                            updateField(
                                "username",
                                e.target.value
                            )
                        }
                    />

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="Full Name"
                        value={form.full_name}
                        onChange={(e)=>
                            updateField(
                                "full_name",
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="email"
                        className="w-full border rounded-lg p-3"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e)=>
                            updateField(
                                "email",
                                e.target.value
                            )
                        }
                    />

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e)=>
                            updateField(
                                "phone",
                                e.target.value
                            )
                        }
                    />

                    <div className="relative">

                        <input
                            type={
                                showPassword
                                ? "text"
                                : "password"
                            }
                            className="w-full border rounded-lg p-3 pr-12"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e)=>
                                updateField(
                                    "password",
                                    e.target.value
                                )
                            }
                        />

                        <button
                            type="button"
                            onClick={()=>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="absolute right-4 top-4"
                        >
                            {showPassword
                                ? <EyeOff size={18}/>
                                : <Eye size={18}/>}
                        </button>

                    </div>

                    <div className="relative">

                        <input
                            type={
                                showConfirmPassword
                                ? "text"
                                : "password"
                            }
                            className="w-full border rounded-lg p-3 pr-12"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={(e)=>
                                updateField(
                                    "confirmPassword",
                                    e.target.value
                                )
                            }
                        />

                        <button
                            type="button"
                            onClick={()=>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            className="absolute right-4 top-4"
                        >
                            {showConfirmPassword
                                ? <EyeOff size={18}/>
                                : <Eye size={18}/>}
                        </button>

                    </div>

                    {error && (

                        <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-red-700">

                            {error}

                        </div>

                    )}

                    {success && (

                        <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-green-700">

                            {success}

                        </div>

                    )}

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold"
                    >
                        {loading
                            ? "Creating Account..."
                            : "Register"}
                    </button>

                </form>

                <div className="text-center mt-6">

                    Already have an account?

                    <Link
                        href="/login"
                        className="text-blue-600 font-semibold ml-2"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>

    );

}