import type { Note, User } from "@prisma/client";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { updateNote } from "~/entities/note";

export async function handleUpdate(
  formFields: Record<string, FormDataEntryValue>,
  noteId: Note["id"],
  userId: User["id"],
) {
  const { title, body } = formFields;
  invariant(typeof title === "string", "title should be a string");
  invariant(typeof body === "string", "body should be a string");

  try {
    await updateNote({
      title,
      body,
      id: noteId,
      userId,
    });

    return json({ values: { title, body } });
  } catch {
    return redirect("/");
  }
}
