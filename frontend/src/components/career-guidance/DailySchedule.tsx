"use client";

import {
  CalendarClock,
  Coffee,
  BookOpen,
  Clock3,
} from "lucide-react";

interface ScheduleItem {
  id: number;
  startTime: string;
  endTime: string;
  title: string;
  subject: string;
  type: "study" | "break";
}

interface Props {
  schedule: ScheduleItem[];
}

export default function DailySchedule({
  schedule,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <CalendarClock className="h-7 w-7 text-blue-600" />

        <div>
          <h2 className="text-2xl font-bold">
            Daily Study Schedule
          </h2>

          <p className="text-gray-500">
            Follow your recommended study timeline for maximum productivity.
          </p>
        </div>
      </div>

      {/* Timeline */}

      <div className="relative space-y-6 border-l-2 border-blue-200 pl-6">

        {schedule.map((item) => (
          <div
            key={item.id}
            className="relative"
          >
            {/* Timeline Dot */}

            <div
              className={`absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full ${
                item.type === "study"
                  ? "bg-blue-600"
                  : "bg-green-500"
              }`}
            >
              {item.type === "study" ? (
                <BookOpen className="h-3.5 w-3.5 text-white" />
              ) : (
                <Coffee className="h-3.5 w-3.5 text-white" />
              )}
            </div>

            {/* Card */}

            <div className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {item.subject}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2">
                  <Clock3 className="h-4 w-4 text-gray-600" />

                  <span className="font-medium">
                    {item.startTime} - {item.endTime}
                  </span>
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="mb-2 font-semibold text-blue-700">
          Productivity Tip
        </h3>

        <p className="text-gray-700">
          Study for <strong>50–60 minutes</strong> followed by a
          <strong> 5–10 minute break</strong>. Schedule more demanding
          subjects during your peak concentration hours.
        </p>
      </div>

    </div>
  );
}