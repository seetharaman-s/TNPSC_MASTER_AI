"use client";

import { AlertTriangle, BookOpen } from "lucide-react";
import { WeakTopic } from "@/services/adaptiveLearningService";

interface Props {
  topics: WeakTopic[];
}

export default function WeakTopics({ topics }: Props) {
  function getConfidenceColor(confidence: number) {
    if (confidence < 50) {
      return {
        bg: "bg-red-500",
        light: "bg-red-100",
        text: "text-red-700",
      };
    }

    if (confidence < 75) {
      return {
        bg: "bg-yellow-500",
        light: "bg-yellow-100",
        text: "text-yellow-700",
      };
    }

    return {
      bg: "bg-green-500",
      light: "bg-green-100",
      text: "text-green-700",
    };
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <AlertTriangle className="h-7 w-7 text-red-600" />

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Weak Topics
          </h2>

          <p className="text-sm text-gray-500">
            AI has identified the areas that need additional practice.
          </p>
        </div>
      </div>

      {topics.length === 0 ? (
        <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
          <p className="font-medium text-green-700">
            🎉 Great job! No weak topics detected.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {topics.map((topic, index) => {
            const color = getConfidenceColor(topic.confidence);

            return (
              <div
                key={`${topic.subject}-${topic.topic}-${index}`}
                className="rounded-xl border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {topic.subject}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {topic.topic}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${color.light} ${color.text}`}
                  >
                    {topic.confidence}% Confidence
                  </span>
                </div>

                <div className="mb-4 h-3 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ${color.bg}`}
                    style={{
                      width: `${topic.confidence}%`,
                    }}
                  />
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-700">
                    Recommended Action
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {topic.recommended_action}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}