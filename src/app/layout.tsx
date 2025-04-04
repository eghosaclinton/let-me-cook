import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Let me Cook",
  icons: "https://let-me-coook.vercel.app/robo-chef.png",
  description: "An AI-powered recipe generator that cooks up with creative recipes, with available ingredients.",
  openGraph:{
    type: "website",
    url: "https://let-me-coook.vercel.app",
    siteName: "Let me Cook",
    images: "https://let-me-coook.vercel.app/robo-chef.png"
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
