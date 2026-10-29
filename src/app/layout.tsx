import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// multi-device: zoom disabled, page fits the viewport by default
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#F7EFD9",
};

export const metadata: Metadata = {
  title: "FanumTaxxed — Sales, Reverse-VAT & Shop Calculator",
  description:
    "FanumTaxxed — non-reverse (default) and reverse VAT sales calculator with linked fields, Pcs / Kg / Dozen unit billing, tidy qty & rate options, per-device history — plus the FANUM-991ES PLUS shop calculator with +VAT, −VAT, VAT AMT and VAT SPLIT keys.",
  keywords: [
    "FanumTaxxed",
    "VAT calculator",
    "reverse VAT",
    "sales calculator",
    "business calculator",
    "FANUM-991ES PLUS",
    "tax calculator",
    "markup",
  ],
  authors: [{ name: "Urbish", url: "https://github.com/UrbishCodes" }],
  creator: "Urbish",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* retro + heavy display fonts for the neobrutalist page chrome */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="retro-fonts"
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=VT323&display=swap"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
