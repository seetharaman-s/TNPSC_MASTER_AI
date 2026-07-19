"use client";

type Props = {
  total: number;
  current: number;
  answers: Record<number, string>;
  onSelect: (index: number) => void;
};

export default function QuestionPalette({
  total,
  current,
  answers,
  onSelect,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">

      <h2 className="font-bold mb-4">
        Questions
      </h2>

      <div className="grid grid-cols-5 gap-3">

        {Array.from({ length: total }).map((_, index) => {

          const answered = answers[index];

          return (

            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-10 h-10 rounded-lg font-semibold ${
                current === index
                  ? "bg-blue-600 text-white"
                  : answered
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>

          );

        })}

      </div>

    </div>
  );
}