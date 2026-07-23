"use client";

import { useEffect, useState } from "react";

import currentAffairsService, {
  CurrentAffairsDashboard as DashboardData,
} from "@/services/currentAffairsService";

import NewsFeed from "./NewsFeed";
import SubjectNews from "./SubjectNews";
import OneLinerRevision from "./OneLinerRevision";
import DailyQuiz from "./DailyQuiz";
import TrendAnalysis from "./TrendAnalysis";
import BookmarkPanel from "./BookmarkPanel";

export default function CurrentAffairsDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const data =
        await currentAffairsService.getDashboard();

      setDashboard(data);

      setError("");
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load Current Affairs Dashboard."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 shadow">
        <p className="text-center text-gray-500">
          Loading Current Affairs...
        </p>
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6">
        <h2 className="font-semibold text-red-700">
          Error
        </h2>

        <p className="mt-2 text-red-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Dashboard Summary */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-gray-500">
            Total Articles
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {
              dashboard.daily_current_affairs
                .total_articles
            }
          </h2>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-gray-500">
            Featured News
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {
              dashboard.daily_current_affairs
                .featured_articles.length
            }
          </h2>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-gray-500">
            Subjects
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {
              dashboard.subject_wise_news.length
            }
          </h2>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <p className="text-sm text-gray-500">
            Today's Quiz
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {dashboard.daily_quiz.length}
          </h2>

        </div>

      </div>

      {/* Latest News */}

      <NewsFeed
        articles={dashboard.latest_articles}
      />

      {/* Subject Wise */}

      <SubjectNews
        subjects={
          dashboard.subject_wise_news
        }
      />

      {/* Revision */}

      <OneLinerRevision
        revisions={dashboard.one_liners}
      />

      {/* Quiz */}

      <DailyQuiz
        questions={dashboard.daily_quiz}
      />

      {/* AI Trend */}

      <TrendAnalysis
        analysis={
          dashboard.trend_analysis
        }
      />

      {/* Bookmarks */}

      <BookmarkPanel />

    </div>
  );
}