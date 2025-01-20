"use client";

import { Transaction } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

type ChartProps = {
  transactions: Transaction[];
};

export default function OverviewCharts({ transactions }: ChartProps) {
  const chartData = transactions.map((t) => ({
    name: format(new Date(t.date), "MMM dd"),
    amount: t.type === "EXPENSE" ? -t.amount : t.amount,
  }));

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Cash Flow</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
