"use client";

import { useState } from "react";
import {
  Bot,
  BookOpen,
  FileText,
  Brain,
  Sparkles,
} from "lucide-react";

import ChatWindow, {
  ChatMessage,
} from "@/components/ai/ChatWindow";

import ChatInput from "@/components/ai/ChatInput";

import {
  ChatResponse,
} from "@/services/aiService";

export default function AIPage() {

  const [language, setLanguage] =
    useState<"Tamil" | "English">("Tamil");

  const [messages, setMessages] =
    useState<ChatMessage[]>([]);

  const [loading, setLoading] =
    useState(false);

  function handleSend(
    userMessage: string,
    response: ChatResponse,
  ) {

    setLoading(true);

    const user: ChatMessage = {

      id: crypto.randomUUID(),

      role: "user",

      content: userMessage,

      createdAt: new Date().toLocaleTimeString(),

    };

    const assistant: ChatMessage = {

      id: crypto.randomUUID(),

      role: "assistant",

      content: response.reply,

      createdAt: new Date().toLocaleTimeString(),

    };

    setMessages((previous) => [
      ...previous,
      user,
      assistant,
    ]);

    setLoading(false);

  }

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Header */}

      <div className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-blue-600 p-3 text-white">

              <Bot className="h-8 w-8" />

            </div>

            <div>

              <h1 className="text-3xl font-bold">

                TNPSC AI Assistant

              </h1>

              <p className="text-gray-600">

                Ask anything in Tamil or English

              </p>

            </div>

          </div>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(
                e.target.value as
                  | "Tamil"
                  | "English",
              )
            }
            className="rounded-lg border px-4 py-2"
          >

            <option value="Tamil">

              தமிழ்

            </option>

            <option value="English">

              English

            </option>

          </select>

        </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Quick Actions */}

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <QuickCard
            icon={
              <BookOpen className="h-8 w-8 text-blue-600" />
            }
            title="Explain Topic"
            subtitle="Simple TNPSC explanations"
          />

          <QuickCard
            icon={
              <Brain className="h-8 w-8 text-green-600" />
            }
            title="Generate MCQs"
            subtitle="Practice instantly"
          />

          <QuickCard
            icon={
              <FileText className="h-8 w-8 text-orange-600" />
            }
            title="Summarize Notes"
            subtitle="Short revision notes"
          />

          <QuickCard
            icon={
              <Sparkles className="h-8 w-8 text-purple-600" />
            }
            title="Study Planner"
            subtitle="Daily preparation plan"
          />

        </div>

        {/* Chat */}

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

          <ChatWindow
            messages={messages}
            loading={loading}
          />

          <ChatInput
            language={language}
            onSend={handleSend}
          />

        </div>

      </div>

    </div>

  );

}

interface QuickCardProps {

  icon: React.ReactNode;

  title: string;

  subtitle: string;

}

function QuickCard({

  icon,

  title,

  subtitle,

}: QuickCardProps) {

  return (

    <button className="rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4">

        {icon}

      </div>

      <h3 className="text-lg font-semibold">

        {title}

      </h3>

      <p className="mt-2 text-sm text-gray-600">

        {subtitle}

      </p>

    </button>

  );

}