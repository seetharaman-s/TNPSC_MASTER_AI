"use client";

import Link from "next/link";
import Image from "next/image";

import { SIDEBAR_MENU } from "@/constants/navigation";
import { NavItem } from "@/components/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-72 h-screen sticky top-0 flex-col border-r bg-white dark:bg-slate-950 dark:border-slate-800">

      {/* Logo */}

      <div className="flex items-center gap-3 p-6 border-b dark:border-slate-800">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
        TM
        </div>

        <div>

          <h1 className="text-xl font-bold">
            TNPSC MASTER
          </h1>

          <p className="text-sm text-slate-500">
            Your Success, Our Mission
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">

        {SIDEBAR_MENU.map((item) => (

          <NavItem
            key={item.id}
            item={item}
          />

        ))}

      </nav>

    </aside>
  );
}