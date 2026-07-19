"use client";

import Quote from "./Quote";
import Background from "./Background";

export default function MotivationCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100 shadow-lg">

      <Background />

      <div className="relative z-10 p-6">

        <p className="text-sm font-semibold text-gray-600 uppercase">
          Daily Motivation
        </p>

        <Quote />

      </div>

    </div>
  );
}