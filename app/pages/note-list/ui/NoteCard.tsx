import { Link } from "@remix-run/react";

import { Card, dateFormat } from "~/shared/ui";

interface NoteCardProps {
  id: string;
  title: string;
  createdAt: Date;
}

export function NoteCard({ id, title, createdAt }: NoteCardProps) {
  return (
    <Link to={`/notes/${id}`}>
      <Card>
        <h1 className="text-xl font-semibold">{title || "Untitled"}</h1>
        <p className="text-neutral-600 dark:text-neutral-100">
          Created on {dateFormat.format(createdAt)}
        </p>
      </Card>
    </Link>
  );
}
