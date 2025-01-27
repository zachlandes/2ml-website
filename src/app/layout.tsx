import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2ML | AI & Data Engineering Solutions",
  description: "State-of-the-art AI solutions and data engineering for businesses. From RAG systems and chatbots to production data lakes and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen`}>
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
          {children}
        </main>
        <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-slate-400 text-sm">
              © {new Date().getFullYear()} 2ML. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
