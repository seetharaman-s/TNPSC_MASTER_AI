"use client";

import { SubjectProgress as SubjectProgressData } from "@/services/progressService";
import { BookOpen, Trophy } from "lucide-react";

interface Props {
  subjects: SubjectProgressData[];
}

export default function SubjectProgress({
  subjects,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <BookOpen className="h-7 w-7 text-blue-600" />
        <div>
          <h2 className="text-2xl font-bold">
            Subject Progress
          </h2>
          <p className="text-sm text-gray-500">
            Track your preparation subject-wise.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {subjects.map((subject) => (
          <div
            key={subject.subject}
            className="rounded-xl border p-5 transition hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {subject.subject}
                </h3>

                <p className="text-sm text-gray-500">
                  {subject.completed_topics} / {subject.total_topics} Topics Completed
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-yellow-50 px-3 py-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold">
                  {subject.average_score}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}

            <div className="mb-2 flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">
                {subject.progress}%
              </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-700"
                style={{
                  width: `${subject.progress}%`,
                }}
              />
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>
                Completed: {subject.completed_topics}
              </span>

              <span>
                Remaining:{" "}
                {subject.total_topics -
                  subject.completed_topics}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}"use client";

import { SubjectProgress as SubjectProgressData } from "@/services/progressService";
import { BookOpen, Trophy } from "lucide-react";

interface Props {
  subjects: SubjectProgressData[];
}

export default function SubjectProgress({
  subjects,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <BookOpen className="h-7 w-7 text-blue-600" />
        <div>
          <h2 className="text-2xl font-bold">
            Subject Progress
          </h2>
          <p className="text-sm text-gray-500">
            Track your preparation subject-wise.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {subjects.map((subject) => (
          <div
            key={subject.subject}
            className="rounded-xl border p-5 transition hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {subject.subject}
                </h3>

                <p className="text-sm text-gray-500">
                  {subject.completed_topics} / {subject.total_topics} Topics Completed
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-yellow-50 px-3 py-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold">
                  {subject.average_score}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}

            <div className="mb-2 flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">
                {subject.progress}%
              </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-700"
                style={{
                  width: `${subject.progress}%`,
                }}
              />
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>
                Completed: {subject.completed_topics}
              </span>

              <span>
                Remaining:{" "}
                {subject.total_topics -
                  subject.completed_topics}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}