import type { Metadata, Viewport } from "next";

import Footer from "@/components/layout/footer";
import Guidelines from "@/components/layout/guidelines";
import { Header } from "@/components/layout/header";
import { Kaisei_Tokumin } from "next/font/google";
import localFont from "next/font/local";

import CanvasListener from "./canvas-listener";
import "./globals.css";
import RootSkipNavContent from "./root-skip-nav-content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const kaisei_tokumin = Kaisei_Tokumin({
  subsets: ["latin"],
  variable: "--font-kaisei-tokumin",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  description: "Developer, Designer, and Creator.",
  metadataBase: new URL("https://oliverpan.vercel.app/"),
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: "Oliver Pan",
    template: "%s | Oliver Pan",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
  userScalable: false,
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kaisei_tokumin.variable} ${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <div id="skip-nav" aria-hidden="true" />
        <CanvasListener />
        <Guidelines />
        <Header />
        {children}
        <Footer />
        <RootSkipNavContent />
      </body>
    </html>
  );
}
