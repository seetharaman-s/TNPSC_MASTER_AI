"use client";

import { Bell } from "lucide-react";

import {
  SearchBar,
  ThemeToggle,
} from "@/components/navigation";

export default function Header() {
  return (

    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b dark:bg-slate-950/80 dark:border-slate-800">

      <div className="flex items-center gap-4 px-6 py-4">

        <div className="flex-1">

          <SearchBar />

        </div>

        <ThemeToggle />

        <button className="relative rounded-full border p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">

          <Bell size={20} />

          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

      </div>

    </header>

  );
}