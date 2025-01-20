"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Wallet } from "@prisma/client";

export default function AccountSelector({ accounts }: { accounts: Wallet[] }) {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an account" />
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account) => (
          <SelectItem key={account.id} value={account.id}>
            {account.name} - {account.balance} {account.currency}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
