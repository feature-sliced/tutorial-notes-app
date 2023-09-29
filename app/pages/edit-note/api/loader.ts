import { json, type LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { requireUserId } from "~/features/auth";
import { prisma } from "~/db.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const note = await prisma.note.findFirst({
    select: { id: true, body: true, createdAt: true, title: true },
    where: { id: params.noteId, userId },
  });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ note });
};
