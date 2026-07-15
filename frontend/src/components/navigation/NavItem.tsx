"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavigationItem } from "@/types/navigation";

interface NavItemProps {
  item: NavigationItem;
}

export default function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();
  const Icon = item.icon;

  const active = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={clsx(
        "flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
        active
          ? "bg-blue-600 text-white shadow-lg"
          : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />
        <span className="font-medium">{item.title}</span>
      </div>

      {item.badge && (
        <span className="rounded bg-red-500 px-2 py-0.5 text-xs text-white">
          {item.badge}
        </span>
      )}
    </Link>
  );
}