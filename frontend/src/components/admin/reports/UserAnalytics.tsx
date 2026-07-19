"use client";

import { UserAnalytics as UserAnalyticsType } from "@/services/reportService";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  data: UserAnalyticsType;
}

export default function UserAnalytics({ data }: Props) {

  const chartData = [
    {
      name: "Active",
      value: data.active_users,
    },
    {
      name: "Inactive",
      value: data.inactive_users,
    },
    {
      name: "Verified",
      value: data.verified_users,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
  ];

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">

        User Analytics

      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <div className="space-y-4">

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">Active Users</p>
            <h3 className="text-2xl font-bold">
              {data.active_users}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">Inactive Users</p>
            <h3 className="text-2xl font-bold">
              {data.inactive_users}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">Verified Users</p>
            <h3 className="text-2xl font-bold">
              {data.verified_users}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">Admin Users</p>
            <h3 className="text-2xl font-bold">
              {data.admin_users}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">Student Users</p>
            <h3 className="text-2xl font-bold">
              {data.student_users}
            </h3>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-gray-500">
              New Users This Month
            </p>
            <h3 className="text-2xl font-bold">
              {data.new_users_this_month}
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
                outerRadius={110}
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