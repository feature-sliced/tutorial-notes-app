import { Form, useNavigation } from "@remix-run/react";
import { Plus } from "react-feather";

import { Button } from "~/shared/ui";

export function CreateNoteButton() {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" &&
    navigation.location.pathname === "/notes/new";

  return (
    <Form method="POST">
      <Button type="submit" disabled={isSubmitting}>
        <Plus /> {isSubmitting ? "Creating..." : "New"}
      </Button>
    </Form>
  );
}
