"use client";

import { Calendar, Eye, ExternalLink, Star, Tag } from "lucide-react";

import { CurrentAffair } from "@/services/currentAffairsService";

interface NewsCardProps {
  article: CurrentAffair;
  onReadMore?: (article: CurrentAffair) => void;
  onBookmark?: (article: CurrentAffair) => void;
}

export default function NewsCard({
  article,
  onReadMore,
  onBookmark,
}: NewsCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}

      <div className="mb-4 flex items-start justify-between gap-4">

        <div className="flex-1">

          <div className="mb-2 flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {article.category}
            </span>

            {article.topic && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                {article.topic}
              </span>
            )}

            {article.featured && (
              <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </span>
            )}

          </div>

          <h2 className="text-xl font-bold text-gray-900">
            {article.title}
          </h2>

        </div>

      </div>

      {/* Content */}

      <p className="mb-5 line-clamp-4 text-gray-700">
        {article.content}
      </p>

      {/* Metadata */}

      <div className="mb-5 grid gap-3 text-sm text-gray-500 md:grid-cols-2">

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(article.publish_date).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          {article.views} Views
        </div>

        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4" />
          {article.language}
        </div>

        <div className="truncate">
          Source:
          <span className="ml-1 font-medium">
            {article.source ?? "N/A"}
          </span>
        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() => onReadMore?.(article)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Read More
        </button>

        <button
          onClick={() => onBookmark?.(article)}
          className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100"
        >
          Bookmark
        </button>

        {article.pdf_url && (
          <a
            href={article.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-green-300 px-4 py-2 text-green-700 transition hover:bg-green-50"
          >
            PDF
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

      </div>

    </div>
  );
}