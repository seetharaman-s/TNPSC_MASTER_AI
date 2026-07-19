"use client";

import { Bot, User, Copy, Check } from "lucide-react";
import { useState } from "react";
import { ChatMessage } from "./ChatWindow";

interface Props {
  message: ChatMessage;
}

export default function MessageBubble({
  message,
}: Props) {
  const [copied, setCopied] = useState(false);

  const isUser = message.role === "user";

  async function copyMessage() {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[85%] gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {isUser ? (
            <User className="h-5 w-5" />
          ) : (
            <Bot className="h-5 w-5" />
          )}
        </div>

        <div
          className={`group relative rounded-2xl px-5 py-4 shadow-sm ${
            isUser
              ? "bg-blue-600 text-white"
              : "border bg-white text-gray-900"
          }`}
        >
          <p className="whitespace-pre-wrap leading-7">
            {message.content}
          </p>

          {message.createdAt && (
            <p
              className={`mt-3 text-xs ${
                isUser
                  ? "text-blue-100"
                  : "text-gray-500"
              }`}
            >
              {message.createdAt}
            </p>
          )}

          {!isUser && (
            <button
              onClick={copyMessage}
              className="absolute right-3 top-3 rounded-md p-1 opacity-0 transition hover:bg-gray-100 group-hover:opacity-100"
              title="Copy"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}