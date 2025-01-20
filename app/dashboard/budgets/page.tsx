import { auth } from "@/auth";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import BudgetCard from "@/components/Dashboard/Budget/BudgetCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BudgetForm from "@/components/Dashboard/Budget/BudgetForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getBudgets() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.budget.findMany({
    where: { userId: session.user.id },
    include: {
      wallet: true,
    },

    orderBy: { endDate: "asc" },
  });
}
async function getWallets() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.wallet.findMany({
    where: { userId: session.user.id },
  });
}

export default async function BudgetsPage() {
  const [budgets, wallets] = await Promise.all([getBudgets(), getWallets()]);

  const overBudgetCount = budgets.filter((b) => b.spent > b.amount).length;
  const totalBudgeted = budgets.reduce((acc, b) => acc + b.amount, 0);
  const totalSpent = budgets.reduce((acc, b) => acc + b.spent, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "RWF",
    }).format(amount);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Budgeted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatCurrency(totalBudgeted)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatCurrency(totalSpent)}</p>
          </CardContent>
        </Card>

        <Card className={overBudgetCount > 0 ? "border-red-500" : ""}>
          <CardHeader>
            <CardTitle>Overspent Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{overBudgetCount}</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Budgets</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl text-gray-900">
            <DialogHeader>
              <DialogTitle>Create New Budget</DialogTitle>
              <DialogDescription>
                Set up a new budget to track your spending
              </DialogDescription>
            </DialogHeader>
            <BudgetForm wallets={wallets} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
}
