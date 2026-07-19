"use client";

import { useState } from "react";
import {
  Bot,
  User,
  Send,
  BookOpen,
  Brain,
 Sparkles,
  Search,
  History,
  Star,
  Trash2,
} from "lucide-react";

const suggestions = [
  "Explain the Indian Constitution",
  "Create 20 TNPSC Group 4 MCQs",
  "Summarize Sangam Literature",
  "Explain GST in Tamil",
  "Today's Current Affairs",
  "Important Geography Maps",
];

const initialMessages = [
  {
    role: "assistant",
    content:
      "👋 Welcome to TNPSC MASTER AI. Ask me anything about TNPSC books, notes, current affairs, history, polity, science, economics, aptitude, or Tamil.",
  },
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input,
      },
      {
        role: "assistant",
        content:
          "This is a placeholder response. Connect this page to your FastAPI AI backend (RAG + LLM) to answer from TNPSC books and notes.",
      },
    ]);

    setInput("");
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          AI Study Assistant
        </h1>

        <p className="mt-2 text-slate-500">
          Ask questions, revise concepts, summarize lessons, and prepare for TNPSC using your personal knowledge base.
        </p>

      </div>

      {/* Quick Actions */}

      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">

        {suggestions.map((item) => (

          <button
            key={item}
            className="rounded-xl border p-4 text-left hover:bg-indigo-50 transition"
            onClick={() => setInput(item)}
          >
            <Sparkles
              className="mb-3 text-indigo-600"
              size={20}
            />

            <p className="text-sm font-medium">
              {item}
            </p>

          </button>

        ))}

      </div>

      {/* Chat Window */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6 flex items-center gap-3">

          <Bot className="text-indigo-600" />

          <h2 className="text-2xl font-bold">
            AI Conversation
          </h2>

        </div>

        <div className="h-[500px] overflow-y-auto space-y-5 p-6">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-3xl rounded-2xl p-5 ${
                  message.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100"
                }`}
              >

                <div className="mb-2 flex items-center gap-2">

                  {message.role === "assistant" ? (
                    <Bot size={18} />
                  ) : (
                    <User size={18} />
                  )}

                  <span className="font-semibold">
                    {message.role === "assistant"
                      ? "AI"
                      : "You"}
                  </span>

                </div>

                <p>{message.content}</p>

              </div>

            </div>

          ))}

        </div>

        {/* Input */}

        <div className="border-t p-6 flex gap-4">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Ask anything about TNPSC..."
            className="flex-1 rounded-xl border px-4 py-3"
          />

          <button
            onClick={sendMessage}
            className="rounded-xl bg-indigo-600 px-6 text-white"
          >

            <Send size={20} />

          </button>

        </div>

      </div>

            {/* AI Tools */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* AI Features */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              AI Study Tools
            </h2>

          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2">

            {[
              "Generate TNPSC MCQs",
              "Summarize Chapter",
              "Explain in Tamil",
              "Explain in English",
              "Important Exam Points",
              "Create Revision Notes",
              "Previous Year Analysis",
              "Quick Revision",
            ].map((tool) => (

              <button
                key={tool}
                className="rounded-xl border p-4 text-left transition hover:bg-indigo-50"
              >
                <Brain
                  size={18}
                  className="mb-3 text-indigo-600"
                />

                {tool}

              </button>

            ))}

          </div>

        </div>

        {/* Chat History */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6 flex items-center gap-3">

            <History
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Recent Chats
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Indian Constitution",
              "Current Affairs - July",
              "Sangam Literature",
              "Economics Revision",
              "History MCQs",
            ].map((chat) => (

              <div
                key={chat}
                className="rounded-xl border p-4 hover:bg-slate-50 cursor-pointer"
              >

                <div className="flex items-center justify-between">

                  <span>{chat}</span>

                  <Trash2
                    size={18}
                    className="text-red-500"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Saved Answers */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6 flex items-center gap-3">

          <Star
            className="text-yellow-500"
            size={24}
          />

          <h2 className="text-2xl font-bold">
            Saved Responses
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Indian Constitution Summary",
            "GST Explained in Tamil",
            "Science One-Line Notes",
            "TNPSC Geography Tricks",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold">
                    {item}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Saved for quick revision
                  </p>

                </div>

                <Star
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Knowledge Sources */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6 flex items-center gap-3">

          <BookOpen
            className="text-indigo-600"
            size={24}
          />

          <h2 className="text-2xl font-bold">
            Knowledge Sources
          </h2>

        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "TNPSC Books",
            "Personal Notes",
            "Current Affairs",
            "Question Bank",
            "Mock Tests",
            "Study PDFs",
            "Bookmarks",
            "Revision Notes",
          ].map((source) => (

            <div
              key={source}
              className="rounded-xl border p-5 text-center"
            >

              <BookOpen
                size={30}
                className="mx-auto mb-3 text-indigo-600"
              />

              <p className="font-medium">
                {source}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Future Features */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 p-8 text-white">

        <h2 className="text-3xl font-bold">
          Coming Soon
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Voice Conversation",
            "OCR from Images",
            "PDF Question Answering",
            "Tamil Speech",
            "Chapter Revision Mode",
            "Exam Strategy Generator",
            "Daily AI Quiz",
            "Personalized Revision Plan",
          ].map((feature) => (

            <div
              key={feature}
              className="rounded-xl bg-white/10 p-5 backdrop-blur"
            >
              {feature}
            </div>

          ))}

        </div>

      </div>

    </div>

  );

}