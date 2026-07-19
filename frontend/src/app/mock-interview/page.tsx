"use client";

import { useEffect, useState } from "react";

import InterviewDashboard from "@/components/mock-interview/InterviewDashboard";
import QuestionCard from "@/components/mock-interview/QuestionCard";
import AnswerEditor from "@/components/mock-interview/AnswerEditor";
import EvaluationCard from "@/components/mock-interview/EvaluationCard";

import MockInterviewService, {
  InterviewQuestion,
  AnswerEvaluation,
} from "@/services/mockInterviewService";

export default function MockInterviewPage() {
  // Temporary user ID
  const userId = 1;

  const [started, setStarted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [evaluation, setEvaluation] =
    useState<AnswerEvaluation | null>(null);

  const currentQuestion = questions[currentIndex];

  async function startInterview() {
    try {
      setLoading(true);

      const data =
        await MockInterviewService.getQuestions(
          "General Studies",
          "Medium"
        );

      setQuestions(data);
      setCurrentIndex(0);
      setEvaluation(null);
      setStarted(true);
    } catch (error) {
      console.error("Failed to load questions:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleEvaluationComplete(
    result: AnswerEvaluation
  ) {
    setEvaluation(result);
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setEvaluation(null);
    } else {
      alert("🎉 Interview completed!");
      setStarted(false);
      setQuestions([]);
      setCurrentIndex(0);
      setEvaluation(null);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentIndex, evaluation]);

  if (!started) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <InterviewDashboard
          userId={userId}
          onStartInterview={startInterview}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">
          Loading Interview...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl space-y-8 px-4 py-8">

      {/* Question */}

      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
        />
      )}

      {/* Answer */}

      {currentQuestion && !evaluation && (
        <AnswerEditor
          questionId={currentQuestion.id}
          onEvaluationComplete={
            handleEvaluationComplete
          }
        />
      )}

      {/* Evaluation */}

      {evaluation && (
        <>
          <EvaluationCard
            evaluation={evaluation}
          />

          <div className="flex justify-end">
            <button
              onClick={nextQuestion}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {currentIndex ===
              questions.length - 1
                ? "Finish Interview"
                : "Next Question"}
            </button>
          </div>
        </>
      )}

    </div>
  );
}