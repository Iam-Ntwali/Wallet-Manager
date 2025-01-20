"use client";

import { routes } from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full bg-white/80 py-6">
      <nav className="space-y-2 px-2 mt-6">
        {routes.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gradient-to-tr hover:from-blue-600 hover:to-purple-600 hover:text-white duration-300 ease-out rounded-lg transition ",
                pathname === link.href
                  ? "bg-gradient-to-tr from-blue-600 to-purple-600 duration-300 ease-out  text-white"
                  : "text-gray-700"
              )}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
