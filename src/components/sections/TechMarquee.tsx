"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "motion/react";

const technologies = [
    "Creative thinking",
    "Idea to Production",
    "ERP",
    "Monitoring",
];

const GROUP_COUNT = 10;
const WRAP_PERCENTAGE = -100 / GROUP_COUNT;

export function TechMarquee() {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const direction = useRef(1); // 1 = left, -1 = right

    // Smooth out the velocity so the marquee doesn't jerk
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 40,
        stiffness: 200,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
        clamp: false,
    });

    useAnimationFrame((_t, delta) => {
        let currentVelocity = velocityFactor.get();

        // Update the persistent direction based on scroll
        if (currentVelocity < 0) {
            direction.current = -1; // Scrolling up -> marquee moves right
        } else if (currentVelocity > 0) {
            direction.current = 1;  // Scrolling down -> marquee moves left
        }

        // Base speed is affected by the persistent direction
        let moveBy = direction.current * -0.015 * (delta / 16);

        // Add velocity effect seamlessly (always adding to the speed in the current direction)
        moveBy += direction.current * -0.015 * (delta / 16) * Math.abs(currentVelocity);

        let currentX = baseX.get() + moveBy;

        // Perfect modulo wrapping for infinite scroll, immune to frame delta leaps
        if (currentX <= WRAP_PERCENTAGE) {
            currentX = currentX % Math.abs(WRAP_PERCENTAGE);
        } else if (currentX > 0) {
            currentX = (currentX % Math.abs(WRAP_PERCENTAGE)) + WRAP_PERCENTAGE;
        }

        baseX.set(currentX);
    });

    const x = useTransform(baseX, (v) => `${v}%`);

    return (
        <div className="w-full py-10 bg-background border-y border-border/50 overflow-hidden select-none flex">
            <motion.div className="flex" style={{ x }}>
                {Array.from({ length: GROUP_COUNT }).map((_, groupIdx) => (
                    <div key={groupIdx} className="flex items-center shrink-0 pr-12 gap-12">
                        {technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-12 group shrink-0">
                                <span className="text-2xl md:text-4xl font-light tracking-tight text-primary/50 hover:text-primary transition-colors duration-200 cursor-default whitespace-nowrap">
                                    {tech}
                                </span>
                                <span className="text-primary/20 text-2xl shrink-0">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
