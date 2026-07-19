"use client";

import { CurrentAffairsAnalytics as CurrentAffairsAnalyticsType } from "@/services/reportService";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { Newspaper, CalendarDays, Eye } from "lucide-react";

interface Props {
  data: CurrentAffairsAnalyticsType;
}

export default function CurrentAffairsAnalytics({
  data,
}: Props) {

  const chartData = [
    {
      name: "Published This Month",
      value: data.published_this_month,
    },
    {
      name: "Previous Articles",
      value:
        data.total_articles - data.published_this_month,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#14b8a6",
  ];

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Newspaper className="h-7 w-7 text-blue-600" />

        <h2 className="text-xl font-bold">

          Current Affairs Analytics

        </h2>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="space-y-4">

          <div className="rounded-xl border p-4">

            <p className="text-sm text-gray-500">
              Total Articles
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              {data.total_articles}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <CalendarDays className="h-5 w-5 text-indigo-600" />

              <p className="text-sm text-gray-500">
                Published This Month
              </p>

            </div>

            <h3 className="mt-2 text-2xl font-bold">
              {data.published_this_month}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Eye className="h-5 w-5 text-green-600" />

              <p className="text-sm text-gray-500">
                Total Views
              </p>

            </div>

            <h3 className="mt-2 text-2xl font-bold">
              {data.total_views}
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