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
