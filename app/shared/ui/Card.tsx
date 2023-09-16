import type { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twJoin(
        "px-8 py-6 shadow-md rounded-2xl flex flex-col gap-1 bg-white text-neutral-900",
        "dark:bg-neutral-500 dark:text-neutral-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
