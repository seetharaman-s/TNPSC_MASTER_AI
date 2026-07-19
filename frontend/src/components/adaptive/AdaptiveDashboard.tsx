"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import AdaptiveLearningService, {
  AdaptiveDashboard as AdaptiveDashboardData,
} from "@/services/adaptiveLearningService";

import WeakTopics from "./WeakTopics";
import RevisionPlanner from "./RevisionPlanner";
import RecommendedQuestions from "./RecommendedQuestions";
import SubjectMastery from "./SubjectMastery";
import ExamReadiness from "./ExamReadiness";
import DailyGoals from "./DailyGoals";

interface Props {
  userId: number;
}

export default function AdaptiveDashboard({
  userId,
}: Props) {
  const [dashboard, setDashboard] =
    useState<AdaptiveDashboardData | null>(null);

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
        await AdaptiveLearningService.getDashboard(
          userId
        );

      setDashboard(data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to load Adaptive Learning dashboard."
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

      {/* Exam Readiness */}

      <ExamReadiness
        readiness={dashboard.exam_readiness}
      />

      {/* Weak Topics */}

      <WeakTopics
        topics={dashboard.weak_topics}
      />

      {/* Daily Goals */}

      <DailyGoals
        goals={dashboard.daily_goals}
      />

      {/* Subject Mastery */}

      <SubjectMastery
        mastery={dashboard.mastery}
      />

      {/* Revision Plan */}

      <RevisionPlanner
        tasks={dashboard.revision_plan}
      />

      {/* Recommended Questions */}

      <RecommendedQuestions
        questions={dashboard.recommended_mcqs}
      />

    </div>
  );
}