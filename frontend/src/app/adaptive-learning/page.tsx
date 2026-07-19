"use client";

import AdaptiveDashboard from "@/components/adaptive/AdaptiveDashboard";

export default function AdaptiveLearningPage() {
  /**
   * TODO:
   * Replace this static user ID with the authenticated
   * user's ID once authentication is integrated.
   */
  const userId = 1;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Page Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Adaptive Learning
          </h1>

          <p className="mt-2 text-gray-600">
            Personalized AI-powered learning recommendations,
            subject mastery analysis, revision planning,
            and exam readiness insights.
          </p>
        </div>

        {/* Dashboard */}

        <AdaptiveDashboard
          userId={userId}
        />

      </div>
    </main>
  );
}