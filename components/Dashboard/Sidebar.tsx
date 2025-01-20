"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Receipt, PieChart } from "lucide-react";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard/overview",
  },
  {
    label: "Accounts",
    icon: Wallet,
    href: "/dashboard/accounts",
  },
  {
    label: "Transactions",
    icon: Receipt,
    href: "/dashboard/transactions",
  },
  {
    label: "Budgets",
    icon: PieChart,
    href: "/dashboard/budgets",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card text-card-foreground border-r">
      <div className="px-3 py-2">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gradient-to-tr hover:from-blue-600 hover:to-purple-600 hover:text-white duration-300 ease-out rounded-lg transition ",
                pathname === route.href
                  ? "bg-gradient-to-tr from-blue-600 to-purple-600 duration-300 ease-out  text-white"
                  : ""
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
