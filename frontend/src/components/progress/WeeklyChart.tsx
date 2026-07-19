"use client";

import { WeeklyStudy } from "@/services/progressService";
import { CalendarDays, Clock, ClipboardCheck } from "lucide-react";

interface Props {
  data: WeeklyStudy[];
}

export default function WeeklyChart({ data }: Props) {
  const maxHours =
    Math.max(...data.map((d) => d.study_hours), 1);

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <CalendarDays className="h-7 w-7 text-blue-600" />

        <div>

          <h2 className="text-2xl font-bold">

            Weekly Study Analytics

          </h2>

          <p className="text-sm text-gray-500">

            Your study hours and quiz activity for the week

          </p>

        </div>

      </div>

      {/* Chart */}

      <div className="grid grid-cols-7 gap-4">

        {data.map((item) => {

          const height = (item.study_hours / maxHours) * 180;

          return (

            <div
              key={item.day}
              className="flex flex-col items-center"
            >

              <div className="mb-3 flex h-52 items-end">

                <div
                  className="w-12 rounded-t-xl bg-blue-600 transition-all duration-700 hover:bg-blue-700"
                  style={{
                    height: `${height}px`,
                  }}
                />

              </div>

              <span className="font-semibold">

                {item.day}

              </span>

            </div>

          );

        })}

      </div>

      {/* Details */}

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {data.map((item) => (

          <div
            key={`${item.day}-details`}
            className="rounded-xl border p-4 hover:shadow-md transition"
          >

            <h3 className="mb-3 font-bold">

              {item.day}

            </h3>

            <div className="space-y-2">

              <div className="flex items-center gap-2">

                <Clock className="h-4 w-4 text-blue-600" />

                <span>

                  {item.study_hours} Hours

                </span>

              </div>

              <div className="flex items-center gap-2">

                <ClipboardCheck className="h-4 w-4 text-green-600" />

                <span>

                  {item.quizzes_completed} Quizzes

                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}