import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="relative inline-block">
            <span className="text-9xl font-extrabold text-gray-200">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Oops!
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>

        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track to managing your finances.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center justify-center px-5 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-500">
        <p>
          Need help?{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
