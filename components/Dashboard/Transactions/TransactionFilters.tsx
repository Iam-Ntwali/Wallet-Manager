"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TransactionType, Wallet } from "@prisma/client";
import { mockCategories } from "@/data/Categories";

type FilterProps = {
  wallets: Wallet[];
  onFilterChange: (filters: FilterValues) => void;
};

type FilterValues = {
  type?: TransactionType;
  walletId?: string;
  category?: string;
  sortBy?: "date" | "amount";
  sortOrder?: "asc" | "desc";
};

export default function TransactionFilters({
  wallets,
  onFilterChange,
}: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select
        onValueChange={(value) =>
          onFilterChange({ type: value as TransactionType })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Transaction Type" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(TransactionType).map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFilterChange({ walletId: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Wallet" />
        </SelectTrigger>
        <SelectContent>
          {wallets.map((wallet) => (
            <SelectItem key={wallet.id} value={wallet.id}>
              {wallet.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFilterChange({ category: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {mockCategories.map((category) => (
            <SelectItem key={category.name} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) =>
          onFilterChange({ sortBy: value as "date" | "amount" })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="amount">Amount</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={() => onFilterChange({})}>
        Reset Filters
      </Button>
    </div>
  );
}
