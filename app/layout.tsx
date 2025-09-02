import { Manrope } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help Center | Phone Exchange",
  description: "Find answers to common questions, guides, and support resources at Phone Exchange Help Center.",
  keywords: ["Phone Exchange", "Help Center", "Support", "FAQ", "Refurbished Phones", "Warranty", "Returns"],
  openGraph: {
    title: "Help Center | Phone Exchange",
    description: "Browse FAQs, guides, and support resources at Phone Exchange Help Center.",
    url: "https://help.phonexchange.com.au",
    siteName: "Phone Exchange",
    type: "website",
  },

  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full bg-[#fefefe] ${manrope.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
