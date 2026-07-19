"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  Brain,
  BarChart3,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Books",
    href: "/books",
    icon: BookOpen,
  },
  {
    title: "Notes",
    href: "/notes",
    icon: FileText,
  },
  {
    title: "Current Affairs",
    href: "/current-affairs",
    icon: Newspaper,
  },
  {
    title: "Question Bank",
    href: "/question-bank",
    icon: ClipboardList,
  },
  {
    title: "AI Studio",
    href: "/admin/ai-content-studio",
    icon: Brain,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  collapsed,
  onToggle,
}: SidebarProps) {

  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed left-0 top-0 z-40 h-screen
        bg-white border-r shadow-sm
        transition-all duration-300
        ${collapsed ? "w-20" : "w-72"}
        hidden lg:flex flex-col
      `}
    >
      {/* Logo */}

      <div className="h-16 flex items-center justify-between px-5 border-b">

        {!collapsed && (
          <h1 className="font-bold text-xl text-blue-600">
            TNPSC MASTER AI
          </h1>
        )}

        <button
          onClick={onToggle}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto py-5">

        {menuItems.map((item) => {

          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                mx-3 mb-2 flex items-center gap-3
                rounded-xl px-4 py-3
                transition-colors
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              <Icon size={20} />

              {!collapsed && (
                <span className="font-medium">
                  {item.title}
                </span>
              )}
            </Link>
          );
        })}

      </nav>

      {/* Footer */}

      {!collapsed && (
        <div className="border-t p-4 text-center text-sm text-slate-500">
          TNPSC MASTER AI v1.0
        </div>
      )}
    </aside>
  );
}