import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14151f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kickdeck.io"
  ),
  title: {
    default: "KickDeck - Soccer Tournament Management Platform",
    template: "%s | KickDeck",
  },
  description:
    "AI-powered soccer tournament management. Scheduling, registration, payments, brackets, and scoring — all in one platform built by tournament directors, for tournament directors.",
  keywords: [
    "soccer tournament management",
    "tournament scheduling software",
    "youth soccer tournament",
    "tournament registration",
    "AI scheduling",
    "tournament brackets",
    "soccer league management",
    "tournament payment processing",
  ],
  authors: [{ name: "KickDeck" }],
  creator: "KickDeck",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "KickDeck",
    title: "KickDeck - Soccer Tournament Management Platform",
    description:
      "AI-powered soccer tournament management. Scheduling, registration, payments, brackets, and scoring — all in one platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KickDeck Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KickDeck - Soccer Tournament Management Platform",
    description:
      "AI-powered soccer tournament management built by tournament directors, for tournament directors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KickDeck",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI-powered soccer tournament management platform",
  url: "https://kickdeck.io",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "99",
    highPrice: "249",
    priceCurrency: "USD",
    offerCount: "3",
  },
  publisher: {
    "@type": "Organization",
    name: "KickDeck",
    url: "https://kickdeck.io",
    logo: {
      "@type": "ImageObject",
      url: "https://kickdeck.io/logos/kickdeck-white.png",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@kickdeck.io",
      contactType: "sales",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
