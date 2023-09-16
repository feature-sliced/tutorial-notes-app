import { Link } from "@remix-run/react";

import { Card } from "~/shared/ui";
import { CreatedAt } from "./CreatedAt";

interface NoteCardProps {
  id: string;
  title: string;
  createdAt: Date;
}

export function NoteCard({ id, title, createdAt }: NoteCardProps) {
  return (
    <Link to={`/notes/${id}`}>
      <Card>
        <h1 className="text-xl font-semibold">{title}</h1>
        <CreatedAt date={createdAt} />
      </Card>
    </Link>
  );
}
