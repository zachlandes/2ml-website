import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const description =
  "We are two builders with product judgment, architecture and engineering in the same heads. We ship AI systems from prototype to production without a hand-off chain, because the people who understand your problem are the people who build it.";

export const metadata: Metadata = {
  metadataBase: new URL("https://2ml.ai"),
  title: {
    default: "2ML | The right thing, built well.",
    template: "%s | 2ML",
  },
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "2ML",
    title: "2ML | The right thing, built well.",
    description,
    url: "/",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "2ML" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2ML | The right thing, built well.",
    description,
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
