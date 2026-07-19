"use client";

import React from "react";
import { CurrentAffair } from "@/services/currentAffairsService";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  articles: CurrentAffair[];
  loading?: boolean;
  emptyMessage?: string;
  onReadMore?: (article: CurrentAffair) => void;
}

const NewsGrid: React.FC<NewsGridProps> = ({
  articles,
  loading = false,
  emptyMessage = "No current affairs available.",
  onReadMore,
}) => {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-xl border bg-white dark:bg-slate-900 p-5 shadow"
          >
            <div className="h-40 rounded-lg bg-slate-200 dark:bg-slate-700" />

            <div className="mt-4 h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mt-2 h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mt-6 h-10 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="rounded-xl border bg-white dark:bg-slate-900 p-10 text-center shadow">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {emptyMessage}
        </h3>

        <p className="mt-2 text-gray-500">
          Try changing the search keyword or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          onReadMore={onReadMore}
        />
      ))}
    </div>
  );
};

export default NewsGrid;