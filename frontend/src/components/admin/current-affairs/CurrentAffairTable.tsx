"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import currentAffairsService, {
  CurrentAffair,
} from "@/services/currentAffairsService";

interface CurrentAffairTableProps {
  currentAffairs: CurrentAffair[];
  onRefresh?: () => void;
}

export default function CurrentAffairTable({
  currentAffairs,
  onRefresh,
}: CurrentAffairTableProps) {
  async function deleteItem(id: number) {
    if (!confirm("Delete this current affair?")) return;

    try {
      await currentAffairsService.delete(id);
      onRefresh?.();
    } catch (error) {
      console.error(error);
      alert("Failed to delete.");
    }
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-4 text-left">Title</th>
            <th className="px-5 py-4 text-left">Category</th>
            <th className="px-5 py-4 text-left">Topic</th>
            <th className="px-5 py-4 text-left">Language</th>
            <th className="px-5 py-4 text-left">Publish Date</th>
            <th className="px-5 py-4 text-center">Featured</th>
            <th className="px-5 py-4 text-center">Active</th>
            <th className="px-5 py-4 text-center">Views</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentAffairs.length === 0 ? (
            <tr>
              <td
                colSpan={9}
                className="py-10 text-center text-gray-500"
              >
                No current affairs found.
              </td>
            </tr>
          ) : (
            currentAffairs.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-5 py-4 font-medium">
                  {item.title}
                </td>

                <td className="px-5 py-4">
                  {item.category}
                </td>

                <td className="px-5 py-4">
                  {item.topic || "-"}
                </td>

                <td className="px-5 py-4">
                  {item.language}
                </td>

                <td className="px-5 py-4">
                  {new Date(item.publish_date).toLocaleDateString()}
                </td>

                <td className="px-5 py-4 text-center">
                  {item.featured ? "⭐" : "-"}
                </td>

                <td className="px-5 py-4 text-center">
                  {item.is_active ? "✅" : "❌"}
                </td>

                <td className="px-5 py-4 text-center">
                  {item.views}
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/current-affairs/${item.id}`}
                      className="rounded-lg bg-green-600 p-2 text-white hover:bg-green-700"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/admin/current-affairs/edit/${item.id}`}
                      className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => deleteItem(item.id)}
                      className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}