"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Moon,
  Sun,
  Languages,
  User,
  Settings,
  LogOut,
  CalendarDays,
  Plus,
} from "lucide-react";

export default function Header() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <header className="sticky top-0 z-30 bg-white border-b">

      <div className="h-16 flex items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-4">

          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100">

            <Menu size={22} />

          </button>

          {/* Search */}

          <div className="relative hidden md:block">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              placeholder="Search books, notes, tests..."
              className="w-80 border rounded-lg py-2.5 pl-10 pr-4"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          {/* Quick Action */}

          <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">

            <Plus size={18} />

            Quick Add

          </button>

          {/* Language */}

          <button className="p-2 rounded-lg hover:bg-gray-100">

            <Languages size={20} />

          </button>

          {/* Theme */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >

            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}

          </button>

          {/* Notifications */}

          <button className="relative p-2 rounded-lg hover:bg-gray-100">

            <Bell size={20} />

            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          {/* Date */}

          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">

            <CalendarDays size={18} />

            {new Date().toLocaleDateString()}

          </div>

          {/* User */}

          <button className="flex items-center gap-3 rounded-lg border px-3 py-2 hover:bg-gray-50">

            <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center">

              <User size={18} />

            </div>

            <div className="hidden md:block text-left">

              <div className="font-medium">

                Admin

              </div>

              <div className="text-xs text-gray-500">

                Administrator

              </div>

            </div>

          </button>

        </div>

      </div>

    </header>

  );

}