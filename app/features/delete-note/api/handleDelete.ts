import type { Note, User } from "@prisma/client";
import { redirect } from "@remix-run/node";

import { deleteNote } from "~/entities/note";

export async function handleDelete(noteId: Note["id"], userId: User["id"]) {
  try {
    await deleteNote({ id: noteId, userId });
  } finally {
    return redirect("/");
  }
}
