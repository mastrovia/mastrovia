"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { CaseStudy } from "@/data/caseStudies";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import AnimatedButton from "@/components/common/animated-button";
import { ContactPopup } from "@/components/common/ContactPopup";

export default function CaseStudyClient({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-30 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />

        {/* Minimal, Centered Soft Glow */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 overflow-hidden flex justify-center">
          <div className="absolute top-[-50%] w-[120vw] h-[60vw] min-w-[600px] min-h-[600px] opacity-20 dark:opacity-[0.15]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full rounded-[100%] bg-[#E1FF00] mix-blend-multiply dark:mix-blend-screen blur-[120px] sm:blur-[180px] md:blur-[220px]"
            />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-20">
          {/* Back Button */}
          <Link href="/#works">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors mb-12 md:mb-16 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Works
            </motion.div>
          </Link>

          {/* Title & Description */}
          <div className="max-w-5xl mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-medium tracking-tight mb-8 leading-[0.9]"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl leading-relaxed tracking-normal font-light"
            >
              {caseStudy.description}
            </motion.p>
          </div>

          {/* Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/40"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground/60">Client</span>
              <span className="text-lg font-medium tracking-tight">{caseStudy.client}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground/60">Category</span>
              <span className="text-lg font-medium tracking-tight">{caseStudy.category}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground/60">Year</span>
              <span className="text-lg font-medium tracking-tight">{caseStudy.year}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground/60">Live Site</span>
              {caseStudy.link !== "#" ? (
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium tracking-tight inline-flex items-center gap-2 group hover:text-primary transition-colors w-fit"
                >
                  <span className="underline underline-offset-4 decoration-border/50 group-hover:decoration-primary">
                    Visit Project
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <span className="text-lg font-medium tracking-tight text-muted-foreground/80">
                  N/A
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-7xl group overflow-hidden"
        >
          <div className="relative rounded-lg md:rounded-xl overflow-hidden border border-border/50 bg-muted/20 w-full aspect-[4/3] md:aspect-[21/9]">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-20 bg-muted/20 border-t">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-medium tracking-tight">Overview</h2>
              <p className="text-muted-foreground leading-relaxed tracking-normal font-light">
                {caseStudy.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-medium tracking-tight">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed tracking-normal font-light">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-medium tracking-tight">Solution</h2>
              <p className="text-muted-foreground leading-relaxed tracking-normal font-light">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 py-20 border-t">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-12"
          >
            Key Results
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 py-4 md:py-6 border-b border-border/50 hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xl leading-relaxed tracking-normal font-light text-muted-foreground">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Screenshots Gallery */}
      <section className="px-4 py-20 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-12"
          >
            Project Screenshots
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[400px]">
            {caseStudy.screenshots.map((screenshot, idx) => {
              const colSpanClass = [
                "md:col-span-8",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-8",
                "md:col-span-12",
              ][idx % 5];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative rounded-xl md:rounded-2xl overflow-hidden border border-border/50 group bg-muted/20 shadow-none ${colSpanClass}`}
                >
                  <Image
                    src={screenshot.url}
                    alt={screenshot.caption}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                    <p className="text-lg md:text-xl font-medium text-white/90 tracking-tight">
                      {screenshot.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-32 bg-muted/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-light tracking-normal max-w-2xl mx-auto">
              Let's build something exceptional together. Get in touch to
              discuss your next digital project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <ContactPopup>
                <AnimatedButton className="px-12 py-7 text-sm font-bold uppercase tracking-wider">
                  Start a Project
                </AnimatedButton>
              </ContactPopup>
              <Link href="/#works">
                <AnimatedButton
                  variant="outline"
                  className="px-12 py-7 text-sm font-bold uppercase tracking-wider"
                >
                  View More Work
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
