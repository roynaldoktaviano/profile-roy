import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Roynald Kalele | Website Developer & Digital Marketing",
  description: "Digital creator crafting experiences with Japanese aesthetics. Explore my portfolio and creative work.",
  keywords: ["Roynald Kalele", "Website Developer", "Digital Marketing", "Web Design", "Portfolio", "Japanese Design", "Creative"],
  authors: [{ name: "Roynald Kalele" }],
  openGraph: {
    title: "Roynald Kalele | Website Developer & Digital Marketing",
    description: "Digital creator crafting experiences with Japanese aesthetics",
    type: "website",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
