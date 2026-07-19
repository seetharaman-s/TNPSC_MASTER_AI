"use client";

const activities = [
  "New Book Added",
  "Quiz Updated",
  "Current Affair Published",
  "New User Registered",
  "Notes Uploaded",
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Recent Activity
      </h2>

      <ul className="space-y-3">

        {activities.map((activity, index) => (
          <li
            key={index}
            className="rounded-lg border p-3"
          >
            {activity}
          </li>
        ))}

      </ul>

    </div>
  );
}