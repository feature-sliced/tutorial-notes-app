import type { User } from "@prisma/client";
import { Form, useNavigation } from "@remix-run/react";
import { LogOut } from "react-feather";

import { Button } from "~/shared/ui";

export function LogoutButton({ user }: { user: User }) {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" &&
    navigation.location.pathname === "/login";

  return (
    <Form method="POST" action="/login">
      <Button name="_action" value="sign-out" disabled={isSubmitting}>
        <LogOut />{" "}
        {isSubmitting ? "Signing out…" : `Sign out (${user.username})`}
      </Button>
    </Form>
  );
}
