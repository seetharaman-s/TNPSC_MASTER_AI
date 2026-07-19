"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { SubjectPerformance } from "@/services/performanceAnalyticsService";

interface Props {
  subjects: SubjectPerformance[];
}

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#9333ea",
  "#f97316",
  "#dc2626",
  "#0891b2",
  "#7c3aed",
];

export default function AccuracyChart({
  subjects,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Subject Accuracy Analysis
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Compare the accuracy percentage across all
          TNPSC subjects.
        </p>

      </div>

      <div className="h-[380px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={subjects}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="subject"
              angle={-20}
              textAnchor="end"
              interval={0}
              height={70}
            />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="accuracy"
              name="Accuracy (%)"
              radius={[8, 8, 0, 0]}
            >

              {subjects.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl bg-blue-50 p-4">

          <p className="text-sm text-gray-500">
            Highest Accuracy
          </p>

          <h3 className="mt-2 text-2xl font-bold text-blue-600">
            {Math.max(
              ...subjects.map(
                (item) => item.accuracy
              )
            )}
            %
          </h3>

        </div>

        <div className="rounded-xl bg-green-50 p-4">

          <p className="text-sm text-gray-500">
            Average Accuracy
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            {(
              subjects.reduce(
                (sum, item) =>
                  sum + item.accuracy,
                0
              ) / subjects.length
            ).toFixed(1)}
            %
          </h3>

        </div>

        <div className="rounded-xl bg-purple-50 p-4">

          <p className="text-sm text-gray-500">
            Best Subject
          </p>

          <h3 className="mt-2 text-xl font-bold text-purple-600">
            {
              subjects.reduce((best, current) =>
                current.accuracy >
                best.accuracy
                  ? current
                  : best
              ).subject
            }
          </h3>

        </div>

      </div>

    </div>
  );
}