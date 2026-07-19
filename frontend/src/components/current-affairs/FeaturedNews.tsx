"use client";

import React from "react";
import { CurrentAffair } from "@/services/currentAffairsService";

interface FeaturedNewsProps {
  articles: CurrentAffair[];
  onReadMore?: (article: CurrentAffair) => void;
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({
  articles,
  onReadMore,
}) => {
  if (!articles.length) {
    return (
      <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-8 text-center text-gray-500">
        No featured current affairs available.
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            ⭐ Featured Current Affairs
          </h2>

          <p className="text-gray-500 mt-1">
            Important topics for TNPSC preparation
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {articles.map((article) => (
          <div
            key={article.id}
            className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border hover:shadow-xl transition-all"
          >
            {article.image_url ? (
              <img
                src={article.image_url}
                alt={article.title}
                className="h-56 w-full object-cover"
              />
            ) : (
              <div className="h-56 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold">
                TNPSC MASTER AI
              </div>
            )}

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold">
                  FEATURED
                </span>

                <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold">
                  {article.category}
                </span>

                {article.topic && (
                  <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                    {article.topic}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold leading-7">
                {article.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 line-clamp-4">
                {article.content}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <span>{article.publish_date}</span>

                <span>👁 {article.views}</span>
              </div>

              {onReadMore && (
                <button
                  onClick={() => onReadMore(article)}
                  className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;