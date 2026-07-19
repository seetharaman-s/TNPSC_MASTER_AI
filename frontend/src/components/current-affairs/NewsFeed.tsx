"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import {
  CurrentAffair,
} from "@/services/currentAffairsService";

import NewsCard from "./NewsCard";

interface NewsFeedProps {
  articles: CurrentAffair[];
}

export default function NewsFeed({
  articles,
}: NewsFeedProps) {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {
    const keyword = search.toLowerCase();

    return (
      article.title.toLowerCase().includes(keyword) ||
      article.category.toLowerCase().includes(keyword) ||
      article.content.toLowerCase().includes(keyword) ||
      (article.topic ?? "")
        .toLowerCase()
        .includes(keyword)
    );
  });

  const handleBookmark = (
    article: CurrentAffair
  ) => {
    console.log(
      "Bookmark:",
      article.id
    );

    // TODO:
    // Integrate Bookmark API
  };

  return (
    <section className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Latest Current Affairs
          </h2>

          <p className="text-gray-600">
            Stay updated with the latest
            TNPSC current affairs and important
            national & international news.
          </p>

        </div>

        <div className="relative w-full md:w-80">

          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search current affairs..."
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />

        </div>

      </div>

      {/* Empty State */}

      {filteredArticles.length === 0 && (

        <div className="rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center">

          <h3 className="text-lg font-semibold text-gray-700">
            No Articles Found
          </h3>

          <p className="mt-2 text-gray-500">
            Try another search keyword.
          </p>

        </div>

      )}

      {/* News Grid */}

      <div className="grid gap-6 lg:grid-cols-2">

        {filteredArticles.map((article) => (

          <NewsCard
            key={article.id}
            article={article}
            onBookmark={handleBookmark}
          />

        ))}

      </div>

    </section>
  );
}