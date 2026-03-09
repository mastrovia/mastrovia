"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimate } from 'motion/react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
    {
        name: 'Sreedev',
        role: 'Founder',
        company: 'Devxtra Academy',
        content: 'Working with Mastrovia significantly improved our workflow and operational efficiency. Their technical expertise and attention to detail made the entire process seamless and professional.',
        avatar: '',
    },
    {
        name: 'Yedhu Krishna',
        role: 'Founder',
        company: 'Wagmi',
        content: "Mastrovia's approach to building digital products is exceptional. They delivered a solution that not only met our requirements but exceeded our expectations in every way.",
        avatar: '',
    },
    {
        name: 'Magesh P',
        role: 'Founder',
        company: 'Alpha Roots',
        content: 'The team at Mastrovia brought our vision to life with precision and creativity. Their commitment to quality and attention to detail is unmatched in the industry.',
        avatar: '',
    }
];

// Repeat testimonials to ensure continuous loop in marquee
const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-none w-[280px] sm:w-[450px] bg-card/40 backdrop-blur-sm border border-border/50 p-6 sm:p-8 rounded-[2rem] flex flex-col gap-4 sm:gap-6 group hover:border-primary/30 transition-all duration-300">
        <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary/20" />
        </div>

        <p className="text-sm sm:text-lg leading-relaxed text-foreground/90 font-sans tracking-tight italic">
            "{testimonial.content}"
        </p>

        <div className="flex items-center gap-3 sm:gap-4 mt-auto">
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary/10">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonial.name?.slice(0, 1)?.toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <h4 className="font-bold text-sm sm:text-base tracking-tight leading-tight">
                    {testimonial.name}
                </h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5 sm:mt-1">
                    {testimonial.role}, {testimonial.company}
                </p>
            </div>
        </div>
    </div>
);

const Marquee = ({ children, reverse = false, duration = 60 }: { children: React.ReactNode, reverse?: boolean, duration?: number }) => {
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef<any>(null);

    useEffect(() => {
        const controls = animate(
            scope.current,
            { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] },
            {
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }
        );
        animationRef.current = controls;
        return () => controls.stop();
    }, [duration, reverse, animate, scope]);

    useEffect(() => {
        if (animationRef.current) {
            if (isHovered) {
                animationRef.current.pause();
            } else {
                animationRef.current.play();
            }
        }
    }, [isHovered]);

    return (
        <div 
            className="flex overflow-hidden py-4 select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                ref={scope}
                className="flex gap-4 sm:gap-8 px-4 w-fit"
            >
                {children}
                {children}
            </div>
        </div>
    );
};

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-24 bg-muted/5 relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10 mb-12 sm:mb-16">
                <div className="md:text-center">
                    <h2 className="text-3xl md:text-5xl tracking-tight mb-4 leading-tight">
                        Words of praise from others <br />
                        <span className="text-foreground/60 italic">about our presence.</span>
                    </h2>
                </div>
            </div>

            <div className="relative flex flex-col gap-4">
                {/* Responsive Left and Right fades */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 md:w-56 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 md:w-56 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <Marquee>
                    {repeatedTestimonials.slice(0, 6).map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
