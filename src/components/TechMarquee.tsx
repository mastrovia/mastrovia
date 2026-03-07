import { motion } from "motion/react";

const technologies = [
    "node.js",
    "react",
    "aws",
    "mongodb",
    "sql",
    "react-native",
    "figma",
    "cloud",
];

export function TechMarquee() {
    // Triple the items to ensure seamless loop
    const displayItems = [...technologies, ...technologies, ...technologies];

    return (
        <div className="w-full py-12 bg-background border-y border-border/50 overflow-hidden select-none">
            <div className="relative flex items-center">
                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap px-6"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        x: {
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    {displayItems.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-12 group">
                            <span className="text-3xl md:text-5xl font-light tracking-tight text-muted-foreground/30 hover:text-primary transition-colors duration-500 cursor-default">
                                {tech}
                            </span>
                            <span className="text-primary/20 text-2xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
