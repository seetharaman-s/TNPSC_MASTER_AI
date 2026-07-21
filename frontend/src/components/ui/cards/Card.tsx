import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white dark:bg-slate-900",
        "border border-slate-200 dark:border-slate-800",
        "shadow-sm",
        "hover:shadow-xl",
        "transition-all duration-300",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}