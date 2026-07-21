import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={clsx(
            "w-full rounded-xl border border-slate-300 dark:border-slate-700",
            "bg-white dark:bg-slate-900",
            "px-4 py-3",
            "text-slate-900 dark:text-white",
            "placeholder:text-slate-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "transition-all duration-300",
            error && "border-red-500",
            className
          )}
          {...props}
        />

        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;