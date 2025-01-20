"use client";

import { Transaction, Wallet } from "@prisma/client";
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

type TransactionWithWallet = Transaction & {
  wallet: Wallet;
};

export default function TransactionList({
  transactions,
}: {
  transactions: TransactionWithWallet[];
}) {
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Account</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              {format(new Date(transaction.date), "MMM d, yyyy")}
            </TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.wallet?.name || "N/A"}</TableCell>
            <TableCell>
              <Badge
                variant={
                  transaction.type === "INCOME" ? "success" : "destructive"
                }
              >
                {transaction.type}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              {formatCurrency(
                transaction.amount,
                transaction.wallet?.currency || "RWF"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
