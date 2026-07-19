"use client";

import OptionCard from "./OptionCard";

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-semibold mb-6">
        {question.question}
      </h2>

      <div className="space-y-4">

        {question.options.map((option: string, index: number) => (
          <OptionCard
            key={index}
            option={option}
            selected={selected === option}
            onClick={() => onSelect(option)}
          />
        ))}

      </div>

    </div>
  );
}