import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "PW Coupon Codes",
  description:
    "We provide free coupon codes for Physics Wallahcourses including NEET, JEE, UPSC and other competetive exam courses.",
  applicationName: "PW Coupon Codes",
  authors: [{ name: "Junaid Ahamad", url: "" }],
  keywords: [
    "PW",
    "Physics Wallah",
    "JEE",
    "NEET",
    "NEET 2025",
    "UPSC",
    "Free",
    "Coupon Code",
    "PW Coupons",
    "Discount",
    "PW Coupon Codes",
    "Physics Wallah Coupon Codes",
  ],
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
        {children}
      </body>
    </html>
  );
}
