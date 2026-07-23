"use client";

import { useState } from "react";
import {
  BookOpen,
  Check,
  ClipboardCopy,
} from "lucide-react";

import { OneLiner } from "@/services/currentAffairsService";

interface OneLinerRevisionProps {
  revisions: OneLiner[];
}

export default function OneLinerRevision({
  revisions,
}: OneLinerRevisionProps) {
  const [copiedId, setCopiedId] = useState<
    number | null
  >(null);

  const copyFact = async (
    id: number,
    fact: string
  ) => {
    try {
      await navigator.clipboard.writeText(fact);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  if (revisions.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">

        <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-400" />

        <h2 className="text-xl font-semibold">
          No Revision Notes
        </h2>

        <p className="mt-2 text-gray-500">
          One-liner revision notes will appear here.
        </p>

      </div>
    );
  }

  return (
    <section className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          One-Liner Revision
        </h2>

        <p className="text-gray-600">
          Quick revision points for TNPSC preparation.
        </p>

      </div>

      {/* Revision Cards */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {revisions.map((item) => (

          <div
            key={item.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >

            <div className="mb-4 flex items-center justify-between">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {item.language ?? "General"}
              </span>

              <button
                onClick={() =>
                  copyFact(
                    item.id,
                    item.text
                  )
                }
                className="rounded-lg p-2 transition hover:bg-gray-100"
                title="Copy"
              >

                {copiedId === item.id ? (

                  <Check className="h-5 w-5 text-green-600" />

                ) : (

                  <ClipboardCopy className="h-5 w-5 text-gray-600" />

                )}

              </button>

            </div>

            <p className="leading-7 text-gray-700">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}