"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const testimonials = [
    {
        name: "Sreedev",
        role: "Founder",
        company: "Devxtra Academy",
        content:
            "Working with Mastrovia significantly improved our workflow and operational efficiency. Their technical expertise and attention to detail made the entire process seamless and professional.",
    },
    {
        name: "Yedhu Krishna",
        role: "Founder",
        company: "Wagmi",
        content:
            "Mastrovia's approach to building digital products is exceptional. They delivered a solution that not only met our requirements but exceeded our expectations in every way.",
    },
    {
        name: "Magesh P",
        role: "Founder",
        company: "Alpha Roots",
        content:
            "The team at Mastrovia brought our vision to life with precision and creativity. Their commitment to quality and attention to detail is unmatched in the industry.",
    },
];

const DURATION = 7; // seconds per testimonial

export function Testimonials() {
    const [active, setActive] = useState(0);
    const root = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLSpanElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    const t = testimonials[active];
    const go = (i: number) =>
        setActive((i + testimonials.length) % testimonials.length);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                const tl = gsap.timeline();

                tl.from(".reveal-mark", {
                    scale: 0.7,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(2)",
                })
                    .from(
                        ".reveal-word",
                        {
                            yPercent: 120,
                            opacity: 0,
                            filter: "blur(8px)",
                            duration: 0.7,
                            ease: "power3.out",
                            stagger: 0.018,
                        },
                        "-=0.35"
                    )
                    .from(
                        ".reveal-meta",
                        { y: 18, opacity: 0, duration: 0.6, ease: "power2.out" },
                        "-=0.45"
                    );

                // hairline progress → auto-advance
                if (progressRef.current) {
                    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left" });
                    tweenRef.current = gsap.to(progressRef.current, {
                        scaleX: 1,
                        duration: DURATION,
                        ease: "none",
                        delay: 0.5,
                        onComplete: () => go(active + 1),
                    });
                }
            });

            return () => mm.revert();
        },
        { scope: root, dependencies: [active], revertOnUpdate: true }
    );

    return (
        <section
            id="testimonials"
            className="py-20 sm:py-32 bg-muted/5 border-t border-border/50 relative overflow-hidden"
        >
            <div
                ref={root}
                className="container mx-auto px-6 sm:px-8 max-w-7xl"
                onMouseEnter={() => tweenRef.current?.pause()}
                onMouseLeave={() => tweenRef.current?.resume()}
            >
                {/* Header */}
                <div className="mb-16">
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5 flex items-center gap-3">
                        <span className="w-7 h-px bg-foreground/40" />
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-6xl tracking-tight">
                        Words of praise from others <br />
                        <span className="text-foreground/40 italic font-light">
                            about our presence.
                        </span>
                    </h2>
                </div>

                {/* Editorial grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
                    {/* Client index */}
                    <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col">
                        {testimonials.map((item, i) => {
                            const isActive = i === active;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => go(i)}
                                    aria-label={`Show testimonial from ${item.name}, ${item.company}`}
                                    aria-pressed={isActive}
                                    className={`group relative text-left border-t border-border/60 py-5 transition-opacity duration-300 ${
                                        isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                                    }`}
                                >
                                    {isActive && (
                                        <span
                                            ref={progressRef}
                                            className="absolute left-0 -top-px h-px w-full bg-foreground"
                                            style={{ transform: "scaleX(0)" }}
                                        />
                                    )}
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-alumni text-base tabular-nums text-muted-foreground w-6">
                                            0{i + 1}
                                        </span>
                                        <div>
                                            <div className="text-lg font-medium tracking-tight leading-tight">
                                                {item.name}
                                            </div>
                                            <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                                                {item.company}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                        <div className="border-t border-border/60" />
                    </div>

                    {/* Featured quote */}
                    <div className="order-1 lg:order-2 lg:col-span-8 lg:pl-16 flex flex-col justify-between min-h-[360px]">
                        <div>
                            <span className="reveal-mark block font-alumni text-[7rem] leading-[0.5] text-foreground/10 select-none">
                                &ldquo;
                            </span>
                            <p className="mt-6 text-2xl md:text-4xl lg:text-[2.7rem] font-light leading-[1.28] tracking-tight">
                                {t.content.split(" ").map((w, i) => (
                                    <span
                                        key={`${active}-${i}`}
                                        className="reveal-word inline-block mr-[0.26em] will-change-transform"
                                    >
                                        {w}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div className="reveal-meta flex items-center justify-between mt-12 pt-8 border-t border-border/60">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-medium select-none">
                                    {t.name.slice(0, 1).toUpperCase()}
                                </div>
                                <div>
                                    <div className="font-medium tracking-tight leading-tight">
                                        {t.name}
                                    </div>
                                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                                        {t.role}, {t.company}
                                    </div>
                                </div>
                            </div>
                            <span className="font-alumni text-5xl text-foreground/10 tabular-nums leading-none">
                                0{active + 1}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
