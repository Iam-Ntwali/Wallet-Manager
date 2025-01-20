import { auth } from "@/auth";
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import OverviewCharts from "@/components/Dashboard/Charts/OverviewCharts";

async function getWallets() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return await db.wallet.findMany({
    where: { userId: session.user.id },
    include: {
      transactions: true,
    },
  });
}

async function getTransactionStats() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const transactions = await db.transaction.findMany({
    where: {
      userId: session.user.id,
      date: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
  });

  const stats = {
    totalIncome: 0,
    totalExpenses: 0,
    recentTransactions: transactions.slice(0, 5),
  };

  transactions.forEach((t) => {
    if (t.type === "INCOME") {
      stats.totalIncome += t.amount;
    } else {
      stats.totalExpenses += t.amount;
    }
  });

  return stats;
}

export default async function DashboardPage() {
  const [wallets, stats] = await Promise.all([
    getWallets(),
    getTransactionStats(),
  ]);

  const chartData = stats?.recentTransactions.map((t) => ({
    name: format(new Date(t.date), "MMM dd"),
    amount: t.type === "EXPENSE" ? -t.amount : t.amount,
  }));

  if (!wallets.length) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">No active Account</h2>
        <Button
          asChild
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 ease-in-out"
        >
          <Link href="/dashboard/accounts/new">Click here, to get started</Link>
        </Button>
      </div>
    );
  }

  const totalBalance = wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

  return (
    <div className="space-y-8 text-gray-900">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <Button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 ease-in-out">
          <Plus className="mr-2 h-4 w-4" />
          <Link href="/dashboard/budgets">Set a budget</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalBalance.toLocaleString("en-US", {
                style: "currency",
                currency: "RWF",
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-700">Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {stats?.totalIncome.toLocaleString("en-US", {
                style: "currency",
                currency: "RWF",
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-700">Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {stats?.totalExpenses.toLocaleString("en-US", {
                style: "currency",
                currency: "RWF",
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Recent Transactions</CardTitle>
            <span>
              <Button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 ease-in-out">
                <Plus className="mr-2 h-4 w-4" />
                <Link href="/dashboard/transactions/new">New Transaction</Link>
              </Button>
            </span>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats?.recentTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      {format(new Date(transaction.date), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell
                      className={
                        transaction.type === "INCOME"
                          ? "text-blue-600"
                          : "text-purple-600"
                      }
                    >
                      {transaction.type === "INCOME" ? "+" : "-"}
                      {transaction.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "RWF",
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.type === "INCOME" ? "default" : "outline"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="md:col-span-1 space-y-6">
          <span>
            <OverviewCharts transactions={stats?.recentTransactions || []} />
          </span>
        </div>
      </div>
    </div>
  );
}
