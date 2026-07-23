"use client";

import Link from "next/link";

interface CurrentAffair {
  id: number;
  title: string;
  category: string;
  publish_date: string;
}

interface Props {
  items: CurrentAffair[];
}

export default function CurrentAffairGrid({ items }: Props) {
  if (!items.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No current affairs found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border p-5 shadow-sm hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">{item.title}</h2>

          <p className="text-sm text-gray-500 mt-2">
            {item.category}
          </p>

          <p className="text-sm text-gray-400">
            {new Date(item.publish_date).toLocaleDateString()}
          </p>

          <Link
            href={`/current-affairs/${item.id}`}
            className="text-blue-600 mt-4 inline-block"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}