"use client";

type Props = {
  score: number;
  total: number;
};

export default function ResultCard({
  score,
  total,
}: Props) {

  const percentage =
    Math.round((score / total) * 100);

  return (

    <div className="bg-white rounded-2xl shadow p-8 text-center">

      <h1 className="text-4xl font-bold">

        Quiz Completed 🎉

      </h1>

      <h2 className="text-6xl font-bold text-blue-600 mt-6">

        {score}/{total}

      </h2>

      <p className="mt-4 text-xl">

        {percentage}% Score

      </p>

    </div>

  );

}