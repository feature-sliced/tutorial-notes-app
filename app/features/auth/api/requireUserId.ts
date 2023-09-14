import { redirect } from "@remix-run/node";

import { getUserIdFromSession } from "../model.server";

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
