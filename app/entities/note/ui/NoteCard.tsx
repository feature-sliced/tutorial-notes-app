import { Link } from "@remix-run/react";
import { twJoin } from "tailwind-merge";

const dateFormat = Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

interface NoteCardProps {
  id: string;
  title: string;
  createdAt: Date;
}

export function NoteCard({ id, title, createdAt }: NoteCardProps) {
  return (
    <Link to={`/notes/${id}`}>
      <article
        className={twJoin(
          "px-8 py-6 shadow-md rounded-2xl flex flex-col gap-1 bg-white text-neutral-900",
          "dark:bg-neutral-500 dark:text-neutral-100",
        )}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-neutral-600 dark:text-neutral-100">
          Created on {dateFormat.format(createdAt)}
        </p>
      </article>
    </Link>
  );
}
