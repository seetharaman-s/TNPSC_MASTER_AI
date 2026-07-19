"use client";

import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  HelpCircle,
  Target,
} from "lucide-react";

import { PerformanceOverview as Overview } from "@/services/performanceAnalyticsService";

interface Props {
  overview: Overview;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

function MetricCard({
  title,
  value,
  icon,
  color,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

        </div>

        <div
          className={`rounded-2xl p-4 ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
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

export default function PerformanceOverview({
  overview,
}: Props) {

  const accuracy =
    overview.average_accuracy;

  const score =
    overview.overall_score;

  const completion =
    overview.tests_completed >= 100
      ? 100
      : overview.tests_completed;

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          Performance Overview
        </h2>

        <p className="text-gray-500">
          Comprehensive statistics of your TNPSC
          preparation.
        </p>

      </div>

      {/* Metric Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <MetricCard
          title="Overall Score"
          value={`${overview.overall_score}%`}
          color="bg-blue-100 text-blue-600"
          icon={<Award className="h-7 w-7" />}
        />

        <MetricCard
          title="Average Accuracy"
          value={`${overview.average_accuracy}%`}
          color="bg-green-100 text-green-600"
          icon={<Target className="h-7 w-7" />}
        />

        <MetricCard
          title="Tests Completed"
          value={overview.tests_completed}
          color="bg-purple-100 text-purple-600"
          icon={<BookOpen className="h-7 w-7" />}
        />

        <MetricCard
          title="Questions Attempted"
          value={overview.questions_attempted}
          color="bg-orange-100 text-orange-600"
          icon={<HelpCircle className="h-7 w-7" />}
        />

        <MetricCard
          title="Correct Answers"
          value={overview.questions_correct}
          color="bg-emerald-100 text-emerald-600"
          icon={<CheckCircle className="h-7 w-7" />}
        />

        <MetricCard
          title="Study Hours"
          value={overview.total_study_hours}
          color="bg-cyan-100 text-cyan-600"
          icon={<Clock className="h-7 w-7" />}
        />

      </div>

      {/* Progress Section */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-xl font-semibold">
          Performance Indicators
        </h3>

        <div className="space-y-6">

          <ProgressBar
            label="Overall Score"
            value={score}
            color="bg-blue-600"
          />

          <ProgressBar
            label="Average Accuracy"
            value={accuracy}
            color="bg-green-600"
          />

          <ProgressBar
            label="Test Completion"
            value={completion}
            color="bg-purple-600"
          />

                    <ProgressBar
            label="Correct Answers"
            value={
              overview.questions_attempted > 0
                ? Math.round(
                    (overview.questions_correct /
                      overview.questions_attempted) *
                      100
                  )
                : 0
            }
            color="bg-emerald-600"
          />

        </div>

      </div>

      {/* Performance Summary */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* AI Evaluation */}

        <div className="rounded-2xl border bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg">

          <h3 className="mb-5 text-2xl font-bold">
            AI Evaluation
          </h3>

          <p className="leading-7 text-blue-100">
            Based on your current performance,
            your preparation is progressing
            consistently. Continue maintaining
            regular practice and revision to
            improve your predicted TNPSC rank.
          </p>

          <div className="mt-6 rounded-xl bg-white/10 p-4">

            <p className="text-sm uppercase tracking-wide text-blue-200">
              Current Performance
            </p>

            <p className="mt-2 text-4xl font-bold">
              {overview.overall_score}%
            </p>

          </div>

        </div>

        {/* Preparation Tips */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h3 className="mb-5 text-2xl font-bold">
            Preparation Tips
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-start gap-3">

              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />

              <span>
                Attempt one full-length mock test
                every week.
              </span>

            </li>

            <li className="flex items-start gap-3">

              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />

              <span>
                Revise weak subjects before
                learning new topics.
              </span>

            </li>

            <li className="flex items-start gap-3">

              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />

              <span>
                Maintain consistent study hours
                daily.
              </span>

            </li>

            <li className="flex items-start gap-3">

              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />

              <span>
                Improve accuracy before attempting
                additional questions.
              </span>

            </li>

            <li className="flex items-start gap-3">

              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />

              <span>
                Review incorrect answers after
                every practice test.
              </span>

            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}