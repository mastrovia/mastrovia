"use client";

import { FC, useRef } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/homeData";
import Balancer from "react-wrap-balancer";
import ServiceVisual, { buildServiceTimeline, ServiceKey } from "@/components/common/ServiceVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Services: FC = () => {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const svgs = gsap.utils.toArray<SVGElement>("[data-svc]");
            const make = (el: SVGElement) =>
                buildServiceTimeline(el, el.dataset.svc as ServiceKey);

            if (reduce) {
                svgs.forEach((el) => make(el).progress(1));
                return;
            }

            const mm = gsap.matchMedia();

            // Desktop: play them one after another, then a calm pause, then repeat.
            mm.add("(min-width: 768px)", () => {
                const master = gsap.timeline({
                    repeat: -1,
                    repeatDelay: 1.8,
                    scrollTrigger: { trigger: root.current, start: "top 78%" },
                });
                svgs.forEach((el, i) =>
                    master.add(make(el), i === 0 ? 0 : "+=0.45")
                );
            });

            // Mobile: cards are read one at a time — play each once when it scrolls in.
            mm.add("(max-width: 767px)", () => {
                svgs.forEach((el) => {
                    const tl = make(el);
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 82%",
                        once: true,
                        onEnter: () => tl.play(),
                    });
                });
            });
        },
        { scope: root }
    );

    return (
        <section ref={root} id="services" className="pb-20 sm:pb-32">
            <div className="container mx-auto px-3 md:px-8">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20 space-y-4">
                    <span className="inline-block text-xs font-sans font-bold tracking-[0.2em] uppercase text-primary/40">
                        How we work
                    </span>
                    <h2 className="text-4xl md:text-6xl tracking-tight">
                        Our Professional <span className="text-primary italic">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto font-sans">
                        <Balancer>
                            No tech jargon. Just three simple steps to get your idea online —
                            and exactly what you get at each one.
                        </Balancer>
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border overflow-hidden rounded-3xl bg-background">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group flex flex-col p-6 sm:p-10 border-b md:border-b-0 md:border-r last:border-0 border-border transition-colors duration-300 hover:bg-secondary/40"
                        >
                            {/* Step number + tag + icon */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-sm font-sans font-bold text-primary/50 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                                        {service.id}
                                    </span>
                                    <span className="text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-primary/40">
                                        {service.tag}
                                    </span>
                                </div>
                                <service.icon className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors duration-300" />
                            </div>

                            {/* The question on the visitor's mind */}
                            <p className="text-base sm:text-lg font-sans text-muted-foreground italic leading-snug mb-5">
                                &ldquo;{service.question}&rdquo;
                            </p>

                            {/* Custom GSAP vector animation + plain caption */}
                            <div className="relative mb-6 overflow-hidden rounded-2xl border border-border/60 bg-secondary/30 aspect-[3/2]">
                                <ServiceVisual serviceKey={service.key as ServiceKey} />
                                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 px-2.5 py-1 text-[11px] font-sans font-medium text-primary/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    {service.caption}
                                </span>
                            </div>

                            {/* Plain-language answer */}
                            <h3 className="text-2xl sm:text-[1.75rem] font-sans tracking-tight leading-tight">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-muted-foreground text-sm leading-relaxed font-sans">
                                {service.description}
                            </p>

                            {/* What you get */}
                            <ul className="mt-auto pt-6 border-t border-border/60 space-y-2.5">
                                {service.outcomes.map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-sm font-sans text-primary/80">
                                        <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
