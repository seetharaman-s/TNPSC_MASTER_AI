"use client";

import { AchievementBadge } from "@/services/progressService";
import {
  Trophy,
  Lock,
  CheckCircle2,
} from "lucide-react";

interface Props {
  achievements: AchievementBadge[];
}

export default function AchievementBadges({
  achievements,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <Trophy className="h-8 w-8 text-yellow-600" />

        <div>

          <h2 className="text-2xl font-bold">

            Achievement Badges

          </h2>

          <p className="text-gray-500">

            Celebrate your learning milestones.

          </p>

        </div>

      </div>

      {/* Badge Grid */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {achievements.map((badge) => (

          <div
            key={badge.id}
            className={`rounded-2xl border p-6 transition hover:shadow-lg ${
              badge.unlocked
                ? "border-green-200 bg-green-50"
                : "border-gray-200 bg-gray-50 opacity-80"
            }`}
          >

            <div className="flex items-center justify-between">

              <div className="text-5xl">

                {badge.icon}

              </div>

              {badge.unlocked ? (

                <CheckCircle2 className="h-7 w-7 text-green-600" />

              ) : (

                <Lock className="h-7 w-7 text-gray-400" />

              )}

            </div>

            <h3 className="mt-5 text-xl font-bold">

              {badge.title}

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              {badge.description}

            </p>

            <div className="mt-6">

              {badge.unlocked ? (

                <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                  Unlocked

                </span>

              ) : (

                <span className="inline-flex rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">

                  Locked

                </span>

              )}

            </div>

          </div>

        ))}

      </div>

      {achievements.length === 0 && (

        <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">

          No achievements yet. Complete quizzes and study regularly to unlock badges!

        </div>

      )}

    </div>
  );
}