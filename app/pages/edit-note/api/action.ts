import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { requireUserId } from "~/features/auth";
import { handleUpdate } from "~/features/edit-note";

export async function action({ request, params }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const formData = await request.formData();
  const { _action, ...formFields } = Object.fromEntries(formData);

  if (_action === "update") {
    return handleUpdate(formFields, params.noteId, userId);
  }

  return redirect("/");
}
