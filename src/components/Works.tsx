import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import AnimatedButton from "./animated-button";

export function Works() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="works" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl leading-none">
              People we loved <br />
              <span className="text-primary italic">working with</span>
            </h2>
            <p className="text-muted-foreground max-w-md font-sans text-lg">
              A curated collection of our most challenging and impactful digital
              projects.
            </p>
          </div>
          <AnimatedButton
            variant="outline"
            className="rounded-full hidden md:flex"
          >
            View All Projects
          </AnimatedButton>
        </div>

        <div className="relative w-full flex flex-col gap-0 border-t border-border/50 group/list">
          {/* List of works */}
          <div className="w-full flex flex-col">
            {caseStudies.map((work, idx) => {
              const isActive = hoveredIdx === idx;
              return (
                <div
                  key={work.id}
                  className="border-b border-border/50 relative transition-colors"
                  style={{ zIndex: isActive ? 50 : 10 }}
                  // onMouseEnter={() => setHoveredIdx(idx)}
                  // onMouseLeave={() => setHoveredIdx(null)}
                  onMouseOver={() => setHoveredIdx(idx)}
                  onMouseOut={() => setHoveredIdx(null)}
                >
                  <Link
                    to={`/case-study/${work.id}`}
                    className="flex justify-between items-center py-6 md:py-8 lg:py-10 group/item"
                  >
                    <div className="flex flex-col gap-2 flex-1 md:pl-8">
                      <div className="flex items-center gap-4">
                        <motion.h3
                          className={`text-xl sm:text-2xl md:text-3xl transition-all duration-100 text-foreground underline underline-offset-8 md:no-underline md:text-muted-foreground/40 ${isActive ? "md:text-primary md:underline" : ""
                            } text-left`}
                        >
                          {work.title}
                        </motion.h3>
                        <ArrowUpRight
                          className={`w-6 h-6 transition-all duration-300 text-foreground opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:text-muted-foreground/20 ${isActive ? "md:text-primary md:opacity-100 md:translate-x-0" : ""}`}
                        />
                      </div>
                      <p className={`text-[10px] sm:text-xs font-sans capitalize tracking-wide transition-colors duration-100 
                        text-primary/80 md:text-muted-foreground/40 
                        ${isActive ? "md:text-primary/80" : ""}`}>
                        {work.category}
                      </p>
                    </div>

                    {/* Mobile Image (Always visible on mobile) */}
                    <div className="md:hidden w-24 h-24 sm:w-32 sm:h-32 shrink-0 border border-border/50 ml-4">
                      <img
                        src={work.screenshots[0].url}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Desktop Hover Image (Curtain Reveal) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 250 }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.1, ease: [0.16, 1, 0.3, 1] } }}
                        transition={{ duration: .2, ease: "easeInOut" }}
                        className="hidden md:flex absolute top-0 right-0 pr-8 lg:pr-16 pointer-events-none origin-top overflow-hidden z-[100]"
                      >
                        <div className="w-[350px] h-[250px] overflow-hidden relative">
                          <img
                            src={work.screenshots[0].url}
                            alt={work.screenshots[0].caption}
                            className="absolute top-0 left-0 w-full h-full object-cover bg-background border border-border/50 pointer-events-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex md:hidden justify-center">
          <AnimatedButton variant="outline" className="w-full py-6">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
