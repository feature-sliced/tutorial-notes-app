import type { User } from "@prisma/client";

import { useMatchesData } from "~/shared/loaders";
import { isUser } from "./isUser";

export function useCurrentUser(): User | null {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return null;
  }
  return data.user;
}
