"use client";

interface Props {
  summary: any;
}

export default function SummaryCards({
  summary,
}: Props) {

  const cards = [
    {
      title: "Books",
      value: summary.total_books,
    },
    {
      title: "Notes",
      value: summary.total_notes,
    },
    {
      title: "Quizzes",
      value: summary.total_quizzes,
    },
    {
      title: "Questions",
      value: summary.total_questions,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-xl shadow p-6"
        >
          <h3 className="text-gray-500">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-3">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}