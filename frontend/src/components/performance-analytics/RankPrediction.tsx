"use client";

import {
  Award,
  BarChart3,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

import {
  RankPrediction as RankPredictionData,
} from "@/services/performanceAnalyticsService";

interface Props {
  prediction: RankPredictionData;
}

export default function RankPrediction({
  prediction,
}: Props) {
  const probability = Math.min(
    prediction.selection_probability,
    100
  );

  const chartData = [
    {
      name: "Selection",
      value: probability,
      fill: "#2563eb",
    },
  ];

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          AI Rank Prediction
        </h2>

        <p className="text-gray-500">
          Estimated TNPSC performance based on your
          learning history and AI analytics.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Probability Chart */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <h3 className="mb-4 text-lg font-semibold">
            Selection Probability
          </h3>

          <div className="h-[280px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={chartData}
                startAngle={90}
                endAngle={-270}
              >

                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  tick={false}
                />

                <RadialBar
                  dataKey="value"
                  cornerRadius={12}
                />

              </RadialBarChart>

            </ResponsiveContainer>

          </div>

          <div className="text-center">

            <h3 className="text-4xl font-bold text-blue-600">
              {probability}%
            </h3>

            <p className="mt-2 text-gray-500">
              Chance of Selection
            </p>

          </div>

        </div>

        {/* Prediction Details */}

        <div className="space-y-4">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <Target className="h-7 w-7 text-blue-600" />

              <div>

                <p className="text-sm text-gray-500">
                  Predicted Score
                </p>

                <h3 className="text-2xl font-bold">
                  {prediction.predicted_score}
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <Award className="h-7 w-7 text-green-600" />

              <div>

                <p className="text-sm text-gray-500">
                  District Rank
                </p>

                <h3 className="text-2xl font-bold">
                  {prediction.predicted_district_rank ?? "-"}
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <BarChart3 className="h-7 w-7 text-purple-600" />

              <div>

                <p className="text-sm text-gray-500">
                  State Rank
                </p>

                <h3 className="text-2xl font-bold">
                  {prediction.predicted_state_rank ?? "-"}
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-lg">

            <div className="flex items-center gap-3">

              <TrendingUp className="h-8 w-8" />

              <div>

                <h3 className="text-xl font-bold">
                  AI Suggestion
                </h3>

                <p className="mt-2 text-blue-100 leading-7">
                  Continue improving your weak
                  subjects and maintain consistent
                  mock test performance to increase
                  your predicted selection
                  probability.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}