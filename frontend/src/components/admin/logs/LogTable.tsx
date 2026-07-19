"use client";

import { Eye } from "lucide-react";

const logs = [
  {
    id: 1,
    level: "INFO",
    action: "Book Uploaded",
    user: "Admin",
    date: "17 Jul 2026",
  },
  {
    id: 2,
    level: "WARNING",
    action: "Login Attempt",
    user: "User01",
    date: "17 Jul 2026",
  },
  {
    id: 3,
    level: "ERROR",
    action: "Database Error",
    user: "System",
    date: "16 Jul 2026",
  },
];

export default function LogTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="px-5 py-4 text-left">Level</th>
            <th className="px-5 py-4 text-left">Action</th>
            <th className="px-5 py-4 text-left">User</th>
            <th className="px-5 py-4 text-left">Date</th>
            <th className="px-5 py-4 text-center">View</th>
          </tr>

        </thead>

        <tbody>

          {logs.map((log) => (

            <tr
              key={log.id}
              className="border-t"
            >

              <td className="px-5 py-4">
                {log.level}
              </td>

              <td className="px-5 py-4">
                {log.action}
              </td>

              <td className="px-5 py-4">
                {log.user}
              </td>

              <td className="px-5 py-4">
                {log.date}
              </td>

              <td className="px-5 py-4 text-center">

                <button className="rounded-lg bg-blue-600 p-2 text-white">
                  <Eye size={18} />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}