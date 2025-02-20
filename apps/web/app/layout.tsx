import { Geist, Geist_Mono, Kaisei_Tokumin } from "next/font/google";

import "@workspace/ui/globals.css";
import "./styles.css";
import { Providers } from "@/components/providers";
import BackgroundVideo from "./background-video";
import { Metadata, Viewport } from "next";
import Guidelines from "@/components/layout/guidelines";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RootSkipNavContent from "@/components/layout/root-skip-nav-content";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontKaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  variable: "--font-kaisei",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontKaisei.variable} font-sans antialiased `}
      >
        <div id="skip-nav" aria-hidden="true" />
        <Guidelines />
        <Header />
        <Providers>{children}</Providers>
        <BackgroundVideo />
        <Footer />
        <RootSkipNavContent />
      </body>
    </html>
  );
}
