import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "REI Sign — Contract Management for Real Estate Wholesalers",
  description:
    "Create, sign, and manage real estate contracts in minutes. AI-powered clauses, state-specific templates, and professional e-signatures built for wholesalers.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "REI Sign — Contract Management for Real Estate Wholesalers",
    description:
      "Create, sign, and manage real estate contracts in minutes. AI-powered clauses, state-specific templates, and professional e-signatures built for wholesalers.",
    type: "website",
    url: "https://reisign.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
