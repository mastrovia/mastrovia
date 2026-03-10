"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { contactInfo, socials } from "@/data/contactData";

interface ContactInfoProps {
    compact?: boolean;
}

export const ContactInfo: FC<ContactInfoProps> = ({ compact = false }) => {
    return (
        <div className={`space-y-12 ${compact ? "md:overflow-y-auto" : ""}`}>
            <div className="space-y-6">
                <h2 className={`${compact ? "text-2xl sm:text-4xl" : "text-3xl sm:text-5xl"} tracking-tight`}>
                    {compact ? "Let's Build something" : "Ready to create"} <br />
                    <span className="text-primary italic">{compact ? "amazing" : "something great?"}</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-md font-sans leading-relaxed">
                    {compact
                        ? "Let's discuss your project and how we can help you achieve your goals."
                        : "Whether you have a specific project in mind or just want to explore possibilities, we're here to help you navigate the digital landscape."
                    }
                </p>
            </div>

            <div className="space-y-6 mt-8 md:mt-10">
                {contactInfo.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 group"
                    >
                        <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                                {item.label}
                            </p>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="text-base font-sans tracking-tight hover:text-primary transition-colors"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-base font-sans tracking-tight">{item.value}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-6 pt-8">
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Follow Our Journey
                </p>
                <div className="flex gap-4">
                    {socials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 bg-background/50"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
