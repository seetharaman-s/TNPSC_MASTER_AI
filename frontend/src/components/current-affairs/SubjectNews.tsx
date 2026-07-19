"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Newspaper,
} from "lucide-react";

import {
  SubjectWiseCurrentAffairs,
} from "@/services/currentAffairsService";

import NewsCard from "./NewsCard";

interface SubjectNewsProps {
  subjects: SubjectWiseCurrentAffairs[];
}

export default function SubjectNews({
  subjects,
}: SubjectNewsProps) {
  const [expandedSubjects, setExpandedSubjects] =
    useState<string[]>([]);

  const toggleSubject = (
    subject: string
  ) => {
    setExpandedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  if (subjects.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow">

        <Newspaper className="mx-auto mb-4 h-12 w-12 text-gray-400" />

        <h2 className="text-xl font-semibold">
          No Subject-wise News
        </h2>

        <p className="mt-2 text-gray-500">
          Subject-wise current affairs will appear here.
        </p>

      </div>
    );
  }

  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          Subject-wise Current Affairs
        </h2>

        <p className="text-gray-600">
          Browse current affairs organized by TNPSC
          subjects for efficient revision.
        </p>

      </div>

      {subjects.map((subject) => {
        const expanded = expandedSubjects.includes(
          subject.subject
        );

        return (
          <div
            key={subject.subject}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow"
          >

            {/* Header */}

            <button
              onClick={() =>
                toggleSubject(subject.subject)
              }
              className="flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left transition hover:bg-gray-100"
            >

              <div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {subject.subject}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {subject.articles.length} Articles
                </p>

              </div>

              {expanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}

            </button>

            {/* Articles */}

            {expanded && (

              <div className="grid gap-6 p-6 lg:grid-cols-2">

                {subject.articles.length === 0 ? (

                  <div className="col-span-full rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
                    No articles available.
                  </div>

                ) : (

                  subject.articles.map((article) => (

                    <NewsCard
                      key={article.id}
                      article={article}
                    />

                  ))

                )}

              </div>

            )}

          </div>
        );
      })}

    </section>
  );
}