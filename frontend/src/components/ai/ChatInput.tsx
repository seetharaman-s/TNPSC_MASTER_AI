"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Loader2, Languages } from "lucide-react";

import {
  AIService,
  ChatRequest,
  ChatResponse,
} from "@/services/aiService";

interface Props {
  language: "Tamil" | "English";
  onSend?: (
    userMessage: string,
    aiReply: ChatResponse,
  ) => void;
}

export default function ChatInput({
  language,
  onSend,
}: Props) {

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const textareaRef =
    useRef<HTMLTextAreaElement>(null);

  useEffect(() => {

    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";

    textareaRef.current.style.height =
      `${textareaRef.current.scrollHeight}px`;

  }, [message]);

  async function sendMessage() {

    const text = message.trim();

    if (!text || loading) return;

    setLoading(true);

    try {

      const payload: ChatRequest = {
        message: text,
        language,
      };

      const response =
        await AIService.chat(payload);

      onSend?.(
        text,
        response,
      );

      setMessage("");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      sendMessage();

    }

  }

  return (

    <div className="border-t bg-white p-5">

      <div className="flex items-end gap-4">

        <div className="relative flex-1">

          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder={
              language === "Tamil"
                ? "உங்கள் கேள்வியை உள்ளிடுங்கள்..."
                : "Ask your TNPSC question..."
            }
            className="max-h-40 min-h-[52px] w-full resize-none rounded-xl border px-4 py-3 pr-12 outline-none transition focus:border-blue-500"
          />

          <Languages
            className="absolute right-4 top-4 h-5 w-5 text-gray-400"
          />

        </div>

        <button
          onClick={sendMessage}
          disabled={
            loading ||
            message.trim().length === 0
          }
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >

          {loading ? (

            <Loader2 className="h-5 w-5 animate-spin" />

          ) : (

            <Send className="h-5 w-5" />

          )}

        </button>

      </div>

      <div className="mt-3 flex justify-between text-xs text-gray-500">

        <span>

          {language === "Tamil"
            ? "Enter: அனுப்பு • Shift+Enter: புதிய வரி"
            : "Enter: Send • Shift+Enter: New line"}

        </span>

        <span>

          {message.length} characters

        </span>

      </div>

    </div>

  );

}