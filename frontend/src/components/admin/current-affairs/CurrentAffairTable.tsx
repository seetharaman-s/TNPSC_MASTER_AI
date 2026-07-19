"use client";

import Link from "next/link";
import { Pencil, Trash2, Eye } from "lucide-react";
import { CurrentAffairService } from "@/services/currentAffairService";

interface CurrentAffairTableProps {
  currentAffairs: any[];
  onRefresh?: () => void;
}

export default function CurrentAffairTable({
  currentAffairs,
  onRefresh,
}: CurrentAffairTableProps) {

  async function deleteItem(id: number) {
    if (!confirm("Delete this current affair?")) return;

    try {
      await CurrentAffairService.delete(id);
      onRefresh?.();
    } catch (error) {
      console.error(error);
      alert("Failed to delete.");
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-4 text-left">Title</th>
            <th className="px-5 py-4 text-left">Category</th>
            <th className="px-5 py-4 text-left">Date</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {currentAffairs.map((item) => (

            <tr
              key={item.id}
              className="border-t"
            >

              <td className="px-5 py-4">
                {item.title}
              </td>

              <td className="px-5 py-4">
                {item.category}
              </td>

              <td className="px-5 py-4">
                {item.publish_date}
              </td>

              <td className="px-5 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/current-affairs/${item.id}`}
                    className="rounded-lg bg-green-600 p-2 text-white"
                  >
                    <Eye size={18}/>
                  </Link>

                  <Link
                    href={`/admin/current-affairs/${item.id}/edit`}
                    className="rounded-lg bg-blue-600 p-2 text-white"
                  >
                    <Pencil size={18}/>
                  </Link>

                  <button
                    onClick={() => deleteItem(item.id)}
                    className="rounded-lg bg-red-600 p-2 text-white"
                  >
                    <Trash2 size={18}/>
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