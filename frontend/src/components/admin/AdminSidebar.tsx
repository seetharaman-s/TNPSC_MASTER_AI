"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Books",
    href: "/admin/books",
    icon: BookOpen,
  },
  {
    title: "Notes",
    href: "/admin/notes",
    icon: FileText,
  },
  {
    title: "Current Affairs",
    href: "/admin/current-affairs",
    icon: Newspaper,
  },
  {
    title: "Quizzes",
    href: "/admin/quizzes",
    icon: ClipboardList,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen flex flex-col">

      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold">
          TNPSC MASTER AI
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Admin Dashboard
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}

      </nav>

      <div className="border-t border-slate-800 p-4">

        <button
          className="flex w-full items-center gap-3 rounded-xl bg-red-600 px-4 py-3 hover:bg-red-700 transition"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}