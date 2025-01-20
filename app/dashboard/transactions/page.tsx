import { auth } from "@/auth";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TransactionList from "@/components/Dashboard/Transactions/TransactionList";
import Link from "next/link";
// import TransactionFilters from "@/components/Dashboard/TransactionFilters";

async function getTransactions() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.transaction.findMany({
    where: { userId: session.user.id },
    include: {
      account: true,
    },
    orderBy: { date: "desc" },
  });
}

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          <Link href="/dashboard/transactions/new">New Transaction</Link>
        </Button>
      </div>

      {/* <TransactionFilters /> */}
      <TransactionList transactions={transactions} />
    </div>
  );
}
