"use client";

import { useEffect, useState } from "react";

import { Banner } from "./banner";
import { MotivationCard } from "./motivation";
import { QuickActions } from "./quick-actions";
import { SearchBar } from "./search";
import { CurrentAffairsCard } from "./current-affairs";

import SummaryCards from "./cards/SummaryCards";
import ContinueReading from "./continue-learning/ContinueReading";
import WeeklyProgress from "./progress/WeeklyProgress";

import RecentQuiz from "../quizzes/RecentQuiz";

import { DashboardService } from "@/services/dashboardService";

export default function Dashboard() {

    const [summary, setSummary] = useState<any>(null);

    const [continueReading, setContinueReading] =
        useState<any>(null);

    const [weeklyProgress, setWeeklyProgress] =
        useState<any>(null);

    const [recentQuiz, setRecentQuiz] =
        useState<any>(null);

    useEffect(() => {

        DashboardService.summary()
            .then((res) => {
                setSummary(res.data);
            });

        DashboardService.continueReading()
            .then((res) => {
                setContinueReading(res.data);
            });

        DashboardService.weeklyProgress()
            .then((res) => {
                setWeeklyProgress(res.data);
            });

        DashboardService.recentQuiz()
            .then((res) => {
                setRecentQuiz(res.data);
            });

    }, []);

    return (

        <main className="min-h-screen bg-slate-100">

            <div className="max-w-7xl mx-auto px-6 py-6">

                {/* Banner */}
                <Banner />

                {/* Summary */}
                <div className="mt-6">
                    {summary && (
                        <SummaryCards summary={summary} />
                    )}
                </div>

                {/* Search */}
                <div className="mt-6">
                    <SearchBar />
                </div>

                {/* Motivation */}
                <div className="mt-6">
                    <MotivationCard />
                </div>

                {/* Dashboard Widgets */}
                <div className="grid lg:grid-cols-2 gap-6 mt-6">

                    {continueReading && (
                        <ContinueReading
                            progress={continueReading}
                        />
                    )}

                    {weeklyProgress && (
                        <WeeklyProgress
                            progress={weeklyProgress}
                        />
                    )}

                    {recentQuiz && (
                        <RecentQuiz
                            quiz={recentQuiz}
                        />
                    )}

                    <CurrentAffairsCard />

                </div>

                {/* Explore */}
                <div className="mt-8">

                    <h2 className="text-2xl font-bold mb-5">
                        Explore
                    </h2>

                    <QuickActions />

                </div>

            </div>

        </main>

    );

}