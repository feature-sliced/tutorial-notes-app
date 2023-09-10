import { json } from "@remix-run/node";

import { getNoteListItems } from "~/entities/note";

export async function loader() {
  return json({
    noteListItems: await getNoteListItems(),
  });
}
