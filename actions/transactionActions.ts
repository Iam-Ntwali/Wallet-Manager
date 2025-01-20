"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { TransactionType } from "@prisma/client";

type CreateTransactionData = {
  type: TransactionType;
  amount: number;
  description: string;
  walletId: string;
  category: string;
  subCategory?: string;
};

export async function createTransaction(data: CreateTransactionData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const result = await db.$transaction(async (tx) => {
    const transaction = await tx.transaction.create({
      data: {
        type: data.type,
        amount: data.amount,
        description: data.description,
        category: data.category,
        subCategory: data.subCategory,
        user: {
          connect: {
            id: session.user?.id,
          },
        },
        wallet: {
          connect: {
            id: data.walletId,
          },
        },
      },
    });

    const wallet = await tx.wallet.findUnique({
      where: { id: data.walletId },
    });

    if (!wallet) throw new Error("Wallet not found");

    const newBalance =
      data.type === TransactionType.INCOME
        ? wallet.balance + data.amount
        : wallet.balance - data.amount;

    await tx.wallet.update({
      where: { id: data.walletId },
      data: { balance: newBalance },
    });

    return transaction;
  });

  revalidatePath("/dashboard/transactions");
  revalidatePath("/dashboard/accounts");
  return result;
}
