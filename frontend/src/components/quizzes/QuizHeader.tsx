"use client";

export default function QuizHeader({
  title,
  current,
  total,
}: {
  title: string;
  current: number;
  total: number;
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">

      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="mt-2 text-gray-500">
        Question {current} of {total}
      </p>

    </div>
  );
}