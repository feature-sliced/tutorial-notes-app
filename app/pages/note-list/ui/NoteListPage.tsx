import { useLoaderData } from "@remix-run/react";

import { NoteCard } from "~/entities/note";
import type { loader } from "../api/loader";

export function NoteListPage() {
  const { noteListItems } = useLoaderData<typeof loader>();

  return (
    <div className="p-4 flex flex-col gap-5">
      {noteListItems.map((noteListItem) => (
        <NoteCard
          {...noteListItem}
          createdAt={new Date(noteListItem.createdAt)}
          key={noteListItem.id}
        />
      ))}
    </div>
  );
}
