"use client";

import { useEffect, useRef } from "react";
import { Bot, Sparkles } from "lucide-react";
import MessageBubble from "./MessageBubble";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
}

interface ChatWindowProps {
  messages?: ChatMessage[];
  loading?: boolean;
}

export default function ChatWindow({
  messages = [],
  loading = false,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (messages.length === 0) {
    return (
      <div className="flex h-[550px] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full bg-blue-100 p-5">
          <Sparkles className="h-12 w-12 text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold">
          Welcome to TNPSC AI Assistant
        </h2>

        <p className="mt-3 max-w-xl text-gray-600">
          Ask any TNPSC-related question in Tamil or English. The AI can
          explain concepts, summarize notes, generate practice questions,
          and help you prepare more effectively.
        </p>

        <div className="mt-8 grid w-full max-w-3xl gap-4 md:grid-cols-2">
          <SuggestionCard text="Explain the Fundamental Rights in Tamil" />
          <SuggestionCard text="Generate 10 MCQs from Indian Polity" />
          <SuggestionCard text="Summarize the Indian Constitution" />
          <SuggestionCard text="Create a 30-day Group 4 study plan" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[550px] overflow-y-auto bg-gray-50 px-5 py-6">
      <div className="mx-auto max-w-4xl space-y-6">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="flex gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                <Bot className="h-5 w-5" />
              </div>

              <div className="rounded-2xl border bg-white px-5 py-4 shadow-sm">

                <div className="flex gap-2">

                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:150ms]" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:300ms]" />

                </div>

              </div>

            </div>
          </div>
        )}

        <div ref={bottomRef} />

      </div>
    </div>
  );
}

interface SuggestionCardProps {
  text: string;
}

function SuggestionCard({
  text,
}: SuggestionCardProps) {
  return (
    <button className="rounded-xl border bg-white p-4 text-left transition hover:border-blue-500 hover:shadow-md">
      <p className="text-sm font-medium text-gray-700">
        {text}
      </p>
    </button>
  );
}