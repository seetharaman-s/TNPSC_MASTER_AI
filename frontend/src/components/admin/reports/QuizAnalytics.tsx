"use client";

import { QuizAnalytics as QuizAnalyticsType } from "@/services/reportService";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: QuizAnalyticsType;
}

export default function QuizAnalytics({ data }: Props) {

  const chartData = [
    {
      name: "Average",
      value: data.average_score,
    },
    {
      name: "Highest",
      value: data.highest_score,
    },
    {
      name: "Lowest",
      value: data.lowest_score,
    },
    {
      name: "Pass %",
      value: data.pass_rate,
    },
    {
      name: "Fail %",
      value: data.failed_rate,
    },
  ];

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">

        Quiz Analytics

      </h2>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="space-y-4">

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              Total Attempts
            </p>
            <h3 className="text-2xl font-bold">
              {data.total_attempts}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              Average Score
            </p>
            <h3 className="text-2xl font-bold">
              {data.average_score.toFixed(2)}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              Highest Score
            </p>
            <h3 className="text-2xl font-bold">
              {data.highest_score.toFixed(2)}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              Lowest Score
            </p>
            <h3 className="text-2xl font-bold">
              {data.lowest_score.toFixed(2)}
            </h3>
          </div>

        </div>

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>

  );

}