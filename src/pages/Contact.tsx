import { motion } from "motion/react";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";

export default function ContactPage() {
  return (
    <div
      id="contact"
      className="container mx-auto py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-8"
        >
          <ContactInfo />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative px-5"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
          <div className="bg-card border p-8 sm:p-12 rounded-lg md:rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
