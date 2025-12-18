import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEO from "../components/seo";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Grain Overlay */}
      <div className="fixed pointer-events-none inset-0 z-[100] opacity-[0.03] mix-blend-overlay">
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
