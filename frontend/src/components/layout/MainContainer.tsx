"use client";

import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export default function MainContainer({
  children,
}: MainContainerProps) {
  return (
    <main className="flex-1 bg-slate-50 min-h-screen">
      {children}
    </main>
  );
}