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
    const quoteRef = useRef<HTMLParagraphElement>(null);
    const prevH = useRef(0);
    const tweenRef = useRef<gsap.core.Tween | null>(null);
    const touchX = useRef(0);

    const t = testimonials[active];
    const go = (i: number) =>
        setActive((i + testimonials.length) % testimonials.length);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // Smooth section height: lock previous height, tween to the new one.
                // useGSAP runs in useLayoutEffect (pre-paint), so there is no snap.
                const q = quoteRef.current;
                if (q) {
                    q.style.height = "auto";
                    const target = q.offsetHeight;
                    if (prevH.current && Math.abs(prevH.current - target) > 1) {
                        q.style.overflow = "hidden";
                        gsap.fromTo(
                            q,
                            { height: prevH.current },
                            {
                                height: target,
                                duration: 0.6,
                                ease: "power3.inOut",
                                onComplete: () => {
                                    q.style.height = "auto";
                                    q.style.overflow = "";
                                },
                            }
                        );
                    }
                    prevH.current = target;
                }

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

                // hairline progress → auto-advance (drives every active bar: desktop + mobile)
                const bars = gsap.utils.toArray<HTMLElement>(
                    ".progress-bar",
                    root.current
                );
                if (bars.length) {
                    gsap.set(bars, { scaleX: 0, transformOrigin: "left" });
                    tweenRef.current = gsap.to(bars, {
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
                className="container mx-auto px-8"
                onMouseEnter={() => tweenRef.current?.pause()}
                onMouseLeave={() => tweenRef.current?.resume()}
            >
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl tracking-tight">
                        Words of praise from others <br />
                        <span className="text-primary italic">about our presence.</span>
                    </h2>
                </div>

                {/* Editorial grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
                    {/* Client index — desktop only */}
                    <div className="hidden lg:flex order-2 lg:order-1 lg:col-span-4 flex-col">
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
                                            className="progress-bar absolute left-0 -top-px h-px w-full bg-foreground"
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
                    <div
                        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                        onTouchEnd={(e) => {
                            const dx = e.changedTouches[0].clientX - touchX.current;
                            if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
                        }}
                        className="order-1 lg:order-2 lg:col-span-8 lg:pl-16 flex flex-col justify-between min-h-[360px]"
                    >
                        <div>
                            <span className="reveal-mark block font-alumni text-[7rem] leading-[0.5] text-foreground/10 select-none">
                                &ldquo;
                            </span>
                            <p
                                ref={quoteRef}
                                className="mt-6 text-2xl md:text-4xl lg:text-[2.7rem] font-light leading-[1.28] tracking-tight"
                            >
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

                        {/* Mobile stepper — numbered tabs + progress (swipe also works) */}
                        <div className="flex lg:hidden items-stretch gap-3 mt-8">
                            {testimonials.map((item, i) => {
                                const isActive = i === active;
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => go(i)}
                                        aria-label={`Show testimonial from ${item.name}`}
                                        aria-pressed={isActive}
                                        className="relative flex-1 pt-3"
                                    >
                                        <span className="absolute left-0 top-0 h-px w-full bg-border" />
                                        {isActive && (
                                            <span
                                                className="progress-bar absolute left-0 top-0 h-px w-full bg-foreground"
                                                style={{ transform: "scaleX(0)" }}
                                            />
                                        )}
                                        <span
                                            className={`font-alumni text-sm tabular-nums transition-colors ${
                                                isActive
                                                    ? "text-foreground"
                                                    : "text-muted-foreground/50"
                                            }`}
                                        >
                                            0{i + 1}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
