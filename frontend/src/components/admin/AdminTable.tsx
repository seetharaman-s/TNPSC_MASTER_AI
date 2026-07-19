"use client";

import { Edit, Trash2, Eye } from "lucide-react";

interface Column {
  key: string;
  label: string;
}

interface AdminTableProps {
  columns: Column[];
  data: any[];
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onView?: (row: any) => void;
}

export default function AdminTable({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
}: AdminTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left"
              >
                {column.label}
              </th>
            ))}

            <th className="px-4 py-3 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t hover:bg-slate-50"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-3"
                >
                  {row[column.key]}
                </td>
              ))}

              <td className="px-4 py-3">

                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => onView?.(row)}
                    className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                  >
                    <Eye size={16} />
                  </button>

                  <button
                    onClick={() => onEdit?.(row)}
                    className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                  >
                    <Edit size={16} />
                  </button>

                  <button
                    onClick={() => onDelete?.(row)}
                    className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}