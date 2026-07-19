"use client";

import { useEffect, useState } from "react";
import {
    RefreshCw,
    Bell,
    CalendarDays,
    Clock,
} from "lucide-react";

interface DashboardHeaderProps {
    adminName: string;
    onRefresh: () => void;
}

export default function DashboardHeader({
    adminName,
    onRefresh,
}: DashboardHeaderProps) {

    const [currentTime, setCurrentTime] =
        useState(new Date());

    const [refreshing, setRefreshing] =
        useState(false);

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    async function handleRefresh() {

        try {

            setRefreshing(true);

            await onRefresh();

        } finally {

            setTimeout(() => {

                setRefreshing(false);

            }, 500);

        }

    }

    return (

        <div className="rounded-2xl bg-white shadow-md p-6">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* Left */}

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">

                        Welcome,

                        <span className="text-blue-600 ml-2">

                            {adminName}

                        </span>

                    </h1>

                    <p className="mt-2 text-gray-500">

                        TNPSC MASTER AI
                        Administrator Dashboard

                    </p>

                </div>

                {/* Right */}

                <div className="flex flex-wrap items-center gap-4">

                    <div className="flex items-center gap-2 rounded-xl border px-4 py-2">

                        <CalendarDays
                            className="text-blue-600"
                            size={18}
                        />

                        <span>

                            {currentTime.toLocaleDateString()}

                        </span>

                    </div>

                    <div className="flex items-center gap-2 rounded-xl border px-4 py-2">

                        <Clock
                            className="text-green-600"
                            size={18}
                        />

                        <span>

                            {currentTime.toLocaleTimeString()}

                        </span>

                    </div>

                    <button
                        className="relative rounded-xl border p-3 hover:bg-gray-100 transition"
                    >

                        <Bell size={20} />

                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500" />

                    </button>

                    <button
                        onClick={handleRefresh}
                        disabled={refreshing}
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
                    >

                        <RefreshCw
                            size={18}
                            className={
                                refreshing
                                    ? "animate-spin"
                                    : ""
                            }
                        />

                        {refreshing
                            ? "Refreshing..."
                            : "Refresh"}

                    </button>

                </div>

            </div>

        </div>

    );

}