import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/componets/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Marketing Alliance | The Future of Enterprise Marketing",
  description:
    "Join the AI Marketing Alliance: the essential network and resource for enterprise marketing leaders integrating artificial intelligence into their strategies and operations. Stay ahead with exclusive content, events, and a vibrant community.",
  keywords: [
    "AI Marketing Alliance",
    "Enterprise Marketing",
    "Artificial Intelligence",
    "B2B Marketing",
    "Marketing Leaders",
    "AI Events",
    "AI Community",
    "AI Education",
    "AI in Marketing"
  ],
  metadataBase: new URL("https://aimarketingalliance.com"),
  openGraph: {
    title: "AI Marketing Alliance | The Future of Enterprise Marketing",
    description:
      "Join the AI Marketing Alliance: the essential network and resource for enterprise marketing leaders integrating artificial intelligence into their strategies and operations.",
    url: "https://aimarketingalliance.com",
    siteName: "AI Marketing Alliance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Marketing Alliance Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Alliance | The Future of Enterprise Marketing",
    description:
      "Join the AI Marketing Alliance: the essential network and resource for enterprise marketing leaders integrating artificial intelligence into their strategies and operations.",
    images: ["/og-image.png"],
    creator: "@aimarketingalliance",
  },
  alternates: {
    canonical: "https://aimarketingalliance.com",
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
      ><Header/>
        {children}
      </body>
    </html>
  );
}
