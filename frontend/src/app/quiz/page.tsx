"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { QuizService } from "@/services/quizService";
import QuizTable from "@/components/admin/quiz/QuizTable";

export default function AdminQuizPage() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadQuizzes = async () => {
    try {
      setLoading(true);

      const res = await QuizService.getAll();

      setQuizzes(res.data.items ?? res.data);

      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load quizzes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuizzes();
  }, []);

  return (
    <main className="p-8 space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Quiz Management
          </h1>

          <p className="text-gray-500 mt-1">
            Create and manage TNPSC quizzes.
          </p>
        </div>

        <Link
          href="/admin/quizzes/create"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          + Create Quiz
        </Link>

      </div>

      {loading && (
        <div className="rounded-xl bg-white p-8 text-center shadow">
          Loading...
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && (
        <QuizTable
          quizzes={quizzes}
          onRefresh={loadQuizzes}
        />
      )}

    </main>
  );
}