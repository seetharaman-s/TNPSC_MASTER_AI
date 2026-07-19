"use client";

import { Search, RotateCcw } from "lucide-react";

interface Props {
  search: string;
  onSearch: (value: string) => void;

  role: string;
  onRoleChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;
}

export default function UserFilters({
  search,
  onSearch,
  role,
  onRoleChange,
  status,
  onStatusChange,
}: Props) {

  function resetFilters() {
    onSearch("");
    onRoleChange("");
    onStatusChange("");
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

        {/* Search */}

        <div className="relative">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search by name, username or email..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Role */}

        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Reset */}

        <button
          onClick={resetFilters}
          className="flex items-center justify-center gap-2 rounded-xl bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800"
        >
          <RotateCcw size={18} />
          Reset
        </button>

      </div>

    </div>
  );
}