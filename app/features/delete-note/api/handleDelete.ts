import type { Note, User } from "@prisma/client";
import { redirect } from "@remix-run/node";

import { prisma } from "~/db.server";

export async function handleDelete(noteId: Note["id"], userId: User["id"]) {
  try {
    await prisma.note.delete({
      where: { id: noteId, userId },
    });
  } finally {
    return redirect("/");
  }
}
