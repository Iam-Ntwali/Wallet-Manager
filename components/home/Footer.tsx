"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="text-sm flex items-center justify-between text-gray-400">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://iamntwali.me"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Ntwali
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} WalletManager. All rights reserved.
          </p>

          <ul className="gap-2 flex justify-center items-center">
            <li>
              <Link
                href="/privacy"
                className="text-gray-400 underline hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
