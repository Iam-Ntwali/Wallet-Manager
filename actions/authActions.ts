"use server";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const loginByProvider = async (provider: string) => {
  await signIn(provider, { redirectTo: "/dashboard" });
  revalidatePath("/dashboard");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};
