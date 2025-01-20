"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="text-sm flex items-center text-center justify-between text-gray-400">
          <p>
            © {new Date().getFullYear()} WalletManager. All rights reserved.
          </p>
          <ul className="gap-2 flex justify-center items-center">
            <li>
              <Link href="#privacy" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#terms" className="text-gray-400 hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
