"use client";

import { ExamAnalytics as ExamAnalyticsType } from "@/services/reportService";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { GraduationCap } from "lucide-react";

interface Props {
  data: ExamAnalyticsType;
}

export default function ExamAnalytics({ data }: Props) {

  const chartData = [
    {
      exam: "Group 1",
      value: data.group1,
    },
    {
      exam: "Group 2",
      value: data.group2,
    },
    {
      exam: "Group 2A",
      value: data.group2a,
    },
    {
      exam: "Group 4",
      value: data.group4,
    },
    {
      exam: "VAO",
      value: data.vao,
    },
  ];

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <GraduationCap className="h-7 w-7 text-blue-600" />

        <h2 className="text-xl font-bold">
          TNPSC Exam Analytics
        </h2>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="space-y-4">

          {chartData.map((item) => (

            <div
              key={item.exam}
              className="flex items-center justify-between rounded-xl border p-4"
            >

              <span className="font-medium">
                {item.exam}
              </span>

              <span className="text-2xl font-bold text-blue-600">
                {item.value}
              </span>

            </div>

          ))}

        </div>

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="exam" />

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