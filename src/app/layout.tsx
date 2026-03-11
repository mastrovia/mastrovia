import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import TopMarquee from "@/components/sections/TopMarquee";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://mastrovia.com"),
  title: {
    default: "Mastrovia | Digital Architects",
    template: "%s | Mastrovia"
  },
  description: "Professional web development and design services focused on creating, updating, deploying, and supporting high-quality, modern websites customized to your needs. Elevate your online presence with our expertise.",
  keywords: ["Web Development", "UI/UX Design", "Digital Agency", "Next.js Agency", "Digital Architects", "Performance Optimization"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mastrovia | Digital Architects",
    description: "Empowering visionary brands with exceptional digital architecture. Built for performance, designed for meaningful impact.",
    url: "https://mastrovia.com",
    siteName: "Mastrovia",
    images: [
      {
        url: "/branding/mastrovia-banner.png",
        width: 1200,
        height: 630,
        alt: "Mastrovia Digital Agency Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mastrovia | Digital Architects",
    description: "Empowering visionary brands with exceptional digital architecture. Built for performance, designed for meaningful impact.",
    images: ["/branding/mastrovia-banner.png"],
    creator: "@mastrovia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" storageKey="mastrovia-theme" enableSystem>
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} showForHashAnchor={false}/>
          <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
            <TopMarquee />
            <Navbar />
            <main className="pt-20 sm:pt-24">{children}</main>
            <Footer />

            {/* Grain Overlay */}
            {/* <div className="fixed pointer-events-none inset-0 z-[100] opacity-[0.06] mix-blend-overlay">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/textures/grains.png')",
                  backgroundRepeat: "repeat",
                }}
              />
            </div> */}
          </div>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
