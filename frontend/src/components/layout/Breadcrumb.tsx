"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  books: "Books",
  notes: "Notes",
  "current-affairs": "Current Affairs",
  "question-bank": "Question Bank",
  "mock-tests": "Mock Tests",
  results: "Results",
  analytics: "Analytics",
  profile: "Profile",
  settings: "Settings",
  users: "Users",
  admin: "Administration",
  "ai-content-studio": "AI Content Studio",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <div className="border-b bg-white px-6 py-3">

      <nav className="flex items-center gap-2 text-sm">

        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
        >
          <Home size={16} />
          Home
        </Link>

        {segments.map((segment, index) => {

          const href =
            "/" + segments.slice(0, index + 1).join("/");

          const isLast = index === segments.length - 1;

          return (
            <div
              key={href}
              className="flex items-center gap-2"
            >
              <ChevronRight
                size={16}
                className="text-slate-400"
              />

              {isLast ? (
                <span className="font-medium text-slate-900">
                  {LABELS[segment] ?? segment}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-slate-600 hover:text-blue-600"
                >
                  {LABELS[segment] ?? segment}
                </Link>
              )}
            </div>
          );

        })}

      </nav>

    </div>
  );
}