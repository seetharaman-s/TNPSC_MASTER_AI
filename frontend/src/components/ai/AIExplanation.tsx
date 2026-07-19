"use client";

import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Star,
  Brain,
  Copy,
  Check,
  Printer,
  Download,
} from "lucide-react";

import { ExplainResponse } from "@/services/aiService";

interface Props {
  explanation: ExplainResponse;
}

export default function AIExplanation({
  explanation,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copyContent() {
    const text = `
${explanation.title}

${explanation.explanation}

Key Points:
${explanation.key_points.map((p) => `• ${p}`).join("\n")}

Important Facts:
${explanation.important_facts.map((p) => `• ${p}`).join("\n")}

Memory Trick:
${explanation.memory_trick ?? ""}
`;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function printPage() {
    window.print();
  }

  function downloadText() {
    const text = `
${explanation.title}

${explanation.explanation}

Key Points:
${explanation.key_points.map((p) => `• ${p}`).join("\n")}

Important Facts:
${explanation.important_facts.map((p) => `• ${p}`).join("\n")}

Memory Trick:
${explanation.memory_trick ?? ""}
`;

    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${explanation.title}.txt`;

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="rounded-2xl border bg-white shadow-sm">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4 border-b p-6">

        <div className="flex items-center gap-3">

          <BookOpen className="h-8 w-8 text-blue-600" />

          <div>

            <h2 className="text-2xl font-bold">

              {explanation.title}

            </h2>

            <p className="text-gray-500">

              AI Generated Explanation

            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <button
            onClick={copyContent}
            className="rounded-lg border p-2 hover:bg-gray-100"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-600" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={printPage}
            className="rounded-lg border p-2 hover:bg-gray-100"
          >
            <Printer className="h-5 w-5" />
          </button>

          <button
            onClick={downloadText}
            className="rounded-lg border p-2 hover:bg-gray-100"
          >
            <Download className="h-5 w-5" />
          </button>

        </div>

      </div>

      {/* Explanation */}

      <div className="space-y-8 p-6">

        <section>

          <h3 className="mb-4 text-lg font-semibold">

            Explanation

          </h3>

          <p className="whitespace-pre-wrap leading-8 text-gray-700">

            {explanation.explanation}

          </p>

        </section>

        <section>

          <div className="mb-4 flex items-center gap-2">

            <CheckCircle2 className="h-5 w-5 text-green-600" />

            <h3 className="text-lg font-semibold">

              Key Points

            </h3>

          </div>

          <ul className="space-y-3">

            {explanation.key_points.map((point, index) => (

              <li
                key={index}
                className="rounded-lg border bg-green-50 p-3"
              >
                {point}
              </li>

            ))}

          </ul>

        </section>

        <section>

          <div className="mb-4 flex items-center gap-2">

            <Star className="h-5 w-5 text-yellow-500" />

            <h3 className="text-lg font-semibold">

              Important TNPSC Facts

            </h3>

          </div>

          <ul className="space-y-3">

            {explanation.important_facts.map((fact, index) => (

              <li
                key={index}
                className="rounded-lg border bg-yellow-50 p-3"
              >
                {fact}
              </li>

            ))}

          </ul>

        </section>

        {explanation.memory_trick && (

          <section>

            <div className="mb-4 flex items-center gap-2">

              <Brain className="h-5 w-5 text-purple-600" />

              <h3 className="text-lg font-semibold">

                Memory Trick

              </h3>

            </div>

            <div className="rounded-xl border bg-purple-50 p-5">

              {explanation.memory_trick}

            </div>

          </section>

        )}

      </div>

    </div>
  );
}