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
  title: "Thihansa Sanjunie | Portfolio",
  description: "CS Undergraduate & Aspiring Software Engineer - Portfolio showcasing projects, skills, and experience in full-stack development.",
  keywords: "Thihansa Sanjunie, Software Engineer, React, Node.js, Django, Portfolio, Computer Science, UCSC",
  authors: [{ name: "Thihansa Sanjunie" }],
  openGraph: {
    title: "Thihansa Sanjunie | Portfolio",
    description: "CS Undergraduate & Aspiring Software Engineer",
    type: "website",
  },
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
