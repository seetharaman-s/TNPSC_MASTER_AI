"use client";

import QuizCard from "./QuizCard";

export default function QuizGrid({
  quizzes,
}: {
  quizzes: any[];
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {quizzes.map((quiz) => (

        <QuizCard
          key={quiz.id}
          quiz={quiz}
        />

      ))}

    </div>
  );
}