import type { User } from "@prisma/client";

export function isUser(user: unknown): user is User {
  return (
    typeof user === "object" &&
    user !== null &&
    "username" in user &&
    typeof user.username === "string"
  );
}
