"use client";

import ProgressItem from "./ProgressItem";
import WeeklyChart from "./WeeklyChart";

export default function ProgressCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          Today's Progress
        </h2>

        <button className="text-blue-600 text-sm font-semibold">
          View All
        </button>

      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">

        <ProgressItem
          icon="⏱️"
          title="Study Time"
          value="2h 45m"
          color="text-green-600"
        />

        <ProgressItem
          icon="📝"
          title="Tests"
          value="3"
          color="text-blue-600"
        />

        <ProgressItem
          icon="🎯"
          title="Accuracy"
          value="78%"
          color="text-red-500"
        />

      </div>

      <WeeklyChart />

    </div>
  );
}