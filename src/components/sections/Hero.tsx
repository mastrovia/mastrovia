import { FC } from "react";
import { motion } from "motion/react";
import AnimatedButton from "@/components/common/animated-button";
import { ContactPopup } from "@/components/common/ContactPopup";

export const Hero: FC = () => {
    return (
        <section className="relative min-h-[93vh] flex items-center justify-center overflow-hidden px-4 textured-surface">
            {/* Animated Gradient Glow Backgrounds */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Left Middle Glow */}
                <div className="absolute -left-[30%] top-[20%] w-[80vw] h-[80vw] min-w-[350px] min-h-[350px] sm:-left-[20%] sm:top-[30%] sm:w-[50vw] sm:h-[50vw] opacity-20 dark:opacity-[0.15]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full h-full rounded-full bg-[#E1FF00] mix-blend-multiply dark:mix-blend-screen blur-[80px] sm:blur-[120px] md:blur-[140px]"
                    />
                </div>
                {/* Top Right Glow */}
                <div className="absolute -right-[20%] -top-[10%] w-[70vw] h-[70vw] min-w-[300px] min-h-[300px] sm:-right-[10%] sm:-top-[20%] sm:w-[45vw] sm:h-[45vw] opacity-20 dark:opacity-[0.12]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="w-full h-full rounded-full bg-[#E1FF00] mix-blend-multiply dark:mix-blend-screen blur-[80px] sm:blur-[120px] md:blur-[140px]"
                    />
                </div>
            </div>

            <div className="container relative z-20 mx-auto text-center max-w-5xl">
                {/* Minimal Professional Heading */}
                <motion.div
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: .7, ease: "easeOut" }}
                >
                    <h1 className="text-[20vw] sm:text-9xl lg:text-[10rem] tracking-[-0.04em] leading-[1.1] mb-8 capitalize">
                        digital <br />
                        <span className="text-primary italic">architects</span>
                    </h1>
                </motion.div>

                {/* Concise Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base sm:text-lg text-muted-foreground mb-12 max-w-md mx-auto font-sans leading-relaxed tracking-tight"
                >
                    We build high-performance digital infrastructure for brands that
                    refuse to be silent.
                </motion.p>

                {/* Minimal Action Item */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <ContactPopup>
                        <AnimatedButton className="font-bold w-full sm:w-auto">
                            Get Started
                        </AnimatedButton>
                    </ContactPopup>
                    <a href="/cost-estimate" className="w-full sm:w-auto">
                        <AnimatedButton
                            variant="outline"
                            className="font-bold w-full"
                        >
                            Estimate Cost
                        </AnimatedButton>
                    </a>
                </motion.div>
            </div>

            {/* Bottom Fade Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </section>
    );
};
