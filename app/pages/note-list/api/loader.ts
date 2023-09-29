import { type LoaderFunctionArgs, json } from "@remix-run/node";

import { requireUserId } from "~/features/auth";
import { prisma } from "~/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);

  const noteListItems = await prisma.note.findMany({
    select: { id: true, title: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    where: { userId },
  });

  return json({ noteListItems });
}

