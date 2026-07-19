"use client";

import { useEffect, useMemo, useState } from "react";

import {
  CurrentAffairsAPI,
  Dashboard,
  CurrentAffair,
} from "@/lib/api/current-affairs";

export default function CurrentAffairsPage() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [filteredArticles, setFilteredArticles] = useState<
    CurrentAffair[]
  >([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const data = await CurrentAffairsAPI.dashboard();

      setDashboard(data);

      setFilteredArticles(data.latest_articles);
    } catch (err) {
      console.error(err);
      setError("Unable to load Current Affairs.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!dashboard) return;

    let articles = [...dashboard.latest_articles];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      articles = articles.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.content.toLowerCase().includes(keyword) ||
          item.category.toLowerCase().includes(keyword)
      );
    }

    if (category) {
      articles = articles.filter(
        (item) => item.category === category
      );
    }

    setFilteredArticles(articles);

  }, [dashboard, search, category]);

  const categories = useMemo(() => {

    if (!dashboard) return [];

    return Array.from(
      new Set(
        dashboard.latest_articles.map(
          (item) => item.category
        )
      )
    );

  }, [dashboard]);

  if (loading) {

    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading Current Affairs...
      </div>
    );

  }

  if (error || !dashboard) {

    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error}
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">

      {/* Header */}

      <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold">
            TNPSC Current Affairs
          </h1>

          <p className="mt-3 text-blue-100">

            Daily Current Affairs • Quiz • One Liner • AI Analysis

          </p>

        </div>

      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Dashboard */}

        <section>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <SummaryCard
              title="Total Articles"
              value={dashboard.summary.total_articles}
            />

            <SummaryCard
              title="Featured"
              value={dashboard.summary.featured_articles}
            />

            <SummaryCard
              title="Active"
              value={dashboard.summary.active_articles}
            />

            <SummaryCard
              title="Views"
              value={dashboard.summary.total_views}
            />

          </div>

        </section>

        {/* Search */}

        <section className="mt-8">

          <div className="grid gap-4 md:grid-cols-2">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search current affairs..."
              className="rounded-lg border px-4 py-3 dark:bg-slate-900"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border px-4 py-3 dark:bg-slate-900"
            >

              <option value="">
                All Categories
              </option>

              {categories.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>

        </section>

        {/* Featured Articles */}

                <section className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            ⭐ Featured Current Affairs
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">

            {dashboard.featured_articles.length > 0 ? (
              dashboard.featured_articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  featured
                />
              ))
            ) : (
              <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6 text-gray-500">
                No featured articles available.
              </div>
            )}

          </div>

        </section>

        {/* Latest Articles */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold mb-5">
            📰 Latest Current Affairs
          </h2>

          <div className="grid gap-6">

            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))
            ) : (
              <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6 text-gray-500">
                No articles found.
              </div>
            )}

          </div>

        </section>

        {/* Subject Wise */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            📚 Subject Wise Current Affairs
          </h2>

          <div className="space-y-8">

            {dashboard.subject_wise_news.map((subject) => (

              <div
                key={subject.subject}
                className="rounded-xl bg-white dark:bg-slate-900 shadow p-6"
              >

                <h3 className="text-xl font-semibold text-blue-600 mb-5">
                  {subject.subject}
                </h3>

                <div className="grid gap-4">

                  {subject.articles.map((article: CurrentAffair) => (

                    <ArticleMiniCard
                      key={article.id}
                      article={article}
                    />

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* One Liner Revision */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold mb-5">
            🎯 One-Liner Revision
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">

            {dashboard.one_liners.map((item) => (

              <div
                key={item.id}
                className="rounded-xl bg-yellow-50 dark:bg-slate-900 border-l-4 border-yellow-500 p-5"
              >

                <span className="inline-block text-xs font-semibold text-blue-600 uppercase">
                  {item.category}
                </span>

                <p className="mt-3 leading-7">
                  {item.fact}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Daily Quiz */}

                <section className="mt-12">

          <h2 className="text-2xl font-bold mb-5">
            ❓ Daily Quiz
          </h2>

          <div className="space-y-6">

            {dashboard.daily_quiz.map((quiz) => (

              <div
                key={quiz.id}
                className="rounded-xl bg-white dark:bg-slate-900 shadow p-6"
              >

                <h3 className="text-lg font-semibold">
                  {quiz.question}
                </h3>

                <div className="grid gap-3 mt-5">

                  {quiz.options.map((option: string) => (

                    <button
                      key={option}
                      className="rounded-lg border px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-slate-800 transition"
                    >
                      {option}
                    </button>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* AI Trend Analysis */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold mb-5">
            📈 AI Trend Analysis
          </h2>

          <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">

            <h3 className="font-semibold text-lg">
              Recommendation
            </h3>

            <p className="mt-3">
              {dashboard.trend_analysis.recommendation}
            </p>

            <h3 className="font-semibold text-lg mt-8">
              Trending Topics
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">

              {dashboard.trend_analysis.trending_topics.map(
                (topic: string) => (

                  <span
                    key={topic}
                    className="rounded-full bg-blue-100 dark:bg-slate-700 px-4 py-2 text-sm"
                  >
                    {topic}
                  </span>

                )
              )}

            </div>

            <h3 className="font-semibold text-lg mt-8">
              Expected Questions
            </h3>

            <ul className="list-disc ml-6 mt-3 space-y-2">

              {dashboard.trend_analysis.expected_questions.map(
                (question: string) => (

                  <li key={question}>
                    {question}
                  </li>

                )
              )}

            </ul>

          </div>

        </section>

      </main>

      <footer className="mt-16 border-t bg-white dark:bg-slate-900">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} TNPSC MASTER AI • Current Affairs Dashboard

        </div>

      </footer>

    </div>

  );
}

type SummaryCardProps = {
  title: string;
  value: number;
};

function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}

type ArticleCardProps = {
  article: CurrentAffair;
  featured?: boolean;
};

function ArticleCard({
  article,
  featured = false,
}: ArticleCardProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">

      {featured && (
        <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
          FEATURED
        </span>
      )}

      <h3 className="text-xl font-semibold">
        {article.title}
      </h3>

      <div className="flex gap-3 mt-3 text-sm text-gray-500">

        <span>{article.category}</span>

        <span>•</span>

        <span>{article.publish_date}</span>

      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300 line-clamp-4">
        {article.content}
      </p>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-xs text-blue-600">
          {article.topic}
        </span>

        <span className="text-xs text-gray-500">
          👁 {article.views}
        </span>

      </div>

    </div>
  );
}

type MiniProps = {
  article: CurrentAffair;
};

function ArticleMiniCard({
  article,
}: MiniProps) {
  return (
    <div className="border rounded-lg p-4 hover:border-blue-500 transition">

      <h4 className="font-semibold">
        {article.title}
      </h4>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {article.content}
      </p>

      <div className="mt-3 flex justify-between text-xs text-gray-500">

        <span>{article.category}</span>

        <span>{article.publish_date}</span>

      </div>

    </div>
  );
}