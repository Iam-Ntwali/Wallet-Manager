import { db } from "@/db";
import { auth } from "@/auth";
import AccountSelector from "@/components/Dashboard/AccountSelector";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
async function getWallets() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.wallet.findMany({
    where: { userId: session.user.id },
  });
}

export default async function DashboardPage() {
  const wallets = await getWallets();

  if (!wallets.length) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">No active Account</h2>
        <Button asChild>
          <Link href="/dashboard/accounts/new">Create one, to get started</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <AccountSelector accounts={wallets} />
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Transaction
        </Button>
      </div>
      {/* We'll add dashboard content here later */}
    </div>
  );
}
