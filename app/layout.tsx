import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const primaryFont = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home | Wallet Manager App 📊",
  description:
    "Get a glimpse of your money income and expense and manage your finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider session={null}>
      <html lang="en">
        <body
          className={`${primaryFont.variable} bg-black text-white antialiased font-sans`}
        >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
