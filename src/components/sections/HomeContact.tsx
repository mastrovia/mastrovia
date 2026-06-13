"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowUpRight } from "lucide-react";

// Set to the WhatsApp number (country code + number, digits only) to show the card.
// Leave empty to hide the WhatsApp card.
const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE =
  "Hi Mastrovia, I'd like to discuss a project.";

const CAL_LINK = "https://cal.com/mastrovia/30min";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const WhatsAppIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.215zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const HomeContact: FC = () => {
  const showWhatsApp = WHATSAPP_NUMBER.length > 0;

  return (
    <div
      id="contact"
      className="container mx-auto px-4 sm:px-6 py-20 sm:py-28 max-w-5xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6 ring-1 ring-primary/20 backdrop-blur-sm tracking-wider">
          Let&apos;s Connect
        </span>
        <h2 className="text-4xl md:text-6xl tracking-tight mb-4 sm:mb-6">
          Let&apos;s build something great
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
          Book a free 30-minute strategy call, or send us a quick message on
          WhatsApp. Whatever works best for you.
        </p>
      </motion.div>

      <div
        className={`grid grid-cols-1 gap-4 sm:gap-6 ${showWhatsApp ? "sm:grid-cols-2" : "max-w-md mx-auto"
          }`}
      >
        {/* Primary: Book a call */}
        <motion.a
          href={CAL_LINK}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative flex flex-col gap-5 p-7 sm:p-8 rounded-3xl bg-primary text-primary-foreground overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div className="flex items-center justify-between">
            <div className="bg-primary-foreground/15 p-3 rounded-2xl">
              <Calendar className="w-6 h-6" />
            </div>
            <ArrowUpRight className="w-6 h-6 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <div className="mt-auto">
            <h3 className="text-xl sm:text-2xl tracking-tight font-medium mb-1.5">
              Book a strategy call
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/70 font-sans">
              Free 30-min consultation — pick a time that suits you.
            </p>
          </div>
        </motion.a>

        {/* Secondary: WhatsApp */}
        {showWhatsApp && (
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col gap-5 p-7 sm:p-8 rounded-3xl border border-border bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="flex items-center justify-between">
              <div className="bg-primary/5 text-primary p-3 rounded-2xl transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-auto">
              <h3 className="text-xl sm:text-2xl tracking-tight font-medium mb-1.5">
                Chat on WhatsApp
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-sans">
                Quick question? Message us and get a fast reply.
              </p>
            </div>
          </motion.a>
        )}
      </div>

      {/* Tertiary: email fallback */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground font-sans mt-8 sm:mt-10"
      >
        Prefer email?{" "}
        <a
          href="mailto:hello@mastrovia.com"
          className="text-foreground underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
        >
          hello@mastrovia.com
        </a>
      </motion.p>
    </div>
  );
};

export default HomeContact;
