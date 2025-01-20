import { auth } from "@/auth";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import AccountCard from "@/components/Dashboard/Wallets/WalletCard";

async function getAccounts() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.wallet.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });
}

export default async function AccountsPage() {
  const accounts = await getAccounts();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Accounts</h1>
        <Button asChild>
          <Link href="/dashboard/accounts/new">
            <Plus className="mr-2 h-4 w-4" />
            New Account
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
