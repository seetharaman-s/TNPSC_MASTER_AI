"use client";

import Link from "next/link";
import { Clock3, Brain } from "lucide-react";

export default function QuizCard({ quiz }: { quiz: any }) {
  return (
    <Link
      href={`/quiz/${quiz.id}`}
      className="bg-white rounded-2xl shadow hover:shadow-xl transition p-5"
    >
      <div className="flex justify-between">

        <Brain className="text-blue-600" />

        <span className="text-sm bg-blue-100 px-3 py-1 rounded-full">
          {quiz.subject}
        </span>

      </div>

      <h2 className="font-bold text-lg mt-4">
        {quiz.title}
      </h2>

      <div className="flex justify-between mt-6 text-gray-500">

        <span>{quiz.questions} Questions</span>

        <span className="flex items-center gap-2">
          <Clock3 size={16}/>
          {quiz.duration} min
        </span>

      </div>
    </Link>
  );
}