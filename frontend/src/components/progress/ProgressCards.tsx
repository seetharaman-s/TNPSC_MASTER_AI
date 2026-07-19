"use client";

import {
  BookOpen,
  Target,
  Trophy,
  Flame,
} from "lucide-react";

import { ProgressOverview } from "@/services/progressService";

interface Props {
  overview: ProgressOverview;
}

export default function ProgressCards({
  overview,
}: Props) {
  const cards = [
    {
      title: "Overall Progress",
      value: `${overview.overall_progress}%`,
      icon: (
        <Target className="h-8 w-8 text-blue-600" />
      ),
      color: "bg-blue-50",
    },
    {
      title: "Average Score",
      value: `${overview.average_score}%`,
      icon: (
        <Trophy className="h-8 w-8 text-yellow-600" />
      ),
      color: "bg-yellow-50",
    },
    {
      title: "Chapters Completed",
      value: overview.chapters_completed,
      icon: (
        <BookOpen className="h-8 w-8 text-green-600" />
      ),
      color: "bg-green-50",
    },
    {
      title: "Current Streak",
      value: `${overview.current_streak} Days`,
      icon: (
        <Flame className="h-8 w-8 text-red-600" />
      ),
      color: "bg-red-50",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {card.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                {card.value}
              </h3>
            </div>

            <div
              className={`rounded-xl p-3 ${card.color}`}
            >
              {card.icon}
            </div>
          </div>

          {card.title === "Overall Progress" && (
            <div className="mt-6">
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-600 transition-all duration-700"
                  style={{
                    width: `${overview.overall_progress}%`,
                  }}
                />
              </div>
            </div>
          )}

          {card.title === "Average Score" && (
            <div className="mt-6">
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-yellow-500 transition-all duration-700"
                  style={{
                    width: `${overview.average_score}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}