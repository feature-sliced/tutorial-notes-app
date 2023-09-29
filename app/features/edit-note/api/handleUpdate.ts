import type { Note, User } from "@prisma/client";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { prisma } from "~/db.server";

export async function handleUpdate(
  formFields: Record<string, FormDataEntryValue>,
  noteId: Note["id"],
  userId: User["id"],
) {
  const { title, body } = formFields;
  invariant(typeof title === "string", "title should be a string");
  invariant(typeof body === "string", "body should be a string");

  try {
    await prisma.note.update({
      where: { id: noteId, userId },
      data: { title, body },
    });

    return json({ values: { title, body } });
  } catch {
    return redirect("/");
  }
}
