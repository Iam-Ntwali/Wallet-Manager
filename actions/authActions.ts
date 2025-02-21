"use server";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { db } from "@/db";

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

  revalidatePath("/dashboard/overview");
  return { success: true };
};

export const logout = async () => {
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

  // Log in the user after successful registration
  const result = await loginWithCredentials(email, password);
  return result.error ? { error: result.error } : { success: true };
};
