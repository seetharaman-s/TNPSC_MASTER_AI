"use client";

import { useEffect, useState } from "react";

import {
  Activity,
  Brain,
  Loader2,
  Target,
  TrendingUp,
} from "lucide-react";

import PerformanceAnalyticsService, {
  PerformanceAnalyticsDashboard as DashboardData,
} from "@/services/performanceAnalyticsService";

import PerformanceOverview from "./PerformanceOverview";
import SubjectAnalytics from "./SubjectAnalytics";
import WeeklyTrendChart from "./WeeklyTrendChart";
import AccuracyChart from "./AccuracyChart";
import TimeAnalysis from "./TimeAnalysis";
import AIInsights from "./AIInsights";
import RankPrediction from "./RankPrediction";
import StrengthWeakness from "./StrengthWeakness";
import StudyRecommendation from "./StudyRecommendation";

interface Props {
  userId: number;
}

export default function AnalyticsDashboard({
  userId,
}: Props) {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    loadDashboard();
  }, [userId]);

  async function loadDashboard() {
    try {
      setLoading(true);
      setError("");

      const data =
        await PerformanceAnalyticsService.getDashboard(
          userId
        );

      setDashboard(data);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load Performance Analytics."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
        {error || "Dashboard unavailable."}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-8 text-white shadow-lg">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <Brain className="h-9 w-9" />

              <h1 className="text-3xl font-bold">
                AI Performance Analytics
              </h1>

            </div>

            <p className="max-w-3xl leading-relaxed text-blue-100">
              Analyze your preparation using AI-powered
              performance metrics, subject mastery,
              study analytics, predicted rank,
              personalized recommendations and
              intelligent insights.
            </p>

          </div>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Overall Score */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Target className="mb-4 h-8 w-8 text-blue-600" />

          <p className="text-sm text-gray-500">
            Overall Score
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {dashboard.overview.overall_score}%
          </h2>

        </div>

        {/* Accuracy */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <TrendingUp className="mb-4 h-8 w-8 text-green-600" />

          <p className="text-sm text-gray-500">
            Average Accuracy
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {dashboard.overview.average_accuracy}%
          </h2>

        </div>

        {/* Tests */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Activity className="mb-4 h-8 w-8 text-purple-600" />

          <p className="text-sm text-gray-500">
            Tests Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {dashboard.overview.tests_completed}
          </h2>

        </div>

        {/* Study Hours */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Brain className="mb-4 h-8 w-8 text-orange-600" />

          <p className="text-sm text-gray-500">
            Study Hours
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {dashboard.overview.total_study_hours}
          </h2>

        </div>

      </div>

      {/* Performance Overview */}

      <PerformanceOverview
        overview={dashboard.overview}
      />

      {/* Subject Analytics */}

      <SubjectAnalytics
        subjects={dashboard.subject_performance}
      />

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <WeeklyTrendChart
          weeklyPerformance={
            dashboard.weekly_performance
          }
        />

        <AccuracyChart
          subjects={
            dashboard.subject_performance
          }
        />

      </div>

      {/* Time Analysis & Rank Prediction */}

      <div className="grid gap-6 xl:grid-cols-2">

        <TimeAnalysis
          analysis={dashboard.time_analysis}
        />

        <RankPrediction
          prediction={
            dashboard.rank_prediction
          }
        />

      </div>

      {/* AI Insights */}

      <AIInsights
        insights={dashboard.ai_insights}
      />

      {/* Strength & Weakness */}

      <StrengthWeakness
        data={dashboard.strength_weakness}
      />

      {/* Study Recommendations */}

      <StudyRecommendation
        recommendations={
          dashboard.study_recommendations
        }
      />

    </div>
  );
}