import type { Note, User } from "@prisma/client";
import { prisma } from "~/db.server";

export function getNoteListItems(userId: User["id"]) {
  return prisma.note.findMany({
    select: { id: true, title: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    where: { userId },
  });
}
