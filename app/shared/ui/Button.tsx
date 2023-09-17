import type { ComponentProps } from "react";
import { cva } from "class-variance-authority";
import { Link, type LinkProps } from "@remix-run/react";

const buttonStyles = cva(
  "p-2 inline-flex gap-2 items-center font-semibold rounded-lg bg-white dark:bg-transparent",
  {
    variants: {
      intent: {
        primary: "text-blue-500 dark:text-blue-300",
        danger: "text-red-500 dark:text-red-300",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

export function Button({
  danger = false,
  ...props
}: { danger?: boolean } & ComponentProps<"button">) {
  return (
    <button
      className={buttonStyles({ intent: danger ? "danger" : "primary" })}
      {...props}
    />
  );
}

export function ButtonLink(props: LinkProps) {
  // This rule is for the consumer to follow
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <Link className={buttonStyles()} {...props} />;
}
