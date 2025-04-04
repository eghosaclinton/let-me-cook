import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Let Him Cook",
  description: "A AI-powered recipe generator that comes up with creative recipes with available ingredients.",
  openGraph:{
    type: "website",
    url: "",
    siteName: "Let him Cook",
    images: "/bot-chef.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
