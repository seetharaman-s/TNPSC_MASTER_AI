"use client";

export default function Background() {
  return (
    <>
      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-yellow-300/30 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-orange-300/30 blur-2xl" />

      <div className="absolute right-10 bottom-6 text-6xl opacity-20">
        🌄
      </div>
    </>
  );
}