"use client";

import { useEffect, useState } from "react";

export default function Timer({
  minutes,
}: {
  minutes: number;
}) {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold">
      {String(mins).padStart(2, "0")}:
      {String(secs).padStart(2, "0")}
    </div>
  );
}