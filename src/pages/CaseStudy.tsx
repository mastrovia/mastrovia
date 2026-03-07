import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Code2,
  Server,
  Cloud,
} from "lucide-react";
import AnimatedButton from "@/components/animated-button";
import SEO from "@/components/seo";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={`${caseStudy.title} - Case Study | Mastrovia`}
        description={caseStudy.description}
        keywords={`${caseStudy.title}, ${caseStudy.tags.join(
          ", "
        )}, case study, web development`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-background"
      >
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden textured-surface">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

          {/* Animated Gradient Glow Backgrounds */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Left Middle Glow */}
            <div className="absolute -left-[30%] top-[20%] w-[80vw] h-[80vw] min-w-[350px] min-h-[350px] sm:-left-[20%] sm:top-[30%] sm:w-[50vw] sm:h-[50vw] opacity-20 dark:opacity-[0.15]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full rounded-full bg-[#E1FF00] mix-blend-multiply dark:mix-blend-screen blur-[80px] sm:blur-[120px] md:blur-[140px]"
              />
            </div>
            {/* Top Right Glow */}
            <div className="absolute -right-[20%] -top-[10%] w-[70vw] h-[70vw] min-w-[300px] min-h-[300px] sm:-right-[10%] sm:-top-[20%] sm:w-[45vw] sm:h-[45vw] opacity-20 dark:opacity-[0.12]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="w-full h-full rounded-full bg-[#E1FF00] mix-blend-multiply dark:mix-blend-screen blur-[80px] sm:blur-[120px] md:blur-[140px]"
              />
            </div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Back Button */}
            <Link to="/#works">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 text-sm font-bold font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Works
              </motion.div>
            </Link>

            {/* Category & Year */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 mb-6 font-sans"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs tracking-wider px-4 py-1.5 font-bold">
                {caseStudy.category}
              </Badge>
              <span className="text-sm text-muted-foreground font-medium">
                {caseStudy.year}
              </span>
              <span className="text-sm text-muted-foreground italic tracking-tight">
                Client: {caseStudy.client}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] mb-6 leading-none"
            >
              {caseStudy.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mb-8 leading-relaxed tracking-tight"
            >
              {caseStudy.description}
            </motion.p>

            {/* Tags & Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 font-sans"
            >
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-muted/50 border border-foreground/40 text-[10px] font-bold tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              {caseStudy.link !== "#" && (
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedButton
                    variant="outline"
                    className="gap-2 rounded-full flex items-center group font-bold tracking-wide"
                    noArrow
                  >
                    <span className="underline underline-offset-4 font-sans">Visit Live Site</span>
                    <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </AnimatedButton>
                </a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-4 pt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="container mx-auto max-w-6xl group overflow-hidden"
          >
            <div className="relative rounded-none overflow-hidden border border-border bg-muted/20">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="px-4 py-20 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold tracking-tight">
                  Overview
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed tracking-tight">
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
                <h2 className="text-3xl font-bold tracking-tight">
                  Challenge
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed tracking-tight">
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
                <h2 className="text-3xl font-bold tracking-tight">
                  Solution
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed tracking-tight">
                  {caseStudy.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
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
                >
                  <Card className="border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg font-sans leading-relaxed tracking-tight">{result}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
            >
              Features & Capabilities
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-sm font-sans leading-relaxed tracking-tight">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
            >
              Technology Stack
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/40 bg-card/30 backdrop-blur-sm h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide">
                        Frontend
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {caseStudy.technologies.frontend.map((tech, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-sans tracking-tight text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-border/40 bg-card/30 backdrop-blur-sm h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Server className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide">
                        Backend
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {caseStudy.technologies.backend.length > 0 ? (
                        caseStudy.technologies.backend.map((tech, idx) => (
                          <li
                            key={idx}
                            className="text-sm font-sans tracking-tight text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {tech}
                          </li>
                        ))
                      ) : (
                        <li className="text-sm font-sans tracking-tight text-muted-foreground italic">
                          Frontend-only application
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-border/40 bg-card/30 backdrop-blur-sm h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Cloud className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide">
                        Infrastructure
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {caseStudy.technologies.infrastructure.map(
                        (tech, idx) => (
                          <li
                            key={idx}
                            className="text-sm font-sans tracking-tight text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {tech}
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="px-4 py-20 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
            >
              Project Screenshots
            </motion.h2>

            <div className="space-y-12">
              {caseStudy.screenshots.slice(0, 1).map((screenshot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-sans text-muted-foreground tracking-tight text-center italic">
                    {screenshot.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* {caseStudy.testimonial && (
          <section className="px-4 py-20">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/40 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                  <CardContent className="p-12 space-y-8">
                    <div className="text-6xl text-primary/20 font-serif leading-none">
                      "
                    </div>
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 -mt-12">
                      {caseStudy.testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                      <div>
                        <p className="font-bold text-lg">
                          {caseStudy.testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {caseStudy.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        )} */}

        {/* CTA Section */}
        <section className="px-4 py-20 bg-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed tracking-tight max-w-2xl mx-auto">
                Let's build something exceptional together. Get in touch to
                discuss your next digital project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
                <Link to="/#contact">
                  <AnimatedButton className="px-12 py-7 text-sm font-bold uppercase tracking-wider">
                    Start a Project
                  </AnimatedButton>
                </Link>
                <Link to="/#works">
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
    </>
  );
}
