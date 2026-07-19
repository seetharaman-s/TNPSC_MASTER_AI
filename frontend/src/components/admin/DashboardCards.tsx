"use client";

import Link from "next/link";
import {
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  Users,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";

const cards = [
  {
    title: "Books",
    value: "250+",
    href: "/admin/books",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    title: "Notes",
    value: "500+",
    href: "/admin/notes",
    icon: FileText,
    color: "bg-green-500",
  },
  {
    title: "Current Affairs",
    value: "365",
    href: "/admin/current-affairs",
    icon: Newspaper,
    color: "bg-orange-500",
  },
  {
    title: "Quizzes",
    value: "120",
    href: "/admin/quizzes",
    icon: ClipboardList,
    color: "bg-purple-500",
  },
  {
    title: "Users",
    value: "2,500",
    href: "/admin/users",
    icon: Users,
    color: "bg-pink-500",
  },
  {
    title: "Analytics",
    value: "Live",
    href: "/admin/analytics",
    icon: BarChart3,
    color: "bg-cyan-500",
  },
  {
    title: "Settings",
    value: "",
    href: "/admin/settings",
    icon: Settings,
    color: "bg-gray-600",
  },
  {
    title: "Admin",
    value: "Secure",
    href: "/admin",
    icon: Shield,
    color: "bg-red-500",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div
                className={`${card.color} rounded-xl p-3 text-white`}
              >
                <Icon size={28} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}