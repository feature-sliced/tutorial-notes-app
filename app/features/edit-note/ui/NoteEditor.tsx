import { useCallback, useRef } from "react";
import type { Note } from "@prisma/client";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import { useDebouncedCallback } from "use-debounce";

import { dateFormat } from "~/shared/ui";
import { MarkdownEditor } from "./MarkdownEditor";
import type { handleUpdate } from "../api/handleUpdate";

export function NoteEditor({
  title,
  createdAt,
  body,
}: Pick<Note, "title" | "createdAt" | "body">) {
  const actionData = useActionData<typeof handleUpdate>();
  const submit = useSubmit();
  const handleSubmit = useDebouncedCallback(submit, 400);
  const formRef = useRef<HTMLFormElement>(null);
  const submitForm = useCallback(
    () => handleSubmit(formRef.current),
    [handleSubmit, formRef],
  );

  return (
    <Form
      method="POST"
      className="flex flex-col flex-1 gap-1"
      onChange={(e) => handleSubmit(e.currentTarget)}
      ref={formRef}
    >
      <h1 className="text-xl font-semibold">
        <input
          name="title"
          defaultValue={actionData?.values.title ?? title}
          placeholder="Untitled"
          className="bg-transparent outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-400"
        />
      </h1>
      <p className="text-neutral-600 dark:text-neutral-100">
        Created on {dateFormat.format(createdAt)}
      </p>
      <div className="flex-1 prose prose-neutral dark:prose-invert max-w-none prose-p:my-2 whitespace-pre-wrap">
        <MarkdownEditor
          name="body"
          defaultValue={actionData?.values.body ?? body}
          placeholder="Write something…"
          onChange={submitForm}
        />
      </div>
      <input type="hidden" name="_action" value="update" />
    </Form>
  );
}
