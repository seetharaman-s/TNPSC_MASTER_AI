"use client";

export default function Greeting() {

  const hour = new Date().getHours();

  let greeting = "Vanakkam";

  if (hour >= 5 && hour < 12)
    greeting = "Good Morning";

  else if (hour >= 12 && hour < 17)
    greeting = "Good Afternoon";

  else if (hour >= 17)
    greeting = "Good Evening";

  return (

    <div>

      <h1 className="text-3xl font-bold">
        {greeting}, Aspirant! 👋
      </h1>

      <p className="mt-2 text-blue-100">
        Let's achieve your TNPSC dream today.
      </p>

    </div>

  );

}