import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../app/Navbar/Navbar"
import Sidebar from "../app/Sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JMS-CONSOLA",
  description: "Pabo Mosquera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-4">
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}
