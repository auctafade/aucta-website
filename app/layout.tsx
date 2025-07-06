import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from './components/layout/footer'
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
  title: "AUCTA - Luxury Asset Protocol",
  description: "A closed protocol for the certification, custody, and financial activation of luxury goods. Not a platform. Not a marketplace. A standard.",
  keywords: ["luxury", "blockchain", "authentication", "custody", "protocol"],
  authors: [{ name: "AUCTA Protocol" }],
  openGraph: {
    title: "AUCTA - Luxury Asset Protocol",
    description: "A closed protocol for the certification, custody, and financial activation of luxury goods.",
    url: "https://aucta.io",
    siteName: "AUCTA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUCTA - Luxury Asset Protocol",
    description: "A closed protocol for luxury assets",
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
        <Footer />
      </body>
    </html>
  );
}