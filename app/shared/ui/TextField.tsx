import { type ComponentProps, useId } from "react";
import { twJoin } from "tailwind-merge";

export function TextField({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={twJoin(
          "px-4 py-3 text-neutral-900 bg-neutral-50 placeholder:text-neutral-400 rounded-lg",
          "dark:bg-neutral-400 dark:placeholder:text-neutral-600",
        )}
        id={id}
        {...props}
      />
    </div>
  );
}
