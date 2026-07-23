"use client";

interface SubjectTabsProps {
  subjects: string[];
  selected: string;
  onSelect: (subject: string) => void;
}

export default function SubjectTabs({
  subjects,
  selected,
  onSelect,
}: SubjectTabsProps) {

  const allSubjects = ["All", ...subjects];

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

      {allSubjects.map((subject) => {

        const active = selected === subject;

        return (
          <button
            key={subject}
            onClick={() => onSelect(subject)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all
              ${
                active
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {subject}
          </button>
        );

      })}
    </div>
  );
}