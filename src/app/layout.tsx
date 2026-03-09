import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import TopMarquee from "@/components/sections/TopMarquee";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Mastrovia, A web development company",
  description: "Professional web development and design services focused on creating, updating, deploying, and supporting high-quality, modern websites customized to your needs. Elevate your online presence with our expertise.",
  icons: {
    icon: "/favicon.ico",
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
        <ThemeProvider attribute="class" defaultTheme="system" storageKey="mastrovia-theme" enableSystem>
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} showForHashAnchor={false}/>
          <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <TopMarquee />
            <Navbar />
            <main className="pt-20 sm:pt-24">{children}</main>

            {/* Grain Overlay */}
            <div className="fixed pointer-events-none inset-0 z-[100] opacity-[0.06] mix-blend-overlay">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/textures/grains.png')",
                  backgroundRepeat: "repeat",
                }}
              />
            </div>
          </div>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
