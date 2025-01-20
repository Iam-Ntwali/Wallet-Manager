import { auth } from "@/auth";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import TransactionsClient from "@/components/Dashboard/Transactions/TransactionsClient";

async function getTransactions() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.transaction.findMany({
    where: { userId: session.user.id },
    include: {
      wallet: true,
    },
    orderBy: {
      date: "desc",
    },
  });
}

async function getWallets() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.wallet.findMany({
    where: { userId: session.user.id },
  });
}

export default async function TransactionsPage() {
  const [transactions, wallets] = await Promise.all([
    getTransactions(),
    getWallets(),
  ]);

  return (
    <div className="container mx-auto py-6 text-gray-900">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 ease-in-out">
          <Plus className="mr-2 h-4 w-4" />
          <Link href="/dashboard/transactions/new">New Transaction</Link>
        </Button>
      </div>

      <TransactionsClient
        initialTransactions={transactions}
        wallets={wallets}
      />
    </div>
  );
}
