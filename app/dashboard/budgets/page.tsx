import { auth } from "@/auth";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import BudgetCard from "@/components/Dashboard/Budget/BudgetCard";

async function getBudgets() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.budget.findMany({
    where: { userId: session.user.id },
    include: {
      category: true,
    },
    orderBy: { endDate: "asc" },
  });
}

export default async function BudgetsPage() {
  const budgets = await getBudgets();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Budgets</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Budget
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
}
