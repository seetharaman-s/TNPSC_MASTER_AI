"use client";

export default function OptionCard({
  option,
  selected,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition ${
        selected
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      {option}
    </button>
  );
}