"use client";

import { FC } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export type ServiceKey = "design" | "develop" | "deploy";

/**
 * Appends one service's animation onto a given timeline at `startPos`.
 * The parent (Services) calls this for each card on a single master
 * timeline, so the three play one after another — calm, slow, easy to
 * follow. (We append directly rather than nesting paused sub-timelines,
 * which a parent won't resume.)
 *
 * Each illustration is a single, iconic idea — minimal on purpose so a
 * non-technical visitor recognises it instantly.
 */
export function addServiceAnimation(
    tl: gsap.core.Timeline,
    svg: Element,
    key: ServiceKey,
    startPos: gsap.Position = ">"
) {
    const q = gsap.utils.selector(svg);

    if (key === "design") {
        tl.from(q(".sv-frame"), { drawSVG: "0%", duration: 1 }, startPos)
            .from(q(".sv-curve"), { drawSVG: "0%", duration: 1.2 }, "-=0.2")
            .from(q(".sv-node"), { scale: 0, opacity: 0, transformOrigin: "center", duration: 0.4, stagger: 0.15 }, "-=0.6");
    }

    if (key === "develop") {
        tl.from(q(".sv-bracket"), { drawSVG: "0%", duration: 1, stagger: 0.2 }, startPos)
            .from(q(".sv-underline"), { scaleX: 0, transformOrigin: "center", duration: 0.6 }, "-=0.2");
    }

    if (key === "deploy") {
        tl.from(q(".sv-cloud"), { drawSVG: "0%", duration: 1.2 }, startPos)
            .fromTo(q(".sv-arrow"), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
            .from(q(".sv-badge"), { scale: 0, opacity: 0, transformOrigin: "center", duration: 0.5 }, "-=0.1")
            .from(q(".sv-check"), { drawSVG: "0%", duration: 0.5 }, "-=0.2")
            .fromTo(q(".sv-pulse"), { scale: 0.5, opacity: 0.6, transformOrigin: "center" }, { scale: 1.6, opacity: 0, duration: 1 }, "-=0.3");
    }

    return tl;
}

const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

/** Pure SVG renderer — animation is driven by the parent via buildServiceTimeline. */
const ServiceVisual: FC<{ serviceKey: ServiceKey }> = ({ serviceKey }) => {
    if (serviceKey === "design") {
        return (
            <svg data-svc="design" viewBox="0 0 200 140" className="w-full h-full text-primary" role="img" aria-label="Designing">
                <rect className="sv-frame" x="36" y="28" width="128" height="84" rx="12" {...strokeProps} opacity="0.35" />
                {/* a vector pen-path — the universal "design" gesture */}
                <path className="sv-curve" d="M54 88 C 78 48, 116 100, 146 56" {...strokeProps} />
                <circle className="sv-node" cx="54" cy="88" r="5.5" {...strokeProps} fill="hsl(var(--background))" />
                <circle className="sv-node" cx="100" cy="74" r="5.5" {...strokeProps} fill="hsl(var(--background))" />
                <circle className="sv-node" cx="146" cy="56" r="5.5" {...strokeProps} fill="hsl(var(--background))" />
            </svg>
        );
    }

    if (serviceKey === "develop") {
        return (
            <svg data-svc="develop" viewBox="0 0 200 140" className="w-full h-full text-primary" role="img" aria-label="Writing code">
                {/* a big, minimal </> */}
                <path className="sv-bracket" d="M78 50 L 56 70 L 78 90" {...strokeProps} />
                <path className="sv-bracket" d="M112 40 L 88 100" {...strokeProps} />
                <path className="sv-bracket" d="M122 50 L 144 70 L 122 90" {...strokeProps} />
                <line className="sv-underline" x1="70" y1="112" x2="130" y2="112" {...strokeProps} opacity="0.35" />
            </svg>
        );
    }

    return (
        <svg data-svc="deploy" viewBox="0 0 200 140" className="w-full h-full text-primary" role="img" aria-label="Going live">
            {/* simple cloud with an up-arrow */}
            <path className="sv-cloud" d="M70 96 a24 24 0 0 1 4 -47 a26 26 0 0 1 49 6 a20 20 0 0 1 1 41 Z" {...strokeProps} />
            <g className="sv-arrow">
                <line x1="98" y1="92" x2="98" y2="62" {...strokeProps} />
                <path d="M86 73 L 98 60 L 110 73" {...strokeProps} />
            </g>
            {/* tiny "live" check badge */}
            <circle className="sv-pulse" cx="142" cy="48" r="15" fill="currentColor" opacity="0.16" />
            <circle className="sv-badge" cx="142" cy="48" r="12" fill="currentColor" />
            <path className="sv-check" d="M136 48 L 140 52 L 148 44" fill="none" stroke="hsl(var(--background))" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ServiceVisual;
