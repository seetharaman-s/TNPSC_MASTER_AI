"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { WeeklyPerformance } from "@/services/performanceAnalyticsService";

interface Props {
  weeklyPerformance: WeeklyPerformance[];
}

export default function WeeklyTrendChart({
  weeklyPerformance,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Weekly Performance Trend
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Compare weekly score, accuracy, study hours,
          and completed tests.
        </p>

      </div>

      <div className="h-[380px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={weeklyPerformance}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="week"
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="score"
              name="Score"
              stroke="#2563eb"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey="accuracy"
              name="Accuracy"
              stroke="#16a34a"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="study_hours"
              name="Study Hours"
              stroke="#f97316"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="tests_completed"
              name="Tests"
              stroke="#9333ea"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">

        <div className="rounded-xl bg-blue-50 p-4">

          <p className="text-sm text-gray-500">
            Highest Score
          </p>

          <h3 className="mt-2 text-2xl font-bold text-blue-600">
            {Math.max(
              ...weeklyPerformance.map(
                (item) => item.score
              )
            )}
            %
          </h3>

        </div>

        <div className="rounded-xl bg-green-50 p-4">

          <p className="text-sm text-gray-500">
            Best Accuracy
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            {Math.max(
              ...weeklyPerformance.map(
                (item) => item.accuracy
              )
            )}
            %
          </h3>

        </div>

        <div className="rounded-xl bg-orange-50 p-4">

          <p className="text-sm text-gray-500">
            Total Study Hours
          </p>

          <h3 className="mt-2 text-2xl font-bold text-orange-600">
            {weeklyPerformance.reduce(
              (sum, item) =>
                sum + item.study_hours,
              0
            )}
          </h3>

        </div>

        <div className="rounded-xl bg-purple-50 p-4">

          <p className="text-sm text-gray-500">
            Total Tests
          </p>

          <h3 className="mt-2 text-2xl font-bold text-purple-600">
            {weeklyPerformance.reduce(
              (sum, item) =>
                sum + item.tests_completed,
              0
            )}
          </h3>

        </div>

      </div>

    </div>
  );
}