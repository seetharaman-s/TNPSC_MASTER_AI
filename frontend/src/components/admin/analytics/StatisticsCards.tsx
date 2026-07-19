"use client";

import {
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  Users,
  Eye,
} from "lucide-react";

const stats = [
  {
    title: "Books",
    value: 256,
    icon: BookOpen,
  },
  {
    title: "Notes",
    value: 845,
    icon: FileText,
  },
  {
    title: "Current Affairs",
    value: 412,
    icon: Newspaper,
  },
  {
    title: "Quizzes",
    value: 175,
    icon: ClipboardList,
  },
  {
    title: "Users",
    value: 12458,
    icon: Users,
  },
  {
    title: "Daily Visits",
    value: 863,
    icon: Eye,
  },
];

export default function StatisticsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-6 shadow"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>

              </div>

              <Icon className="text-blue-600" size={30} />

            </div>

          </div>
        );

      })}

    </div>
  );
}