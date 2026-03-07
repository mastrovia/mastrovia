import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
    {
        question: "What kind of websites do you build?",
        answer: "We build everything from high-performance landing pages and corporate websites to complex e-commerce platforms and custom web applications. Our focus is always on speed, security, and scalable architecture."
    },
    {
        question: "How do we choose between custom, low-code, or no-code?",
        answer: "We assess your project's specific needs, budget, and timeline. For complex, highly scalable applications with unique logic, custom development is best. For rapid deployment and easier content management, high-end no-code or low-code solutions might be recommended."
    },
    {
        question: "What does a functional design (FD) actually entail?",
        answer: "A functional design serves as the blueprint for your project. It details the user flows, data structures, features, and interactions without getting bogged down in visual aesthetics, ensuring all technical requirements are precisely mapped out before development begins."
    },
    {
        question: "How do you ensure the website is easily discoverable?",
        answer: "Discoverability is at the core of our approach. During the design phase, we consider SEO, technical performance, and content structure. We ensure your website scores high on speed, relevance, and authority. Moreover, we optimize for the search engines of tomorrow, such as AI-driven LLMs."
    },
    {
        question: "How does the development process work with you?",
        answer: "Our process begins with deep discovery and strategy, followed by wireframing, UI/UX design, development, and rigorous testing. We work closely with you interactively at every stage to ensure the final product aligns perfectly with your vision and business goals."
    },
    {
        question: "How much does a website cost at Mastrovia?",
        answer: "Every project is unique, and pricing depends on the scope, complexity, and features required. We offer transparent pricing based on the value we deliver. You can generate an estimated cost using our Estimate Cost tool, or contact us for a detailed proposal."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(3); // Keep 4th item open by default like the image

    return (
        <section className="py-24 sm:py-32 bg-background border-t border-border/40">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
                        <div className="inline-flex items-center gap-3 mb-6">
                            {/* <div className="w-2 h-2 rounded-full bg-[#A3E635]" /> Lime greenish dot matching the image */}
                            <span className="text-4xl tracking-wide">
                                Frequently asked questions
                            </span>
                        </div>
                        <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-sm font-sans">
                            Everything you need to know about our websites. Here you can read how we develop digital accelerators and create unique digital experiences for your target audience.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-2/3 border-t border-border/50">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div key={idx} className="border-b border-border/50">
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full py-8 sm:py-10 flex items-start gap-6 sm:gap-10 text-left group"
                                    >
                                        <span className="text-sm font-mono text-muted-foreground mt-1.5 sm:mt-2 min-w-[2ch]">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1 overflow-hidden">
                                            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-sans tracking-tight transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                                                {faq.question}
                                            </h3>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                    >
                                                        <div className="pt-6 sm:pt-8 pr-4">
                                                            <p className="text-foreground/70 leading-relaxed text-sm sm:text-base font-sans">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
