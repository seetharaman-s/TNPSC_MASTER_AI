import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export default function IconButton({
  icon,
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "h-10 w-10 rounded-full",
        "flex items-center justify-center",
        "bg-blue-600 text-white",
        "hover:bg-blue-700",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}