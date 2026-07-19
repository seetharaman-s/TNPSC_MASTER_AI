"use client";

import { useState } from "react";

export default function LogFilters() {
  const [level, setLevel] = useState("all");

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="grid gap-4 md:grid-cols-3">

        <input
          placeholder="Search logs..."
          className="rounded-xl border p-3"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-xl border p-3"
        >
          <option value="all">All Levels</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>

        <input
          type="date"
          className="rounded-xl border p-3"
        />

      </div>

    </div>
  );
}