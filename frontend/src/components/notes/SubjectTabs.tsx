"use client";

const subjects = [
  "All",
  "Tamil",
  "History",
  "Polity",
  "Science",
  "Geography",
  "Economy",
];

export default function SubjectTabs({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (subject: string) => void;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto mb-6">

      {subjects.map((subject) => (

        <button
          key={subject}
          onClick={() =>
            onSelect(subject)
          }
          className={`px-5 py-2 rounded-full ${
            selected === subject
              ? "bg-blue-600 text-white"
              : "bg-white shadow"
          }`}
        >

          {subject}

        </button>

      ))}

    </div>
  );
}