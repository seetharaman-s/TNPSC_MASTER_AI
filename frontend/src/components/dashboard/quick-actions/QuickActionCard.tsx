"use client";

import Link from "next/link";

export default function QuickActionCard({
  item,
}: {
  item: any;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="rounded-2xl bg-white shadow hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center gap-3 hover:-translate-y-1"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
      >
        <Icon
          className={item.iconColor}
          size={28}
        />
      </div>

      <h3 className="text-sm font-semibold text-center">
        {item.title}
      </h3>
    </Link>
  );
}