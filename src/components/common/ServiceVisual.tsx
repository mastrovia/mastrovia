"use client";

import { FC } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export type ServiceKey = "design" | "develop" | "deploy";

/**
 * Builds a paused, NON-looping timeline for one service visual.
 * The parent (Services) stitches the three together so they play
 * one after another — calm, slow, and easy to follow.
 *
 * Animations are intentionally minimal: each one shows a single,
 * recognisable idea so a non-technical visitor "gets it" at a glance.
 */
export function buildServiceTimeline(svg: Element, key: ServiceKey) {
    const q = gsap.utils.selector(svg);
    const tl = gsap.timeline({ paused: true, defaults: { ease: "sine.inOut" } });

    if (key === "design") {
        // A layout being sketched: frame draws, blocks fade in, a line is drawn.
        gsap.set(q(".sv-block"), { opacity: 0 });
        tl.from(q(".sv-frame"), { drawSVG: "0%", duration: 1 })
            .to(q(".sv-block"), { opacity: 1, duration: 0.6, stagger: 0.2 }, "-=0.2")
            .from(q(".sv-pen"), { drawSVG: "0%", duration: 1.2 }, "-=0.1");
    }

    if (key === "develop") {
        // Code being written: window draws, </> appears, lines "type" in.
        gsap.set(q(".sv-line"), { scaleX: 0, transformOrigin: "left center" });
        tl.from(q(".sv-win"), { drawSVG: "0%", duration: 1 })
            .from(q(".sv-bracket"), { drawSVG: "0%", duration: 1, stagger: 0.18 }, "-=0.3")
            .to(q(".sv-line"), { scaleX: 1, duration: 0.5, stagger: 0.2 }, "-=0.3");
    }

    if (key === "deploy") {
        // Going live: site uploads to the cloud, then a green "live" check.
        tl.from(q(".sv-cloud"), { drawSVG: "0%", duration: 1.1 })
            .from(q(".sv-server"), { drawSVG: "0%", duration: 0.7 }, "-=0.5")
            .fromTo(q(".sv-arrow"), { y: 14, opacity: 0 }, { y: -4, opacity: 1, duration: 0.7 }, "-=0.3")
            .to(q(".sv-arrow"), { y: -16, opacity: 0, duration: 0.6 })
            .from(q(".sv-progress"), { drawSVG: "0%", duration: 0.9 }, "-=0.7")
            .from(q(".sv-check"), { drawSVG: "0%", duration: 0.6 }, "-=0.1")
            .fromTo(
                q(".sv-pulse"),
                { scale: 0.6, opacity: 0.7, transformOrigin: "center" },
                { scale: 1.5, opacity: 0, duration: 1 },
                "-=0.2"
            );
    }

    return tl;
}

const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

/** Pure SVG renderer — animation is driven by the parent via buildServiceTimeline. */
const ServiceVisual: FC<{ serviceKey: ServiceKey }> = ({ serviceKey }) => {
    if (serviceKey === "design") {
        return (
            <svg data-svc="design" viewBox="0 0 240 160" className="w-full h-full text-primary" role="img" aria-label="Designing a layout">
                <rect className="sv-frame" x="40" y="28" width="160" height="104" rx="8" {...strokeProps} />
                <line x1="40" y1="48" x2="200" y2="48" {...strokeProps} strokeWidth={1.5} />
                <circle cx="52" cy="38" r="2.5" fill="currentColor" />
                <circle cx="62" cy="38" r="2.5" fill="currentColor" />
                <circle cx="72" cy="38" r="2.5" fill="currentColor" />
                <rect className="sv-block" x="54" y="62" width="60" height="40" rx="4" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.5" />
                <rect className="sv-block" x="124" y="62" width="62" height="14" rx="4" fill="currentColor" opacity="0.12" />
                <rect className="sv-block" x="124" y="84" width="50" height="9" rx="4" fill="currentColor" opacity="0.12" />
                <rect className="sv-block" x="54" y="110" width="132" height="9" rx="4" fill="currentColor" opacity="0.12" />
                <path className="sv-pen" d="M60 100 C 90 70, 120 130, 150 90 S 190 60, 196 80" {...strokeProps} />
            </svg>
        );
    }

    if (serviceKey === "develop") {
        return (
            <svg data-svc="develop" viewBox="0 0 240 160" className="w-full h-full text-primary" role="img" aria-label="Writing code">
                <rect className="sv-win" x="34" y="26" width="172" height="108" rx="8" {...strokeProps} />
                <line x1="34" y1="46" x2="206" y2="46" {...strokeProps} strokeWidth={1.5} />
                <circle cx="46" cy="36" r="2.5" fill="currentColor" />
                <circle cx="56" cy="36" r="2.5" fill="currentColor" />
                <circle cx="66" cy="36" r="2.5" fill="currentColor" />
                <path className="sv-bracket" d="M150 70 L 138 84 L 150 98" {...strokeProps} />
                <path className="sv-bracket" d="M186 70 L 198 84 L 186 98" {...strokeProps} />
                <path className="sv-bracket" d="M172 64 L 162 104" {...strokeProps} />
                <rect className="sv-line" x="50" y="62" width="70" height="7" rx="3.5" fill="currentColor" opacity="0.85" />
                <rect className="sv-line" x="60" y="78" width="54" height="7" rx="3.5" fill="currentColor" opacity="0.55" />
                <rect className="sv-line" x="60" y="94" width="40" height="7" rx="3.5" fill="currentColor" opacity="0.55" />
                <rect className="sv-line" x="50" y="110" width="62" height="7" rx="3.5" fill="currentColor" opacity="0.85" />
            </svg>
        );
    }

    return (
        <svg data-svc="deploy" viewBox="0 0 240 160" className="w-full h-full text-primary" role="img" aria-label="Putting the site live">
            <path className="sv-cloud" d="M86 70 a22 22 0 0 1 43 -6 a18 18 0 0 1 17 24 H92 a16 16 0 0 1 -6 -18 Z" {...strokeProps} />
            <g className="sv-arrow">
                <line x1="118" y1="92" x2="118" y2="64" {...strokeProps} />
                <path d="M108 74 L 118 62 L 128 74" {...strokeProps} />
            </g>
            <rect className="sv-server" x="78" y="104" width="84" height="30" rx="6" {...strokeProps} />
            <circle cx="92" cy="119" r="3" fill="currentColor" />
            <line className="sv-progress" x1="106" y1="119" x2="150" y2="119" {...strokeProps} strokeWidth={4} />
            <circle className="sv-pulse" cx="176" cy="58" r="14" fill="currentColor" opacity="0.18" />
            <circle cx="176" cy="58" r="11" fill="currentColor" />
            <path className="sv-check" d="M171 58 L 175 62 L 182 54" fill="none" stroke="hsl(var(--background))" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ServiceVisual;
