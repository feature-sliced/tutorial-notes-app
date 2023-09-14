import type { ActionFunctionArgs } from "@remix-run/node";

import { logout, handleLogin } from "~/features/auth";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { _action, ...formFields } = Object.fromEntries(formData);

  const redirectTo =
    typeof formFields.redirectTo === "string" ? formFields.redirectTo : "/";

  if (_action === "log-in") {
    return handleLogin(formFields, request, redirectTo);
  } else {
    return logout(request);
  }
}
