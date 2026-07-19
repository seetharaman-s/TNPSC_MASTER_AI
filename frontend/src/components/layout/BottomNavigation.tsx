"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Brain,
  User,
} from "lucide-react";

const items = [
  {
    title: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Books",
    href: "/books",
    icon: BookOpen,
  },
  {
    title: "Tests",
    href: "/mock-tests",
    icon: ClipboardList,
  },
  {
    title: "AI",
    href: "/admin/ai-content-studio",
    icon: Brain,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t z-50">

      <div className="grid grid-cols-5">

        {items.map((item) => {

          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-3 ${
                active
                  ? "text-blue-600"
                  : "text-slate-500"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">
                {item.title}
              </span>
            </Link>
          );

        })}

      </div>

    </nav>
  );
}