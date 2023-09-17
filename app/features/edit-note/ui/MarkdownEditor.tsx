import { useCallback, useState } from "react";
import {
  Editor,
  defaultValueCtx,
  editorViewOptionsCtx,
  rootAttrsCtx,
  rootCtx,
} from "@milkdown/core";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import {
  placeholder as placeholderPlugin,
  placeholderCtx,
} from "milkdown-plugin-placeholder";

interface MilkdownInternalProps {
  defaultValue: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

export function MarkdownEditor({
  name,
  defaultValue,
  placeholder,
  onChange,
}: MilkdownInternalProps & {
  name: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [setValue, onChange],
  );

  return (
    <MilkdownProvider>
      <input type="hidden" name={name} value={value} />
      <MilkdownInternal
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </MilkdownProvider>
  );
}

function MilkdownInternal({
  defaultValue,
  placeholder,
  onChange,
}: MilkdownInternalProps) {
  useEditor(
    (root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, defaultValue);
          if (placeholder !== undefined) {
            ctx.set(placeholderCtx, placeholder);
          }
          ctx.update(editorViewOptionsCtx, (prev) => ({
            ...prev,
            attributes: {
              class: "focus-visible:outline-none h-full",
            },
          }));
          ctx.update(rootAttrsCtx, (prev) => ({ ...prev, class: "h-full" }));

          const listener = ctx.get(listenerCtx);

          listener.markdownUpdated((_ctx, markdown, prevMarkdown) => {
            if (markdown !== prevMarkdown) {
              onChange(markdown);
            }
          });
        })
        .use(listener)
        .use(placeholderPlugin)
        .use(commonmark),
    [onChange, placeholder],
  );

  return <Milkdown />;
}
