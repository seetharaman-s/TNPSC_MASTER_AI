"use client";

import {
  Clock,
  Timer,
  CalendarDays,
  Zap,
} from "lucide-react";

import { TimeAnalysis as TimeAnalysisData } from "@/services/performanceAnalyticsService";

interface Props {
  analysis: TimeAnalysisData;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {value}
          </h3>

        </div>

        <div className={`rounded-xl p-4 ${color}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}

interface ProgressProps {
  label: string;
  value: number;
  color: string;
}

function ProgressBar({
  label,
  value,
  color,
}: ProgressProps) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between text-sm">

        <span className="font-medium">
          {label}
        </span>

        <span>{value}%</span>

      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">

        <div
          className={`h-3 rounded-full transition-all duration-700 ${color}`}
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />

      </div>

    </div>
  );
}

export default function TimeAnalysis({
  analysis,
}: Props) {

  const studyConsistency = Math.min(
    Math.round((analysis.daily_study_hours / 8) * 100),
    100
  );

  const weeklyProgress = Math.min(
    Math.round((analysis.weekly_study_hours / 56) * 100),
    100
  );

  const speedScore = Math.max(
    100 - analysis.average_time_per_question,
    0
  );

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          Time Analysis
        </h2>

        <p className="text-gray-500">
          Analyze your study time and question-solving efficiency.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <StatCard
          title="Average Time / Question"
          value={`${analysis.average_time_per_question} sec`}
          color="bg-blue-100 text-blue-600"
          icon={<Timer className="h-7 w-7" />}
        />

        <StatCard
          title="Daily Study Hours"
          value={`${analysis.daily_study_hours} hrs`}
          color="bg-green-100 text-green-600"
          icon={<Clock className="h-7 w-7" />}
        />

        <StatCard
          title="Weekly Study Hours"
          value={`${analysis.weekly_study_hours} hrs`}
          color="bg-orange-100 text-orange-600"
          icon={<CalendarDays className="h-7 w-7" />}
        />

        <StatCard
          title="Fastest Subject"
          value={analysis.fastest_subject}
          color="bg-purple-100 text-purple-600"
          icon={<Zap className="h-7 w-7" />}
        />

      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-xl font-semibold">
          Study Efficiency
        </h3>

        <div className="space-y-6">

          <ProgressBar
            label="Daily Study Consistency"
            value={studyConsistency}
            color="bg-blue-600"
          />

          <ProgressBar
            label="Weekly Target Progress"
            value={weeklyProgress}
            color="bg-green-600"
          />

          <ProgressBar
            label="Question Solving Speed"
            value={speedScore}
            color="bg-orange-600"
          />

        </div>

      </div>

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">

        <h3 className="mb-4 text-2xl font-bold">
          AI Time Insights
        </h3>

        <ul className="space-y-3 text-blue-100">

          <li>
            • Fastest Subject:
            <strong className="ml-1 text-white">
              {analysis.fastest_subject}
            </strong>
          </li>

          <li>
            • Slowest Subject:
            <strong className="ml-1 text-white">
              {analysis.slowest_subject}
            </strong>
          </li>

          <li>
            • Maintain at least{" "}
            <strong className="text-white">
              6–8 hours
            </strong>{" "}
            of focused study each day.
          </li>

          <li>
            • Practice timed mock tests to improve speed and accuracy.
          </li>

          <li>
            • Spend additional revision time on slower subjects.
          </li>

        </ul>

      </div>

    </section>
  );
}