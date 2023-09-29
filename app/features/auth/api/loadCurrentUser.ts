import { json, type LoaderFunctionArgs } from "@remix-run/node";

import { prisma } from "~/db.server";
import { getUserIdFromSession } from "../model.server";
import { logout } from "./logout";

export async function loadCurrentUser({ request }: LoaderFunctionArgs) {
  const userId = await getUserIdFromSession(request);

  if (userId === undefined) {
    return json({ user: null });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user === null) {
    throw await logout(request);
  }

  return json({ user });
}
