import type { Metadata } from "next";
import { Advent_Pro, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-advent",
});

export const metadata = {
  title: "Chalet La Falaise — Luxury Rental in Mont Tremblant, Quebec",
  description:
    "Beautiful vacation rental located in Mont Tremblant, Quebec. Features stunning views, modern amenities, spacious rooms, and walking distance to local attractions.",
  keywords: [
    "vacation rental",
    "luxury rental",
    "short term rental",
    "airbnb alternative",
    "Mont Tremblant rentals",
    "Quebec vacation home",
  ],
  openGraph: {
    title: "Your Property Name — Luxury Rental in Mont Tremblant, Quebec",
    description:
      "Spacious and modern vacation rental with premium features, perfect for families, couples, and remote workers.",
    url: "https://bledowski-website.vercel.app",
    siteName: "Your Property Name",
    images: [
      {
        url: "https://your-main-image.jpg",
        width: 1200,
        height: 630,
        alt: "Front view of the vacation rental property",
      },
    ],
    locale: "en_US",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${adventPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
