import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl",
        "backdrop-blur-xl",
        "bg-white/20 dark:bg-slate-900/30",
        "border border-white/20",
        "shadow-xl",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}