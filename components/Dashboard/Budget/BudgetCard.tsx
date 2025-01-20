"use client";

import { Budget, Wallet } from "@prisma/client";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

type BudgetCardProps = {
  budget: Budget & {
    wallet: Wallet;
  };
};

export default function BudgetCard({ budget }: BudgetCardProps) {
  const progress = (budget.spent / budget.amount) * 100;
  const remaining = budget.amount - budget.spent;
  const isOverBudget = remaining < 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: budget.wallet.currency || "USD",
    }).format(amount);
  };

  return (
    <Card className={isOverBudget ? "border-red-500" : ""}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span>{budget.category}</span>
            <Badge variant="outline" className="w-fit">
              {budget.wallet.name}
            </Badge>
          </div>
          <span className="text-sm font-normal">
            {format(new Date(budget.startDate), "MMM d")} -{" "}
            {format(new Date(budget.endDate), "MMM d, yyyy")}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Progress
            value={Math.min(progress, 100)}
            className="h-2"
            variant={isOverBudget ? "destructive" : "default"}
          />
          <div className="flex justify-between text-sm">
            <span>Spent: {formatCurrency(budget.spent)}</span>
            <span>Budget: {formatCurrency(budget.amount)}</span>
          </div>
        </div>

        <div
          className={`text-right font-semibold ${
            isOverBudget ? "text-red-500" : "text-green-500"
          }`}
        >
          {isOverBudget ? "Over budget by: " : "Remaining: "}
          {formatCurrency(Math.abs(remaining))}
        </div>
      </CardContent>
    </Card>
  );
}
