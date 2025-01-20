"use client";

import { Transaction, Wallet } from "@prisma/client";
import { useState, useMemo } from "react";
import TransactionList from "@/components/Dashboard/Transactions/TransactionList";
import TransactionFilters from "@/components/Dashboard/Transactions/TransactionFilters";

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

  return (
    <div className="space-y-6">
      <TransactionFilters wallets={wallets} onFilterChange={setFilters} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}
