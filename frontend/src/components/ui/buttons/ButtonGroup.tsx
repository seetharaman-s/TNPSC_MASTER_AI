import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ButtonGroup({ children }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {children}
    </div>
  );
}