"use client";

import { ReactNode } from "react";

import {
  Sidebar,
  Header,
  BottomNavigation,
  MainContainer,
} from "@/components/layout";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <Header />

          <MainContainer>{children}</MainContainer>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}