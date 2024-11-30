import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto p-4">
      <h1>contact</h1>
    </motion.div>
  );
}
