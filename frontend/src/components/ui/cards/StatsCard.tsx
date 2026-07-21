import Card from "./Card";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon?: ReactNode;
}

export default function StatsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>
        </div>

        <div className="text-blue-600 text-4xl">
          {icon}
        </div>
      </div>
    </Card>
  );
}