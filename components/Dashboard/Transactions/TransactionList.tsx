import { Transaction } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionList({
  transactions,
}: {
  transactions: any[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Account</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              {new Date(transaction.date).toLocaleDateString()}
            </TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category.name}</TableCell>
            <TableCell>{transaction.account.name}</TableCell>
            <TableCell className="text-right">
              {transaction.amount.toLocaleString("en-US", {
                style: "currency",
                currency: transaction.account.currency,
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
