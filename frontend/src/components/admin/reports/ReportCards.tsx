"use client";

import { DashboardSummary } from "@/services/reportService";
import {
  Users,
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  HelpCircle,
  Upload,
} from "lucide-react";

interface Props {
  summary: DashboardSummary;
}

export default function ReportCards({ summary }: Props) {
  const cards = [
    {
      title: "Users",
      value: summary.total_users,
      icon: Users,
    },
    {
      title: "Books",
      value: summary.total_books,
      icon: BookOpen,
    },
    {
      title: "Notes",
      value: summary.total_notes,
      icon: FileText,
    },
    {
      title: "Current Affairs",
      value: summary.total_current_affairs,
      icon: Newspaper,
    },
    {
      title: "Quizzes",
      value: summary.total_quizzes,
      icon: ClipboardList,
    },
    {
      title: "Questions",
      value: summary.total_questions,
      icon: HelpCircle,
    },
    {
      title: "Uploads",
      value: summary.total_uploads,
      icon: Upload,
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-8 w-8 text-blue-600" />

              <span className="text-3xl font-bold">
                {card.value}
              </span>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-500">
              {card.title}
            </p>
          </div>
        );
      })}
    </section>
  );
}