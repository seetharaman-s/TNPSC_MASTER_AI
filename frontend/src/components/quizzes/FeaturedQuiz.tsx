"use client";

import Link from "next/link";
import { Clock, BookOpen, Star, ArrowRight } from "lucide-react";

interface Quiz {
  id: number;
  title: string;
  subject: string;
  description?: string;
  duration: number;
  total_questions: number;
  difficulty: string;
  featured?: boolean;
}

interface FeaturedQuizProps {
  quiz?: Quiz | null;
}

const difficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-green-100 text-green-700";

    case "hard":
      return "bg-red-100 text-red-700";

    default:
      return "bg-yellow-100 text-yellow-700";
  }
};

export default function FeaturedQuiz({
  quiz,
}: FeaturedQuizProps) {
  if (!quiz) return null;

  return (
    <section className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white p-8 shadow-xl">

      <div className="flex items-center gap-2 mb-4">

        <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />

        <span className="font-semibold tracking-wide">
          Featured Quiz
        </span>

      </div>

      <h2 className="text-3xl font-bold mb-3">
        {quiz.title}
      </h2>

      <p className="text-blue-100 max-w-3xl mb-6">
        {quiz.description ||
          "Practice with one of the best TNPSC quizzes specially selected for today's preparation."}
      </p>

      <div className="flex flex-wrap gap-4 mb-8">

        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
          <BookOpen size={18} />
          <span>{quiz.subject}</span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
          <Clock size={18} />
          <span>{quiz.duration} Minutes</span>
        </div>

        <div className="bg-white/10 rounded-xl px-4 py-2">
          {quiz.total_questions} Questions
        </div>

        <div
          className={`rounded-xl px-4 py-2 ${difficultyColor(
            quiz.difficulty
          )}`}
        >
          {quiz.difficulty}
        </div>

      </div>

      <Link
        href={`/quiz/${quiz.id}`}
        className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 font-semibold px-6 py-3 hover:bg-gray-100 transition"
      >
        Start Quiz

        <ArrowRight size={18} />
      </Link>

    </section>
  );
}