import { redirect, type ActionFunctionArgs } from "@remix-run/node";

import { requireUserId } from "~/features/auth";
import { prisma } from "~/db.server";

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);

  const note = await prisma.note.create({
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

  return redirect(`/notes/${note.id}`);
}
