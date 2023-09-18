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

export function updateNote({
  title,
  body,
  id,
  userId,
}: Pick<Note, "title" | "body" | "id"> & {
  userId: User["id"];
}) {
  return prisma.note.update({
    where: { id, userId },
    data: { title, body },
  });
}

export function createNote(userId: User["id"]) {
  return prisma.note.create({
    data: {
      title: "",
      body: "",
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteNote({
  id,
  userId,
}: Pick<Note, "id"> & { userId: User["id"] }) {
  return prisma.note.delete({
    where: { id, userId },
  });
}
