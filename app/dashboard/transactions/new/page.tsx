import { auth } from "@/auth";
import { db } from "@/db";
import TransactionForm from "@/components/Dashboard/Transactions/TransactionForm";

async function getWallets() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const wallets = await db.wallet.findMany({
    where: { userId: session.user.id },
  });

  return { wallets };
}

export default async function NewTransactionPage() {
  const data = await getWallets();

  if (!data) return null;

  return <TransactionForm wallets={data.wallets} />;
}
