import { Form, useNavigation } from "@remix-run/react";
import { Trash2 } from "react-feather";

import { Button } from "~/shared/ui";

export function DeleteNoteButton() {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" &&
    navigation.formData?.get("_action") === "delete";

  return (
    <Form method="POST">
      <Button
        danger
        type="submit"
        name="_action"
        value="delete"
        disabled={isSubmitting}
      >
        <Trash2 /> {isSubmitting ? "Deleting..." : "Delete"}
      </Button>
    </Form>
  );
}
