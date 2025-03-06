"use client";

import { Menu, User, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
// import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/authActions";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileSidebar } from "./MobileSidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function DashboardHeader() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  const UserAvatar = () => {
    if (isLoading) {
      return <Loader2 className="h-6 w-6 animate-spin text-gray-500" />;
    }

    return (
      <Avatar className="h-8 w-8">
        <AvatarImage
          src={session?.user?.image || undefined}
          alt={session?.user?.name || "User avatar"}
        />
        <AvatarFallback className="bg-blue-100">
          {session?.user?.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase() || <User className="h-4 w-4 text-blue-600" />}
        </AvatarFallback>
      </Avatar>
    );
  };

  return (
    <header className="sticky top-0 z-50 h-16 border-b flex items-center px-6 justify-between bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <MobileSidebar />
          </SheetContent>
        </Sheet>
        <Link
          href="/dashboard/overview"
          className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          WalletManager
        </Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="outline-none" aria-label="User menu">
            <UserAvatar />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user?.name || "User"}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => logout()}
            className="text-red-600 focus:text-red-600"
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
