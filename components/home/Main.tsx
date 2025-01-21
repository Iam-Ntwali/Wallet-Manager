import { auth } from "@/auth";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const session = auth();
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Smart Money Management
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track expenses, set budgets, and achieve your financial goals with
            WalletManager&apos;s intuitive expense tracking solution.
          </p>
          <Link
            href={!session ? `/auth/sign-in` : `/dashboard/overview`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 ease-in-out"
          >
            Start for Free <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
