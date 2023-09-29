import type { User } from "@prisma/client";

import { useMatchesData } from "~/shared/loaders";

export function useCurrentUser(): User | null {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return null;
  }
  return data.user;
}

export function isUser(user: unknown): user is User {
  return (
    typeof user === "object" &&
    user !== null &&
    "username" in user &&
    typeof user.username === "string"
  );
}
