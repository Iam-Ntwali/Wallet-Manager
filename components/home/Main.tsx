import { auth } from "@/auth";
import {
  ArrowRight,
  ChevronDown,
  CreditCard,
  LineChart,
  Shield,
  Wallet,
} from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const session = auth();

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-70"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Money Management
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Track expenses, set budgets, and achieve your financial goals with
              WalletManager&apos;s intuitive expense tracking solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href={!session ? `/auth/sign-in` : `/dashboard/overview`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
              >
                Start for Free{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                Learn More <ChevronDown className="ml-2" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-blue-600 mb-1">
                  <Shield className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Secure</span>
                </div>
                <p className="text-xs text-gray-500">Bank-level security</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-blue-600 mb-1">
                  <CreditCard className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Free</span>
                </div>
                <p className="text-xs text-gray-500">No credit card required</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-blue-600 mb-1">
                  <LineChart className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Insights</span>
                </div>
                <p className="text-xs text-gray-500">Clear analytics</p>
              </div>
            </div>
          </div>

          {/* Hero image/mockup */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-tr from-gray-100 to-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 opacity-80"></div>
              <div className="absolute inset-1 border border-gray-200 rounded-2xl"></div>

              {/* You can replace this with an actual screenshot/mockup of your app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Wallet Manager App
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Your financial dashboard preview
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
