import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon?: ReactNode;
}

export default function GradientCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}