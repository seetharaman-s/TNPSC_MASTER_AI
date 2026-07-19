"use client";

import { useEffect, useState } from "react";
import ProgressService, {
  ProgressDashboard as ProgressDashboardData,
} from "@/services/progressService";

import ProgressCards from "./ProgressCards";
import SubjectProgress from "./SubjectProgress";
import WeeklyChart from "./WeeklyChart";
import StudyStreak from "./StudyStreak";
import AchievementBadges from "./AchievementBadges";
import PerformanceHistory from "./PerformanceHistory";

import { Loader2 } from "lucide-react";

interface Props {
  userId: number;
}

export default function ProgressDashboard({
  userId,
}: Props) {
  const [dashboard, setDashboard] =
    useState<ProgressDashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, [userId]);

  async function loadDashboard() {
    try {
      setLoading(true);
      setError("");

      const data =
        await ProgressService.getDashboard(userId);

      setDashboard(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load progress dashboard.");
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
        {error || "Unable to load dashboard."}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Overview Cards */}
      <ProgressCards
        overview={dashboard.overview}
      />

      {/* Subject Progress */}
      <SubjectProgress
        subjects={dashboard.subjects}
      />

      {/* Weekly Study */}
      <WeeklyChart
        data={dashboard.weekly_study}
      />

      {/* Streak */}
      <StudyStreak
        streak={dashboard.streak}
      />

      {/* Achievements */}
      <AchievementBadges
        achievements={dashboard.achievements}
      />

      {/* Performance History */}
      <PerformanceHistory
        history={dashboard.recent_history}
      />

    </div>
  );
}