import invariant from "tiny-invariant";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";
import { json } from "@remix-run/node";
import { createUserSession } from "../model.server";

export async function handleLogin(formFields: Record<string, FormDataEntryValue>, request: Request, redirectTo: string) {
  try {
    const user = await verifySignIn(formFields.username, formFields.password);
    return createUserSession({
      redirectTo,
      request,
      userId: user.id,
    });
  } catch {
    return json(
      {
        error: "Invalid username or password",
        values: formFields,
      },
      { status: 400 },
    );
  }
}

async function verifySignIn(
  username: FormDataEntryValue,
  attemptedPassword: FormDataEntryValue,
) {
  invariant(typeof username === "string");
  invariant(typeof attemptedPassword === "string");

  const { password, ...user } =
    (await prisma.user.findUnique({
      where: { username },
      include: {
        password: true,
      },
    })) ?? {};

  if (!password || !("id" in user)) {
    throw new Error("User not found");
  }

  const isValid = await bcrypt.compare(attemptedPassword, password.hash);

  if (!isValid) {
    throw new Error("Invalid password");
  }

  return user;
}
