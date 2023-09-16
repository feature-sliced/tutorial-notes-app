import type { Note, User } from "@prisma/client";
import { prisma } from "~/db.server";

export function getNoteListItems(userId: User["id"]) {
  return prisma.note.findMany({
    select: { id: true, title: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    where: { userId },
  });
}

export function getNote({
  id,
  userId,
}: Pick<Note, "id"> & {
  userId: User["id"];
}) {
  return prisma.note.findFirst({
    select: { id: true, body: true, createdAt: true, title: true },
    where: { id, userId },
  });
}
