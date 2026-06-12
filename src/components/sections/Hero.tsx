"use client";

import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedButton from "@/components/common/animated-button";
import { ContactPopup } from "@/components/common/ContactPopup";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

const HEADLINE = ["Digital", "Architects"];
const ROTATING = ["interfaces", "platforms", "brands", "infrastructure"];

// Deterministic spark positions (no Math.random in render -> no hydration drift)
const SPARKS = [
    [12, 18], [22, 72], [34, 9], [40, 88], [18, 46], [55, 30], [63, 78],
    [70, 14], [78, 58], [28, 60], [48, 6], [60, 50], [84, 38], [15, 84],
];

/** Per-character spans for one word (motion-graphics target). */
const chars = (word: string, cls: string) =>
    word.split("").map((c, i) => (
        <span key={i} className={`hch inline-block ${cls}`}>
            {c}
        </span>
    ));

export const Hero: FC = () => {
    const root = useRef<HTMLElement>(null);
    const active = useRef<HTMLDivElement>(null); // lime dot layer (masked)
    const rotor = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const fine = window.matchMedia("(pointer: fine)").matches;

            // ---- Headline: blur-to-clear reveal (in place) ----
            const tl = gsap.timeline();
            tl.from(".hero-fade", { opacity: 0, y: 18, duration: 0.8, stagger: 0.1 }, 0);
            if (!reduce) {
                tl.from(
                    ".hch",
                    {
                        opacity: 0,
                        filter: "blur(14px)",
                        duration: 0.9,
                        ease: "power2.out",
                        stagger: 0.04,
                    },
                    0.1
                );
            }

            // ---- Rotating word: width-morph + soft blurred slide ----
            const words = gsap.utils.toArray<HTMLElement>(".rot-word");
            const measure = (el: HTMLElement) => el.getBoundingClientRect().width + 4;
            gsap.set(words, { yPercent: 115, opacity: 0, filter: "blur(6px)" });
            gsap.set(words[0], { yPercent: 0, opacity: 1, filter: "blur(0px)" });
            const setW = () => gsap.set(rotor.current, { width: measure(words[0]) });
            setW();
            document.fonts?.ready?.then(setW);
            if (!reduce && words.length > 1) {
                const rot = gsap.timeline({ repeat: -1, delay: 1.6 });
                words.forEach((_, i) => {
                    const n = (i + 1) % words.length;
                    rot.addLabel("s" + i, "+=1.9")
                        .to(rotor.current, { width: () => measure(words[n]), duration: 0.7, ease: "power3.inOut" }, "s" + i)
                        .to(words[i], { yPercent: -115, opacity: 0, filter: "blur(6px)", duration: 0.55, ease: "power2.in" }, "s" + i)
                        .fromTo(
                            words[n],
                            { yPercent: 115, opacity: 0, filter: "blur(6px)" },
                            { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 0.65, ease: "power3.out" },
                            "s" + i + "+=0.14"
                        );
                });
            }

            // ---- Contribution grid: sparks twinkle ----
            if (!reduce) {
                gsap.fromTo(
                    ".spark",
                    { opacity: 0, scale: 0.4 },
                    {
                        opacity: () => 0.5 + Math.random() * 0.5,
                        scale: 1,
                        duration: () => 0.8 + Math.random() * 1.4,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        stagger: { each: 0.18, from: "random" },
                    }
                );

                // Drifting reveal blobs so the grid is alive without a cursor
                const drift = (vx: string, vy: string, x: number[], y: number[], d: number) =>
                    gsap.to(active.current, {
                        keyframes: { [vx]: x.map((v) => v + "%"), [vy]: y.map((v) => v + "%") },
                        duration: d,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                drift("--bx1", "--by1", [25, 60, 40], [30, 55, 70], 14);
                drift("--bx2", "--by2", [75, 45, 80], [65, 35, 60], 18);
            }

            // ---- Cursor lights up nearby cells (lime spotlight) ----
            if (!fine || reduce) return;
            gsap.set(active.current, { "--cr": "150px" } as gsap.TweenVars);
            const setMX = gsap.quickSetter(active.current, "--mx", "px");
            const setMY = gsap.quickSetter(active.current, "--my", "px");
            const onMove = (e: MouseEvent) => {
                const r = root.current!.getBoundingClientRect();
                setMX(e.clientX - r.left);
                setMY(e.clientY - r.top);
            };
            window.addEventListener("mousemove", onMove);
            return () => window.removeEventListener("mousemove", onMove);
        },
        { scope: root }
    );

    // 22px dot cell, GitHub-contribution style
    const dotBg =
        "radial-gradient(circle at center, currentColor 0 2px, transparent 2.6px)";

    return (
        <section
            ref={root}
            className="relative min-h-[93vh] flex flex-col items-center justify-center overflow-hidden px-4 textured-surface"
        >
            {/* Background: contribution dot-matrix */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Faint base grid (empty contributions) */}
                <div
                    className="absolute inset-0 text-foreground/[0.14] dark:text-foreground/[0.10]"
                    style={{ backgroundImage: dotBg, backgroundSize: "22px 22px" }}
                />

                {/* Lime active grid, revealed by cursor + drifting blobs */}
                <div
                    ref={active}
                    className="absolute inset-0 text-[#E1FF00]"
                    style={
                        {
                            backgroundImage: dotBg,
                            backgroundSize: "22px 22px",
                            "--cr": "0px",
                            "--bx1": "25%",
                            "--by1": "30%",
                            "--bx2": "75%",
                            "--by2": "65%",
                            WebkitMaskImage:
                                "radial-gradient(circle var(--cr) at var(--mx,-100px) var(--my,-100px), #000 0%, transparent 70%), radial-gradient(circle 160px at var(--bx1) var(--by1), #000 0%, transparent 72%), radial-gradient(circle 120px at var(--bx2) var(--by2), #000 0%, transparent 72%)",
                            maskImage:
                                "radial-gradient(circle var(--cr) at var(--mx,-100px) var(--my,-100px), #000 0%, transparent 70%), radial-gradient(circle 160px at var(--bx1) var(--by1), #000 0%, transparent 72%), radial-gradient(circle 120px at var(--bx2) var(--by2), #000 0%, transparent 72%)",
                        } as React.CSSProperties
                    }
                />

                {/* Twinkling spark cells */}
                {SPARKS.map(([t, l], i) => (
                    <span
                        key={i}
                        className="spark absolute h-[6px] w-[6px] rounded-[2px] bg-[#E1FF00] shadow-[0_0_12px_2px_rgba(225,255,0,0.5)]"
                        style={{ top: `${t}%`, left: `${l}%` }}
                    />
                ))}

                {/* Center wash so text stays readable over the grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 62% 55% at 50% 45%, hsl(var(--background)) 0%, hsl(var(--background)/0.6) 45%, transparent 78%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 mx-auto w-full max-w-6xl text-center">
                {/* Eyebrow: live "activity" status */}
                <div className="hero-fade mb-10 inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-muted-foreground sm:text-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E1FF00] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E1FF00]" />
                    </span>
                    Open for new projects
                </div>

                {/* Headline (scramble / decode motion-graphics) */}
                <h1
                    aria-label={HEADLINE.join(" ")}
                    className="alumni-sans select-none font-medium leading-[0.92] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(3rem, 13vw, 11rem)" }}
                >
                    <span aria-hidden className="word-0 block whitespace-nowrap text-foreground">
                        {chars(HEADLINE[0], "")}
                    </span>
                    <span aria-hidden className="word-1 block whitespace-nowrap italic text-[#E1FF00]">
                        {chars(HEADLINE[1], "")}
                    </span>
                </h1>

                {/* Rotating descriptor */}
                <div className="hero-fade mt-8 flex items-center justify-center gap-x-3 text-lg text-muted-foreground sm:text-2xl">
                    <span className="font-sans tracking-tight">We engineer</span>
                    <span
                        ref={rotor}
                        className="relative inline-block h-[1.5em] overflow-hidden text-left align-bottom font-medium text-foreground"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(180deg, transparent 0%, #000 28%, #000 72%, transparent 100%)",
                            maskImage:
                                "linear-gradient(180deg, transparent 0%, #000 28%, #000 72%, transparent 100%)",
                        }}
                    >
                        {ROTATING.map((w) => (
                            <span
                                key={w}
                                className="rot-word absolute left-0 top-0 flex h-full items-center whitespace-nowrap will-change-transform"
                            >
                                {w}
                            </span>
                        ))}
                    </span>
                </div>

                {/* CTAs */}
                <div className="hero-fade mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <ContactPopup>
                        <AnimatedButton className="w-full font-bold capitalize sm:w-auto">
                            Book a call
                        </AnimatedButton>
                    </ContactPopup>
                    <Link href="/cost-estimate" className="w-full sm:w-auto">
                        <AnimatedButton variant="outline" className="w-full font-bold">
                            Estimate Cost
                        </AnimatedButton>
                    </Link>
                </div>
            </div>

            {/* Bottom fade for smooth section transition */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
