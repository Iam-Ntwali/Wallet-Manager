"use server";
import { auth, signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { v4 as uuidv4 } from "uuid";

async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export const loginWithCredentials = async (email: string, password: string) => {
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.error) {
    return { error: "Invalid credentials" };
  }

  const session = await auth();

  if (!session?.user?.id) {
    return { error: "Authentication failed" };
  }

  await db.session.create({
    data: {
      sessionToken: uuidv4(),
      userId: session.user.id,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  revalidatePath("/dashboard/overview");
  return { success: true };
};

export const logout = async () => {
  const session = await auth();

  const userSession = await db.session.findFirst({
    where: {
      userId: session?.user?.id,
    },
  });

  if (userSession) {
    await db.session.delete({
      where: {
        id: userSession.id,
      },
    });
  }

  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "User already exists" };
  }

  const hashedPassword = await hashString(password);

  await db.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return { success: "User created successfully" };
};
