"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 font-normal"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  const ActionButton = ({ mobile = false }) => {
    if (isLoading) {
      return (
        <div className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg animate-pulse">
          Loading...
        </div>
      );
    }

    return session ? (
      <Link
        href="/dashboard/overview"
        className={cn(
          "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          mobile && "w-full text-center"
        )}
        onClick={() => setIsOpen(false)}
      >
        Go to Dashboard
      </Link>
    ) : (
      <Link
        href="/auth/sign-in"
        className={cn(
          "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          mobile && "w-full text-center"
        )}
        onClick={() => setIsOpen(false)}
      >
        Get Started
      </Link>
    );
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              WalletManager
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ActionButton />
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 font-semibold" />
          </button>
        </div>

        {/* Mobile Nav menu */}
        <nav
          className={cn(
            "md:hidden bg-transparent space-y-2 p-4 border-t",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-4">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <hr className="my-2" />
            <ActionButton mobile />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
