import { prisma } from "~/db.server";

export function getNoteListItems() {
  return prisma.note.findMany({
    select: { id: true, title: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });
}
