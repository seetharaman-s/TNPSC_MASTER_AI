"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  QuizHeader,
  QuestionCard,
  Timer,
  Navigation,
  QuestionPalette,
  SubmitDialog,
} from "@/components/quizzes";

import { QuizService } from "@/services/quizService";

export default function QuizAttemptPage() {
  const { id } = useParams();

  const [quiz, setQuiz] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!id) return;

    QuizService.getById(Number(id))
      .then((res) => setQuiz(res.data))
      .catch(console.error);
  }, [id]);

  if (!quiz) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Quiz...
      </div>
    );
  }

  const question = quiz.questions[current];

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-6">

        <div className="flex justify-between items-center mb-6">

          <QuizHeader
            title={quiz.title}
            current={current + 1}
            total={quiz.questions.length}
          />

          <Timer minutes={quiz.duration} />

        </div>

        <div className="grid lg:grid-cols-4 gap-6">

          <div className="lg:col-span-3">

            <QuestionCard
              question={question}
              selected={answers[current]}
              onSelect={(answer: string) =>
                setAnswers({
                  ...answers,
                  [current]: answer,
                })
              }
            />

            <Navigation
              previous={() =>
                setCurrent((c) => Math.max(0, c - 1))
              }
              next={() =>
                setCurrent((c) =>
                  Math.min(
                    quiz.questions.length - 1,
                    c + 1
                  )
                )
              }
            />

            <SubmitDialog
              onSubmit={() => {
                console.log("Answers:", answers);
                alert("Quiz Submitted");
              }}
            />

          </div>

          <QuestionPalette
            total={quiz.questions.length}
            current={current}
            answers={answers}
            onSelect={setCurrent}
          />

        </div>

      </div>

    </main>
  );
}