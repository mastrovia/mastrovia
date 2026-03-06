import { motion } from "motion/react";

const niches = [
    "Real Estate",
    "E-Commerce",
    "Restaurants & Cafés",
    "Healthcare",
    "SaaS Platforms",
    "Education & EdTech",
    "Fashion & Lifestyle",
    "Fitness & Wellness",
    "Travel & Hospitality",
    "Finance & Fintech",
    "Automotive",
    "Entertainment",
    "Legal Services",
    "Architecture & Interior",
    "Non-Profit & NGO",
    "Logistics & Supply Chain",
];

export default function TopMarquee() {
    // Duplicate items enough to fill the screen seamlessly
    const items = [...niches, ...niches];

    return (
        <div className="fixed top-0 left-0 w-full z-[60] bg-foreground text-background overflow-hidden select-none">
            <div className="relative flex items-center h-8">
                <motion.div
                    className="flex items-center gap-0 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    {items.map((niche, idx) => (
                        <span key={idx} className="flex items-center">
                            <span className="text-[11px] font-semibold tracking-wide uppercase px-4">
                                {niche}
                            </span>
                            <span className="text-primary text-[8px]">✦</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
