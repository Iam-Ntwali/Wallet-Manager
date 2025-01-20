"use client";

import { Transaction, Wallet } from "@prisma/client";
import { useState, useMemo } from "react";
import TransactionList from "@/components/Dashboard/Transactions/TransactionList";
import TransactionFilters from "@/components/Dashboard/Transactions/TransactionFilters";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { format } from "date-fns";

type FilterValues = {
  type?: string;
  walletId?: string;
  category?: string;
  sortBy?: "date" | "amount";
  sortOrder?: "asc" | "desc";
};

type TransactionWithWallet = Transaction & {
  wallet: Wallet;
};

type TransactionPageProps = {
  initialTransactions: TransactionWithWallet[];
  wallets: Wallet[];
};

export default function TransactionsClient({
  initialTransactions,
  wallets,
}: TransactionPageProps) {
  const [filters, setFilters] = useState<FilterValues>({});

  const filteredTransactions = useMemo(() => {
    let result = [...initialTransactions];

    if (filters.type) {
      result = result.filter((t) => t.type === filters.type);
    }

    if (filters.walletId) {
      result = result.filter((t) => t.walletId === filters.walletId);
    }

    if (filters.category) {
      result = result.filter((t) => t.category === filters.category);
    }

    if (filters.sortBy) {
      result.sort((a, b) => {
        if (filters.sortBy === "date") {
          return filters.sortOrder === "desc"
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return filters.sortOrder === "desc"
          ? b.amount - a.amount
          : a.amount - b.amount;
      });
    }

    return result;
  }, [initialTransactions, filters]);

  const downloadTransactions = () => {
    const csvContent = [
      // Headers
      ["Date", "Description", "Category", "Account", "Type", "Amount"].join(
        ","
      ),
      // Data rows
      ...filteredTransactions.map((t) =>
        [
          format(new Date(t.date), "yyyy-MM-dd"),
          t.description,
          t.category,
          t.wallet.name,
          t.type,
          t.amount.toString(),
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 mt-16">
      <div className="flex justify-between items-center">
        <TransactionFilters wallets={wallets} onFilterChange={setFilters} />
        <Button onClick={downloadTransactions} variant="outline">
          <Download className="mr-1 h-4 w-4" />
          Download CSV
        </Button>
      </div>
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}
