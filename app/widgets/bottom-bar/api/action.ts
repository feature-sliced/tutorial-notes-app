import type { ActionFunctionArgs } from "@remix-run/node";

import { requireUserId } from "~/features/auth";
import { handleCreate } from "~/features/create-note";

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);

  return handleCreate(userId);
}
