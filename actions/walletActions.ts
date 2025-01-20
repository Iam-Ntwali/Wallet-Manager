"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { AccountType } from "@prisma/client";

type CreateAccountData = {
  name: string;
  type: AccountType;
  balance: number;
  currency: string;
  description?: string;
};

export async function createAccount(data: CreateAccountData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const account = await db.wallet.create({
    data: {
      ...data,
      userId: session.user.id,
    },
  });

  revalidatePath("/dashboard/overview");
  return account;
}
