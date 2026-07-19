"use client";

import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">

      <div>

        <h1 className="text-2xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back, Administrator
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="rounded-xl border pl-10 pr-4 py-2 w-72 focus:border-blue-500 focus:outline-none"
          />

        </div>

        <button className="relative rounded-xl bg-gray-100 p-3 hover:bg-gray-200">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={42}
            className="text-blue-600"
          />

          <div>

            <h3 className="font-semibold">
              Administrator
            </h3>

            <p className="text-sm text-gray-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}