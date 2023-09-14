import { json, type LoaderFunctionArgs } from "@remix-run/node";

import { getUserById } from "~/entities/user";
import { getUserIdFromSession } from "../model.server";
import { logout } from "./logout";

export async function loadCurrentUser({ request }: LoaderFunctionArgs) {
  const userId = await getUserIdFromSession(request);

  if (userId === undefined) {
    return json({ user: null });
  }

  const user = await getUserById(userId);
  if (user === null) {
    throw await logout(request);
  }

  return json({ user });
}
