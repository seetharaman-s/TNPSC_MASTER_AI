import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainContainer({
  children,
}: Props) {

  return (

    <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900">

      {children}

    </main>

  );

}