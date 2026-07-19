"use client";

import CurrentAffairItem from "./CurrentAffairItem";

const data = [
  {
    title: "Tamil Nadu Budget 2026 Highlights",
    category: "State",
    date: "Today",
  },
  {
    title: "India launches new satellite mission",
    category: "Science",
    date: "Today",
  },
  {
    title: "RBI announces new banking policy",
    category: "Economy",
    date: "Yesterday",
  },
];

export default function CurrentAffairsCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          📰 Current Affairs
        </h2>

        <button className="text-blue-600 text-sm">
          View All
        </button>

      </div>

      {data.map((item) => (
        <CurrentAffairItem
          key={item.title}
          {...item}
        />
      ))}

    </div>
  );
}