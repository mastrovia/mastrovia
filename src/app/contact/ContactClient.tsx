"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";
import Cal, { getCalApi } from "@calcom/embed-react";
import { MessageSquare, Calendar as CalendarIcon, Loader2 } from "lucide-react";

export default function ContactClient() {
  const [activeTab, setActiveTab] = useState<"message" | "calendar">("message");
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
      className="container mx-auto pt-8 pb-20 sm:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-8 lg:sticky lg:top-32"
        >
          <ContactInfo />
        </motion.div>

        {/* Right Side: Contact Form / Calendar Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative px-5 w-full"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
          
          <div className="bg-card border p-6 sm:p-10 rounded-3xl md:rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group flex flex-col min-h-[640px] shadow-xl">
            
            {/* Elegant Segmented Tab Control */}
            <div className="p-1.5 bg-muted/40 rounded-2xl flex items-center mb-8 relative border border-border/50 shadow-inner w-full max-w-sm mx-auto">
              {/* Animated Background Indicator */}
              <div className="absolute inset-y-1.5 left-1.5 right-1.5 pointer-events-none flex">
                <motion.div
                  className="w-1/2 h-full bg-background rounded-xl shadow-sm border border-border/50"
                  initial={false}
                  animate={{
                    x: activeTab === "message" ? "0%" : "100%",
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              </div>

              <button
                onClick={() => setActiveTab("message")}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                  activeTab === "message" ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Message Us
              </button>
              
              <button
                onClick={() => setActiveTab("calendar")}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                  activeTab === "calendar" ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                }`}
              >
                <CalendarIcon className="w-4 h-4" />
                Schedule Call
              </button>
            </div>

            {/* Tab Contents */}
            <div className="relative flex-1 flex flex-col w-full">
              <AnimatePresence mode="wait">
                {activeTab === "message" ? (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, x: -15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full flex-1"
                  >
                    <ContactForm />
                  </motion.div>
                ) : (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full min-h-[500px] flex flex-col relative"
                  >
                    {!isCalLoaded && (
                      <div className="absolute inset-0 z-0 flex items-center justify-center flex-col gap-4 text-muted-foreground bg-card rounded-2xl">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        <span className="text-sm font-sans font-medium uppercase tracking-wider animate-pulse">Loading Calendar...</span>
                      </div>
                    )}
                    
                    <div className="relative z-10 w-full flex-1 h-full max-h-[500px]">
                      {/* Note: using mastrovia as username assuming that's the intention. */}
                      <Cal
                        calLink="mastrovia/30min" 
                        style={{ width: "100%", height: "100%", overflow: "auto" }}
                        config={{ layout: "month_view" }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
