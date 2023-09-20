import type { MetaFunction } from "@remix-run/node";
import type { loader } from "../api/loader";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `${data?.note.title} • FSD Notes` },
];
