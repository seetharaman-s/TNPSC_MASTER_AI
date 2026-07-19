"use client";

import AnalyticsDashboard from "@/components/performance-analytics/AnalyticsDashboard";

export default function PerformanceAnalyticsPage() {
  /**
   * Replace this with your authentication/user context.
   *
   * Example:
   * const { user } = useAuth();
   * const userId = user.id;
   */

  const userId = 1;

  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            AI Performance Analytics
          </h1>

          <p className="mt-2 text-gray-600">
            Monitor your TNPSC preparation using
            AI-powered performance insights,
            subject analytics, rank prediction,
            study recommendations, and learning
            statistics.
          </p>

        </div>

        {/* Analytics Dashboard */}

        <AnalyticsDashboard
          userId={userId}
        />

      </div>

    </main>
  );
}