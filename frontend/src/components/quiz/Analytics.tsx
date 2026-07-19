"use client";

type Props = {
  correct: number;
  wrong: number;
  skipped: number;
};

export default function Analytics({
  correct,
  wrong,
  skipped,
}: Props) {

  return (

    <div className="grid md:grid-cols-3 gap-5">

      <div className="bg-green-500 text-white rounded-2xl p-6">

        <h2>Correct</h2>

        <p className="text-4xl font-bold">

          {correct}

        </p>

      </div>

      <div className="bg-red-500 text-white rounded-2xl p-6">

        <h2>Wrong</h2>

        <p className="text-4xl font-bold">

          {wrong}

        </p>

      </div>

      <div className="bg-yellow-500 text-white rounded-2xl p-6">

        <h2>Skipped</h2>

        <p className="text-4xl font-bold">

          {skipped}

        </p>

      </div>

    </div>

  );

}