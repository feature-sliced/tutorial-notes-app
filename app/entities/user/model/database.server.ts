import type { User } from "@prisma/client";

import { prisma } from "~/db.server";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}
