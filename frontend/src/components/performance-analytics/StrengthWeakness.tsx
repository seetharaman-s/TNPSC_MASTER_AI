"use client";

import {
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import {
  StrengthWeakness as StrengthWeaknessData,
} from "@/services/performanceAnalyticsService";

interface Props {
  data: StrengthWeaknessData;
}

interface ListCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  emptyMessage: string;
  iconColor: string;
  bgColor: string;
}

function ListCard({
  title,
  icon,
  items,
  emptyMessage,
  iconColor,
  bgColor,
}: ListCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className={`rounded-xl p-3 ${bgColor}`}>
          <div className={iconColor}>{icon}</div>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            AI-generated analysis
          </p>
        </div>

      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">
          {emptyMessage}
        </p>
      ) : (
        <ul className="space-y-4">

          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

              <span className="text-gray-700">
                {item}
              </span>
            </li>
          ))}

        </ul>
      )}

    </div>
  );
}

export default function StrengthWeakness({
  data,
}: Props) {
  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          Strengths & Weaknesses
        </h2>

        <p className="text-gray-500">
          AI analysis of your strongest and weakest
          learning areas.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <ListCard
          title="Strengths"
          icon={<ShieldCheck className="h-7 w-7" />}
          items={data.strengths}
          emptyMessage="No strengths identified yet."
          iconColor="text-green-600"
          bgColor="bg-green-100"
        />

        <ListCard
          title="Weaknesses"
          icon={<AlertTriangle className="h-7 w-7" />}
          items={data.weaknesses}
          emptyMessage="No weaknesses identified yet."
          iconColor="text-red-600"
          bgColor="bg-red-100"
        />

      </div>

      <div className="rounded-2xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-8 text-white shadow-lg">

        <div className="flex items-start gap-4">

          <TrendingUp className="mt-1 h-8 w-8" />

          <div>

            <h3 className="text-2xl font-bold">
              AI Improvement Strategy
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              Continue leveraging your strengths while
              dedicating extra study time to weaker
              subjects. Review mistakes regularly,
              practice topic-wise quizzes, and monitor
              your progress using weekly analytics to
              steadily improve your TNPSC performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}