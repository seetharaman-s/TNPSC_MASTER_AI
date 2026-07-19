"use client";

const quotes = [
  "வெற்றி என்பது ஒரு நாளில் கிடைக்காது; தினமும் செய்யும் முயற்சியின் பலன்.",
  "நம்பிக்கை இருந்தால் முடியாதது எதுவும் இல்லை.",
  "இன்று படி, நாளை வெற்றி பெறு.",
  "ஒவ்வொரு நாளும் ஒரு புதிய வாய்ப்பு.",
  "தொடர்ந்து முயற்சி செய், வெற்றி நிச்சயம்."
];

export default function Quote() {
  const today = new Date().getDate();

  const quote = quotes[today % quotes.length];

  return (
    <blockquote className="mt-4 text-lg leading-8 font-medium text-gray-800">
      "{quote}"
    </blockquote>
  );
}