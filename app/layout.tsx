import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWidgets } from "@/components/floating-widgets";
import { OrganizationJsonLd, WebSiteJsonLd, LocalBusinessJsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enviroserve.in"),
  title: {
    default: "EnviroServe | E-Waste Recycling & EPR Compliance Solutions India",
    template: "%s | EnviroServe Technologies",
  },
  description:
    "EnviroServe Technologies Pvt. Ltd. is a leading Indian waste management company specializing in e-waste recycling, lithium-ion battery recovery, and CPCB Extended Producer Responsibility (EPR) compliance.",
  keywords: [
    "e waste recycling company",
    "e waste recycling company in India",
    "e waste management company",
    "e waste recycling Delhi",
    "electronic waste recycling",
    "EPR compliance India",
    "EPR waste management",
    "battery recycling company",
    "li ion battery recycling India",
    "waste management company Delhi",
    "CPCB EPR registration",
    "reverse logistics waste",
    "corporate IT asset liquidation",
  ],
  authors: [{ name: "EnviroServe Technologies Pvt. Ltd." }],
  creator: "EnviroServe Technologies",
  publisher: "EnviroServe Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enviroserve.in",
    siteName: "EnviroServe",
    title: "EnviroServe | E-Waste Recycling & EPR Compliance Solutions India",
    description:
      "Responsible recycling, lithium-ion battery recovery, and turnkey EPR compliance for Producers, Importers, and Brand Owners.",
    images: [
      {
        url: "/images/logo/EnviroServe-1.png",
        width: 1200,
        height: 630,
        alt: "EnviroServe Technologies Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EnviroServe | E-Waste Recycling & EPR Compliance Solutions India",
    description:
      "Responsible recycling, lithium-ion battery recovery, and turnkey EPR compliance for Producers, Importers, and Brand Owners.",
    images: ["/images/logo/EnviroServe-1.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans bg-enviro-bg text-enviro-navy antialiased min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow pb-16 lg:pb-0">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
