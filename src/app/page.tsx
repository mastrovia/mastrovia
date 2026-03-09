"use client";

import { motion } from "motion/react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Works } from "@/components/sections/Works";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import ContactPage from "@/app/contact/page";
import { Footer } from "@/components/common/Footer";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full overflow-x-hidden"
    >
      <Hero />
      <Services />
      <TechMarquee />
      <Works />
      <Testimonials />
      <FAQ />

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-muted/10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ContactPage />
      </section>

      <Footer />
    </motion.div>
  );
}
