"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FileText,
  Save,
  Send,
  AlertCircle,
} from "lucide-react";

import MockInterviewService, {
  AnswerEvaluation,
} from "@/services/mockInterviewService";

interface Props {
  questionId: number;
  onEvaluationComplete?: (
    evaluation: AnswerEvaluation
  ) => void;
}

const MIN_WORDS = 30;

export default function AnswerEditor({
  questionId,
  onEvaluationComplete,
}: Props) {
  const storageKey = `mock-interview-answer-${questionId}`;

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const wordCount = useMemo(() => {
    const words = answer
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    return answer.trim() === "" ? 0 : words.length;
  }, [answer]);

  const characterCount = answer.length;

  const isValid = wordCount >= MIN_WORDS;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setAnswer(saved);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, answer);
  }, [answer, storageKey]);

  async function submitAnswer() {
    if (!isValid) {
      setError(
        `Please write at least ${MIN_WORDS} words before submitting.`
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      const evaluation =
        await MockInterviewService.evaluateAnswer({
          question_id: questionId,
          answer,
        });

      localStorage.removeItem(storageKey);

      onEvaluationComplete?.(evaluation);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to evaluate your answer. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <FileText className="h-7 w-7 text-blue-600" />

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Your Answer
          </h2>

          <p className="text-sm text-gray-500">
            Write a clear, structured answer for AI evaluation.
          </p>
        </div>
      </div>

      {/* Textarea */}

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        className="min-h-[320px] w-full rounded-xl border border-gray-300 p-4 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {/* Statistics */}

      <div className="mt-4 grid gap-4 md:grid-cols-3">

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Word Count
          </p>

          <p className="text-xl font-bold">
            {wordCount}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Characters
          </p>

          <p className="text-xl font-bold">
            {characterCount}
          </p>
        </div>

        <div
          className={`rounded-lg p-4 ${
            isValid
              ? "bg-green-50"
              : "bg-yellow-50"
          }`}
        >
          <p className="text-sm text-gray-500">
            Minimum Words
          </p>

          <p
            className={`text-xl font-bold ${
              isValid
                ? "text-green-700"
                : "text-yellow-700"
            }`}
          >
            {MIN_WORDS}
          </p>
        </div>

      </div>

      {/* Validation */}

      {!isValid && (
        <div className="mt-6 flex items-center gap-2 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <AlertCircle className="h-5 w-5 text-yellow-600" />

          <p className="text-sm text-yellow-700">
            Write at least{" "}
            <strong>{MIN_WORDS} words</strong> before
            submitting your answer.
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Footer */}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          onClick={() =>
            localStorage.setItem(storageKey, answer)
          }
        >
          <Save className="mr-2 h-5 w-5" />

          Save Draft
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={submitAnswer}
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="mr-2 h-5 w-5" />

          {loading
            ? "Evaluating..."
            : "Submit for AI Evaluation"}
        </button>

      </div>

    </div>
  );
}