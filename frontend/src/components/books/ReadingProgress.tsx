"use client";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function ReadingProgress({
  currentPage,
  totalPages,
}: Props) {

  const percentage =
    totalPages === 0
      ? 0
      : Math.round(
          (currentPage / totalPages) * 100
        );

  return (

    <div className="mt-8">

      <div className="flex justify-between mb-2">

        <span className="font-medium">
          Reading Progress
        </span>

        <span>
          {percentage}%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-3 text-sm text-gray-500">

        Page {currentPage} of {totalPages}

      </p>

    </div>

  );

}