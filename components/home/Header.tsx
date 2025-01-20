"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WalletManager
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-blue-600 font-normal"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 font-normal"
            >
              How it Works
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-blue-600 font-normal"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/sign-in"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Get Started
              </Link>
            )}
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 font-semibold" />
          </button>
        </div>

        {/* Mobile Nav menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-transparent space-y-2 p-4 border-t flex flex-col gap-2 items-center`}
        >
          <Link
            href="#features"
            className="text-gray-700 hover:text-blue-600 font-normal"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-blue-600 font-normal"
          >
            How it Works
          </Link>
          <Link
            href="#faq"
            className="text-gray-700 hover:text-blue-600 font-normal"
          >
            FAQ
          </Link>
          <hr className="my-2" />
          {session ? (
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>
          ) : (
            <Link
              href="/auth/sign-in"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
