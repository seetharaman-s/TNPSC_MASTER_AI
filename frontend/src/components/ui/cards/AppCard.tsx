"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface AppCardProps {
  children: ReactNode;
  className?: string;
}

export default function AppCard({
  children,
  className,
}: AppCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      {children}
    </div>
  );
}