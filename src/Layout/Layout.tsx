import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import { motion } from "motion/react";

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <div className="fixed pointer-events-none inset-0 z-50 flex-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "109px",
            backgroundRepeat: "repeat",
            backgroundImage: "url('/textures/grains.png')",
            opacity: 0.08,
          }}
        ></div>
      </div>
      {/* <motion.div
        animate={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "circOut", delay: 1 }}
        className="fixed left-0 right-0 bottom-0 top-0 bg-[var(--primary)] z-50 flex items-center justify-center text-[var(--bg)]"
      >
        Mastrovia
      </motion.div> */}
    </div>
  );
}
