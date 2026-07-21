import Card from "./Card";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <Card className="group cursor-pointer hover:-translate-y-2">
      <div className="text-blue-600 text-5xl mb-5">
        {icon}
      </div>

      <h3 className="font-semibold text-xl mb-3">
        {title}
      </h3>

      <p className="text-slate-500">
        {description}
      </p>
    </Card>
  );
}