import { type LoaderFunctionArgs, json } from "@remix-run/node";

import { requireUserId } from "~/features/auth";
import { getNoteListItems } from "~/entities/note";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);

  return json({
    noteListItems: await getNoteListItems(userId),
  });
}
