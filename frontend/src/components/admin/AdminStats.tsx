"use client";

export default function AdminStats() {
  const stats = [
    {
      label: "Total Books",
      value: 250,
    },
    {
      label: "Notes",
      value: 520,
    },
    {
      label: "Current Affairs",
      value: 365,
    },
    {
      label: "Quizzes",
      value: 120,
    },
    {
      label: "Users",
      value: 2540,
    },
    {
      label: "Attempts",
      value: 18200,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Platform Statistics
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border p-5"
          >
            <p className="text-gray-500">
              {item.label}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-600">
              {item.value}
            </h3>
          </div>
        ))}

      </div>

    </div>
  );
}