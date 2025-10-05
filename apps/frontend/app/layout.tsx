import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jersey_15, Teko } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opiniom",
};

const jersey15 = Jersey_15({
  weight: "400",
  subsets: ["latin"],
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
});


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
        {children}
      </body>
    </html>
  );
}
