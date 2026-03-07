import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import TopMarquee from "@/components/sections/TopMarquee";
import SEO from "@/components/common/seo";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO />
      <TopMarquee />
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <Outlet />
      </main>

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
  );
}
