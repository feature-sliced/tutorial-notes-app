import { ArrowLeft } from "react-feather";
import { useLoaderData } from "@remix-run/react";

import { NoteEditor } from "~/features/edit-note";
import { DeleteNoteButton } from "~/features/delete-note";
import { ButtonLink, Card } from "~/shared/ui";
import type { loader } from "../api/loader";

export function EditNotePage() {
  const { note } = useLoaderData<typeof loader>();

  return (
    <div className="m-4 flex-1">
      <Card className="h-full">
        <NoteEditor {...note} createdAt={new Date(note.createdAt)} />
        <div className="flex justify-between">
          <ButtonLink to="/">
            <ArrowLeft /> Back
          </ButtonLink>
          <DeleteNoteButton />
        </div>
      </Card>
    </div>
  );
}
