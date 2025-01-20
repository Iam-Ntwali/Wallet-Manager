import { Wallet } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccountCard({ account }: { account: Wallet }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{account.name}</span>
          <span className="text-muted-foreground text-sm">{account.type}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">
          {account.balance.toLocaleString("en-US", {
            style: "currency",
            currency: account.currency,
          })}
        </p>
      </CardContent>
    </Card>
  );
}
