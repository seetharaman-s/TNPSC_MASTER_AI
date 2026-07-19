"use client";

import {
  Brain,
  BookOpen,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import {
  AITrendAnalysis,
} from "@/services/currentAffairsService";

interface TrendAnalysisProps {
  analysis: AITrendAnalysis;
}

export default function TrendAnalysis({
  analysis,
}: TrendAnalysisProps) {
  return (
    <section className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          AI Trend Analysis
        </h2>

        <p className="text-gray-600">
          AI-powered insights based on recent TNPSC
          current affairs and important examination
          trends.
        </p>

      </div>

      {/* Dashboard */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Trending Topics */}

        <div className="rounded-xl bg-white p-6 shadow">

          <div className="mb-5 flex items-center gap-3">

            <TrendingUp className="h-7 w-7 text-green-600" />

            <h3 className="text-lg font-semibold">
              Trending Topics
            </h3>

          </div>

          <div className="flex flex-wrap gap-2">

            {analysis.trending_topics.length === 0 ? (

              <p className="text-gray-500">
                No trends available.
              </p>

            ) : (

              analysis.trending_topics.map(
                (topic, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-700"
                  >
                    #{topic}
                  </span>
                )
              )

            )}

          </div>

        </div>

        {/* AI Recommendation */}

        <div className="rounded-xl bg-white p-6 shadow">

          <div className="mb-5 flex items-center gap-3">

            <Brain className="h-7 w-7 text-blue-600" />

            <h3 className="text-lg font-semibold">
              AI Recommendation
            </h3>

          </div>

          <div className="rounded-lg bg-blue-50 p-4">

            <p className="leading-7 text-gray-700">
              {analysis.recommendation}
            </p>

          </div>

        </div>

        {/* Expected Questions */}

        <div className="rounded-xl bg-white p-6 shadow">

          <div className="mb-5 flex items-center gap-3">

            <Sparkles className="h-7 w-7 text-purple-600" />

            <h3 className="text-lg font-semibold">
              Expected Questions
            </h3>

          </div>

          {analysis.expected_questions.length === 0 ? (

            <p className="text-gray-500">
              No predicted questions available.
            </p>

          ) : (

            <ul className="space-y-3">

              {analysis.expected_questions.map(
                (question, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-purple-100 bg-purple-50 p-3"
                  >

                    <BookOpen className="mt-0.5 h-5 w-5 text-purple-600" />

                    <span className="text-gray-700">
                      {question}
                    </span>

                  </li>

                )
              )}

            </ul>

          )}

        </div>

      </div>

      {/* Study Tip */}

      <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-6">

        <h3 className="font-semibold text-yellow-800">
          AI Study Tip
        </h3>

        <p className="mt-2 text-gray-700">
          Revise the trending topics first, then
          practice the expected questions and finish
          with a short self-test. This improves
          retention and helps you focus on the areas
          most likely to appear in the TNPSC exam.
        </p>

      </div>

    </section>
  );
}