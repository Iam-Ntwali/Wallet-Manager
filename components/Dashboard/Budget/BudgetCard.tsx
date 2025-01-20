import { Budget } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function BudgetCard({ budget }: { budget: Budget }) {
  const progress = (budget.spent / budget.amount) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Name</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-2" />
        <div className="flex justify-between text-sm">
          <span>Spent: {budget.spent}</span>
          <span>Budget: {budget.amount}</span>
        </div>
      </CardContent>
    </Card>
  );
}
