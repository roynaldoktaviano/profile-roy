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
  description: "Crafting high-performance websites with a strong focus on scalability, clean architecture, and user experience—built.",
  keywords: ["Roynald Kalele", "Website Developer", "Digital Marketing", "Web Design", "Portfolio", "Web Development", "SEO", "Brand Identity"],
  authors: [{ name: "Roynald Kalele" }],
  openGraph: {
    title: "Roynald Kalele | Website Developer & Digital Marketing",
    description: "Crafting high-performance websites with a strong focus on scalability, clean architecture.",
    type: "website",
  },
    // ✅ Canonical
    alternates: {
      canonical: "https://roynaldkalele.com", 
    },
  
    openGraph: {
      title: "Roynald Kalele | Website Developer & Digital Marketing",
      description:
        "Crafting high-performance websites with a strong focus on scalability, clean architecture, and user experience.",
      type: "website",
      url: "https://roynaldkalele.com",
      siteName: "Roynald Kalele",
      images: [
        {
          url: "https://roynald.vercel.app/profil.png", 
          width: 1200,
          height: 630,
          alt: "Roynald Kalele – Website Developer & Digital Marketing",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Roynald Kalele | Website Developer & Digital Marketing",
      description:
        "Crafting high-performance websites with a strong focus on scalability, clean architecture, and user experience.",
      images: ["https://roynald.vercel.app/profil.png"],
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
