"use client";

import { useState } from "react";
import {
  Brain,
  Loader2,
  CheckCircle,
  XCircle,
  Trophy,
} from "lucide-react";

import {
  AIService,
  MCQ,
  MCQResponse,
} from "@/services/aiService";

export default function MCQGenerator() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState<
    "Easy" | "Medium" | "Hard"
  >("Easy");
  const [count, setCount] = useState(10);

  const [loading, setLoading] = useState(false);

  const [response, setResponse] =
    useState<MCQResponse | null>(null);

  const [answers, setAnswers] = useState<
    Record<number, string>
  >({});

  const [submitted, setSubmitted] =
    useState(false);

  async function generate() {
    if (!topic.trim()) return;

    setLoading(true);
    setSubmitted(false);
    setAnswers({});

    try {
      const result =
        await AIService.generateMCQ({
          topic,
          difficulty,
          number_of_questions: count,
        });

      setResponse(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function score() {
    if (!response) return 0;

    let total = 0;

    response.questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        total++;
      }
    });

    return total;
  }

  return (
    <div className="rounded-2xl border bg-white shadow-sm">

      {/* Header */}

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          <Brain className="h-8 w-8 text-blue-600" />

          <div>

            <h2 className="text-2xl font-bold">

              AI MCQ Generator

            </h2>

            <p className="text-gray-500">

              Generate TNPSC practice questions

            </p>

          </div>

        </div>

      </div>

      {/* Controls */}

      <div className="grid gap-4 p-6 md:grid-cols-4">

        <input
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          placeholder="Topic"
          className="rounded-lg border p-3"
        />

        <select
          value={difficulty}
          onChange={(e) =>
            setDifficulty(
              e.target.value as
                | "Easy"
                | "Medium"
                | "Hard"
            )
          }
          className="rounded-lg border p-3"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={(e) =>
            setCount(Number(e.target.value))
          }
          className="rounded-lg border p-3"
        />

        <button
          onClick={generate}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="mx-auto h-5 w-5 animate-spin" />
          ) : (
            "Generate"
          )}
        </button>

      </div>

      {/* Questions */}

      {response && (

        <div className="space-y-6 border-t p-6">

          {response.questions.map(
            (question: MCQ, index) => (

              <div
                key={index}
                className="rounded-xl border p-5"
              >

                <h3 className="font-semibold">

                  {index + 1}. {question.question}

                </h3>

                <div className="mt-4 space-y-2">

                  {question.options.map(
                    (option, optionIndex) => (

                      <label
                        key={optionIndex}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-gray-50"
                      >

                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option.option}
                          checked={
                            answers[index] ===
                            option.option
                          }
                          disabled={submitted}
                          onChange={() =>
                            setAnswers({
                              ...answers,
                              [index]:
                                option.option,
                            })
                          }
                        />

                        <span>

                          {option.option}

                        </span>

                      </label>

                    )
                  )}

                </div>

                {submitted && (

                  <div className="mt-4 rounded-lg bg-gray-50 p-4">

                    <div className="flex items-center gap-2">

                      {answers[index] ===
                      question.answer ? (

                        <CheckCircle className="h-5 w-5 text-green-600" />

                      ) : (

                        <XCircle className="h-5 w-5 text-red-600" />

                      )}

                      <strong>

                        Correct Answer:

                      </strong>

                      {question.answer}

                    </div>

                    <p className="mt-3 text-gray-600">

                      {question.explanation}

                    </p>

                  </div>

                )}

              </div>

            )
          )}

          {!submitted ? (

            <button
              onClick={() =>
                setSubmitted(true)
              }
              className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
            >

              Submit Test

            </button>

          ) : (

            <div className="rounded-xl border bg-blue-50 p-6">

              <div className="flex items-center gap-3">

                <Trophy className="h-8 w-8 text-yellow-500" />

                <div>

                  <h3 className="text-xl font-bold">

                    Your Score

                  </h3>

                  <p>

                    {score()} /{" "}
                    {response.questions.length}

                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      )}

    </div>
  );
}