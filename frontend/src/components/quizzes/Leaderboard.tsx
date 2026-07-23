"use client";

export default function Leaderboard({
  users,
}: {
  users: any[];
}) {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="font-bold text-xl mb-4">

        Leaderboard

      </h2>

      {users.map((user, index) => (

        <div
          key={index}
          className="flex justify-between py-2 border-b"
        >

          <span>

            {index + 1}. {user.name}

          </span>

          <span>

            {user.score}

          </span>

        </div>

      ))}

    </div>

  );

}