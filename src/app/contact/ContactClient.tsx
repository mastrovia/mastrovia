"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Loader2 } from "lucide-react";

export default function ContactClient() {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      setIsCalLoaded(true);
    })();
  }, []);

  return (
    <div
      id="contact"
      className="container mx-auto pt-12 pb-1 sm:py-20 max-w-7xl px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 ring-1 ring-primary/20 backdrop-blur-sm uppercase tracking-wider">
          Let&apos;s Connect
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6 leading-tight">
          Schedule a strategy call
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
          Pick a time that works best for you. We&apos;d love to discuss how we can help scale your digital presence.
        </p>
      </motion.div>

      {/* Full Width Calendar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full mb-16 relative flex flex-col"
      >
        <div className="relative flex-1 w-full pt-4 min-h-[450px]">
          {!isCalLoaded && (
            <div className="absolute inset-0 z-0 flex items-center justify-center flex-col gap-4 text-muted-foreground">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="text-sm font-sans font-medium uppercase tracking-wider animate-pulse">Loading Calendar...</span>
            </div>
          )}

          <div className="relative z-10 w-full overflow-hidden">
            <Cal
              calLink="mastrovia/30min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </motion.div>

      {/* OR Divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-16 sm:mb-20"
      >
        <div className="h-px bg-border flex-1 max-w-[150px] sm:max-w-[250px]" />
        <span className="text-muted-foreground font-sans text-xs sm:text-sm font-semibold tracking-widest text-center px-4 uppercase">
          Or send us a message
        </span>
        <div className="h-px bg-border flex-1 max-w-[150px] sm:max-w-[250px]" />
      </motion.div>

      {/* Contact Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-2 lg:sticky lg:top-32"
        >
          <ContactInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-3 relative"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
          <div className="bg-card border p-6 sm:p-10 rounded-3xl md:rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
