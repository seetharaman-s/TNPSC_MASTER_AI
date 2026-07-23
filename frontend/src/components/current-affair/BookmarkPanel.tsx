"use client";

import { useMemo, useState } from "react";
import {
  Bookmark,
  Search,
  Trash2,
  ExternalLink,
} from "lucide-react";

import {
  CurrentAffair,
} from "@/services/currentAffairsService";

interface BookmarkPanelProps {
  bookmarks?: CurrentAffair[];
  onRemoveBookmark?: (id: number) => void;
}

export default function BookmarkPanel({
  bookmarks = [],
  onRemoveBookmark,
}: BookmarkPanelProps) {
  const [search, setSearch] = useState("");

  const filteredBookmarks = useMemo(() => {
    const keyword = search.toLowerCase();

    return bookmarks.filter((bookmark) => {
      return (
        bookmark.title
          .toLowerCase()
          .includes(keyword) ||
        bookmark.category
          .toLowerCase()
          .includes(keyword) ||
        (bookmark.topic ?? "")
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [bookmarks, search]);

  return (
    <section className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Bookmarked Current Affairs
          </h2>

          <p className="text-gray-600">
            Quickly revisit the current affairs you
            have saved for revision.
          </p>

        </div>

        <div className="relative w-full md:w-80">

          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search bookmarks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />

        </div>

      </div>

      {/* Empty State */}

      {filteredBookmarks.length === 0 && (

        <div className="rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center">

          <Bookmark className="mx-auto mb-4 h-12 w-12 text-gray-400" />

          <h3 className="text-xl font-semibold">
            No Bookmarks Found
          </h3>

          <p className="mt-2 text-gray-500">
            Save important current affairs for quick
            revision later.
          </p>

        </div>

      )}

      {/* Bookmark List */}

      <div className="grid gap-5 lg:grid-cols-2">

        {filteredBookmarks.map((bookmark) => (

          <div
            key={bookmark.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="flex-1">

                <div className="mb-2 flex flex-wrap gap-2">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {bookmark.category}
                  </span>

                  {bookmark.topic && (

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                      {bookmark.topic}
                    </span>

                  )}

                </div>

                <h3 className="text-lg font-semibold">
                  {bookmark.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-gray-600">
                  {bookmark.content}
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">

                  <span>
                    {bookmark.publish_date}
                  </span>

                  <span>
                    {bookmark.source ?? "Unknown"}
                  </span>

                  <span>
                    👁 {bookmark.views}
                  </span>

                </div>

              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              <button
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              >
                <ExternalLink className="h-4 w-4" />
                Read
              </button>

              <button
                onClick={() =>
                  onRemoveBookmark?.(
                    bookmark.id
                  )
                }
                className="inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-red-600 transition hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}