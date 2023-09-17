import type { User } from "@prisma/client";
import { redirect } from "@remix-run/node";

import { createNote } from "~/entities/note";

export async function handleCreate(userId: User["id"]) {
  const note = await createNote(userId);

  return redirect(`/notes/${note.id}`);
}
