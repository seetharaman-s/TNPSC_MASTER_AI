"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const router = useRouter();

    const {
        loading,
        isAuthenticated,
    } = useAuth();

    useEffect(() => {

        if (!loading && !isAuthenticated) {
            router.replace("/login");
        }

    }, [
        loading,
        isAuthenticated,
        router,
    ]);

    if (loading) {

        return (

            <div className="flex min-h-screen items-center justify-center">

                <h2 className="text-xl font-semibold">
                    Loading...
                </h2>

            </div>

        );

    }

    if (!isAuthenticated) {
        return null;
    }

    return children;
}