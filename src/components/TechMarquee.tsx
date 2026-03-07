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

export function TechMarquee() {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const directionFactor = useRef<number>(1);

    useAnimationFrame((_t, delta) => {
        let velocityMultiplier = velocityFactor.get();

        if (velocityMultiplier < 0) {
            directionFactor.current = -1;
        } else if (velocityMultiplier > 0) {
            directionFactor.current = 1;
        }

        // Base speed
        let moveBy = directionFactor.current * -0.015 * (delta / 16);
        // Add velocity effect
        moveBy += moveBy * Math.abs(velocityMultiplier);

        let currentX = baseX.get() + moveBy;

        // We have 4 identical groups, so each group takes 25% of the total width.
        // Wrap around to create an infinite scroll illusion.
        if (currentX <= -25) {
            currentX += 25;
        } else if (currentX > 0) {
            currentX -= 25;
        }

        baseX.set(currentX);
    });

    const x = useTransform(baseX, (v) => `${v}%`);

    return (
        <div className="w-full py-10 bg-background border-y border-border/50 overflow-hidden select-none flex">
            <motion.div className="flex" style={{ x }}>
                {[0, 1, 2, 3].map((groupIdx) => (
                    <div key={groupIdx} className="flex items-center shrink-0 pr-12 gap-12">
                        {technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-12 group shrink-0">
                                <span className="text-2xl md:text-4xl font-light tracking-tight text-primary/50 hover:text-primary transition-colors duration-200 cursor-default">
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
