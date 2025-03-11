import { Bell, PieChart, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Simplify your financial life with our powerful yet intuitive wallet
            management tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Track Expenses
            </h3>
            <p className="text-gray-300">
              Easily record and categorize your expenses across multiple
              accounts. Get insights on your spending habits instantly.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-600/30">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Budget Alerts
            </h3>
            <p className="text-gray-300">
              Set personalized budgets and get timely notifications when
              you&apos;re approaching your limits. Stay in control of your
              finances.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-900/20">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/30">
              <PieChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Visual Reports
            </h3>
            <p className="text-gray-300">
              Understand your spending patterns with detailed visual reports and
              analytics. Make informed decisions with clear financial insights.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
          >
            Start Managing Your Money
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
