"use client";

type Props = {
  icon: string;
  title: string;
  value: string;
  color: string;
};

export default function ProgressItem({
  icon,
  title,
  value,
  color,
}: Props) {
  return (
    <div className="border rounded-2xl p-4 text-center">

      <div className="text-3xl">
        {icon}
      </div>

      <p className="text-gray-500 mt-2 text-sm">
        {title}
      </p>

      <h3 className={`font-bold text-xl ${color}`}>
        {value}
      </h3>

    </div>
  );
}