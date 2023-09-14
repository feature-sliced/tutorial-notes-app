import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import { LogIn } from "react-feather";

import { Button, TextField } from "~/shared/ui";
import type { handleLogin } from "../api/handleLogin";

export function LoginForm() {
  const navigation = useNavigation();
  const actionData = useActionData<typeof handleLogin>();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";

  return (
    <Form method="POST" action="/login">
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <fieldset
        disabled={navigation.state === "submitting"}
        className="flex flex-col gap-4"
      >
        <TextField
          label="Username"
          name="username"
          placeholder="alice"
          defaultValue={
            typeof actionData?.values.username === "string"
              ? actionData?.values.username
              : undefined
          }
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          defaultValue={
            typeof actionData?.values.password === "string"
              ? actionData?.values.password
              : undefined
          }
        />

        {actionData?.error && (
          <p className="text-red-600 dark:text-red-300">{actionData.error}</p>
        )}

        <div className="flex justify-end">
          <Button name="_action" value="log-in">
            <LogIn />{" "}
            {navigation.state === "submitting" ? "Signing in…" : "Sign in"}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
}
