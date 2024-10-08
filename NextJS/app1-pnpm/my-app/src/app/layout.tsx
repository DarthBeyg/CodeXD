import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Q2 Lecture2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-400 p-9 ">   {/*manipulated*/}
        <Link href="/">Home</Link>
        <Link href="/Dashboard" className="p-5">Dashboard</Link>
        <Link href="/Dashboard/Customer">Customer</Link>
        <Link href="/Blog" className="p-5">Blog</Link>
        <Link href="/Team" >Team</Link>
        <Link href="/TeamDetail" className="p-5">Team Details</Link>
        <Link href="/Settings">Settings</Link>
        </header>
        {children}
        <footer className="bg-slate-400 p-9">This is a footer</footer>
      </body>
    </html>
  );
}
