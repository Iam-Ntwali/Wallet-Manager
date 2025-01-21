"use server";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { hash } from "bcryptjs";
import { db } from "@/db";

export const loginByProvider = async (provider: string) => {
  await signIn(provider, { redirectTo: "/dashboard/overview" });
  console.log("Redirecting to /dashboard/overview");
  revalidatePath("/dashboard/overview");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
  revalidatePath("/auth/sign-in");
  revalidatePath("/dashboard/overview");
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

  const hashedPassword = await hash(password, 10);

  await db.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return { success: "User created successfully" };
};
