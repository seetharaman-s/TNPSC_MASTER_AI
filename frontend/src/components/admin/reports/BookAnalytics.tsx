"use client";

import { BookAnalytics as BookAnalyticsType } from "@/services/reportService";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { BookOpen, Eye, Download } from "lucide-react";

interface Props {
  data: BookAnalyticsType;
}

export default function BookAnalytics({ data }: Props) {

  const chartData = [
    {
      name: "Views",
      value: data.total_views,
    },
    {
      name: "Downloads",
      value: data.total_downloads,
    },
  ];

  const COLORS = [
    "#3b82f6",
    "#10b981",
  ];

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <BookOpen className="h-7 w-7 text-blue-600" />

        <h2 className="text-xl font-bold">
          Book Analytics
        </h2>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="space-y-4">

          <div className="rounded-xl border p-4">

            <p className="text-sm text-gray-500">
              Total Books
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              {data.total_books}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Eye className="h-5 w-5 text-blue-600" />

              <p className="text-sm text-gray-500">
                Total Views
              </p>

            </div>

            <h3 className="mt-2 text-2xl font-bold">
              {data.total_views}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Download className="h-5 w-5 text-green-600" />

              <p className="text-sm text-gray-500">
                Total Downloads
              </p>

            </div>

            <h3 className="mt-2 text-2xl font-bold">
              {data.total_downloads}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <p className="text-sm text-gray-500">
              Most Viewed Book
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              {data.most_viewed_book || "-"}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <p className="text-sm text-gray-500">
              Most Downloaded Book
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              {data.most_downloaded_book || "-"}
            </h3>

          </div>

        </div>

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >

                {chartData.map((_, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>

  );

}