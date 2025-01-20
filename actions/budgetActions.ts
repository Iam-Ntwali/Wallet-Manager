"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

type CreateBudgetData = {
  amount: number;
  startDate: Date;
  endDate: Date;
  category: string;
  subCategory?: string;
  walletId: string;
};

export async function createBudget(data: CreateBudgetData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const budget = await db.budget.create({
    data: {
      amount: data.amount,
      startDate: data.startDate,
      endDate: data.endDate,
      category: data.category,
      subCategory: data.subCategory,
      walletId: data.walletId,
      userId: session.user.id,
      spent: 0,
    },
  });

  revalidatePath("/dashboard/budgets");
  return budget;
}
