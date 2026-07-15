"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavigationItem } from "@/types/navigation";

interface Props {
  item: NavigationItem;
}

export default function MobileNavItem({ item }: Props) {
  const pathname = usePathname();
  const Icon = item.icon;

  const active = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={clsx(
        "flex flex-col items-center gap-1 text-xs transition-colors",
        active
          ? "text-blue-600"
          : "text-slate-500 dark:text-slate-400"
      )}
    >
      <Icon size={22} />
      <span>{item.title}</span>
    </Link>
  );
}