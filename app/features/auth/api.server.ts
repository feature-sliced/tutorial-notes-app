import { json, redirect, type LoaderArgs } from "@remix-run/node";

import { getUserById } from "~/entities/user";
import { getUserIdFromSession, sessionStorage } from "./model.server";

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
) {
  const userId = await getUserIdFromSession(request);

  if (userId === undefined) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }

  return userId;
}

export async function loadCurrentUser({ request }: LoaderArgs) {
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

export async function logout(request: Request) {
  const cookie = request.headers.get("Cookie");
  const session = await sessionStorage.getSession(cookie);

  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
