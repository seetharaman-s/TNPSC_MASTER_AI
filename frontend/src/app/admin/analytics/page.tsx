"use client";

import DashboardCharts from "@/components/admin/analytics/DashboardCharts";
import StatisticsCards from "@/components/admin/analytics/StatisticsCards";

export default function AnalyticsPage() {
  return (
    <main className="space-y-8 p-8">

      <div>
        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          View platform statistics and user activity.
        </p>
      </div>

      <StatisticsCards />

      <DashboardCharts />

    </main>
  );
}