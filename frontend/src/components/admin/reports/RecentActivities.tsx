"use client";

import { RecentActivity } from "@/services/reportService";
import {
  Activity,
  Clock,
} from "lucide-react";

interface Props {
  activities: RecentActivity[];
}

export default function RecentActivities({
  activities,
}: Props) {

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Activity className="h-7 w-7 text-blue-600" />

        <h2 className="text-xl font-bold">

          Recent Activities

        </h2>

      </div>

      {activities.length === 0 ? (

        <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">

          No recent activities found.

        </div>

      ) : (

        <div className="max-h-[500px] space-y-4 overflow-y-auto pr-2">

          {activities.map((activity, index) => (

            <div
              key={`${activity.created_at}-${index}`}
              className="flex items-start gap-4 rounded-xl border p-4 transition hover:bg-gray-50"
            >

              <div className="mt-1 rounded-full bg-blue-100 p-2">

                <Activity className="h-5 w-5 text-blue-600" />

              </div>

              <div className="flex-1">

                <h3 className="font-semibold">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {activity.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">

                  <Clock className="h-4 w-4" />

                  <span>{activity.created_at}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}