"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Calendar,
  Loader2,
  Target,
  TrendingUp,
} from "lucide-react";

import CareerGuidanceService, {
  CareerDashboard as CareerDashboardData,
} from "@/services/careerGuidanceService";

import StudyPlanCard from "./StudyPlanCard";
import GoalTracker from "./GoalTracker";
import SubjectRecommendation from "./SubjectRecommendation";
import ExamReadiness from "./ExamReadiness";
import MotivationCard from "./MotivationCard";

interface Props {
  userId: number;
}

export default function CareerDashboard({
  userId,
}: Props) {
  const [dashboard, setDashboard] =
    useState<CareerDashboardData | null>(null);

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
        await CareerGuidanceService.getDashboard(
          userId
        );

      setDashboard(data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to load Career Guidance Dashboard."
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

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Brain className="h-8 w-8" />

              <h1 className="text-3xl font-bold">
                AI Career Guidance
              </h1>
            </div>

            <p className="max-w-2xl text-blue-100">
              Personalized study plans, AI recommendations,
              exam readiness prediction and goal tracking
              designed specifically for TNPSC preparation.
            </p>
          </div>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Calendar className="mb-3 h-8 w-8 text-blue-600" />

          <p className="text-sm text-gray-500">
            Today's Study
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {dashboard.daily_plan.total_study_minutes}
            <span className="ml-1 text-base font-medium">
              mins
            </span>
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {dashboard.daily_plan.tasks.length} planned tasks
          </p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <TrendingUp className="mb-3 h-8 w-8 text-green-600" />

          <p className="text-sm text-gray-500">
            Weekly Progress
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {dashboard.weekly_plan.completed_hours}
            /
            {dashboard.weekly_plan.target_hours}
            h
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Study hours completed
          </p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Target className="mb-3 h-8 w-8 text-purple-600" />

          <p className="text-sm text-gray-500">
            Exam Readiness
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {dashboard.exam_readiness.overall_readiness}%
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Current preparation level
          </p>
        </div>

      </div>

      {/* Study Plan */}

      <StudyPlanCard
        plan={dashboard.daily_plan}
      />

      {/* Goals */}

      <GoalTracker
        goals={dashboard.goals}
      />

      {/* Subject Recommendations */}

      <SubjectRecommendation
        recommendations={
          dashboard.subject_recommendations
        }
      />

      {/* Exam Readiness */}

      <ExamReadiness
        readiness={dashboard.exam_readiness}
      />

      {/* Motivation */}

      <MotivationCard
        motivation={dashboard.motivation}
      />

    </div>
  );
}