"use client";

export default function DashboardCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <div className="rounded-2xl bg-white p-8 shadow">

        <h2 className="mb-5 text-xl font-bold">
          Monthly Users
        </h2>

        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed text-gray-400">
          Chart.js / Recharts Graph
        </div>

      </div>

      <div className="rounded-2xl bg-white p-8 shadow">

        <h2 className="mb-5 text-xl font-bold">
          Quiz Attempts
        </h2>

        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed text-gray-400">
          Pie Chart
        </div>

      </div>

    </div>
  );
}