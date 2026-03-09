"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

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
    },
    {
        name: 'Arjun Das',
        role: 'CEO',
        company: 'Nova Soft',
        content: 'Mastrovia transformed our online presence. Their team is highly skilled and very responsive to our needs. Highly recommended for any digital project.',
        avatar: '',
    },
    {
        name: 'Sarah Chen',
        role: 'Product Manager',
        company: 'Nexus tech',
        content: 'The level of professionalism and technical depth Mastrovia brings to the table is refreshing. They don\'t just build code; they build solutions.',
        avatar: '',
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-none w-[300px] sm:w-[450px] bg-card/40 backdrop-blur-sm border border-border/50 p-6 sm:p-8 rounded-[2rem] flex flex-col gap-4 sm:gap-6 group hover:border-primary/30 transition-all duration-300">
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

const Carousel = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const lastActivityRef = useRef<number>(Date.now());
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    
    // Triple the testimonials for seamless looping
    const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

    const getSetWidth = useCallback(() => {
        if (innerRef.current) {
            return innerRef.current.scrollWidth / 3;
        }
        return 0;
    }, []);

    // Helper to perform the wrap jump
    const wrapX = useCallback((currentX: number) => {
        const setWidth = getSetWidth();
        if (setWidth === 0) return currentX;

        // The boundary is the middle set. If we go too far left or right, jump back.
        // Middle set starts at -setWidth and ends at -setWidth * 2.
        if (currentX <= -setWidth * 2) {
            return currentX + setWidth;
        } else if (currentX >= 0) {
            return currentX - setWidth;
        }
        return currentX;
    }, [getSetWidth]);

    const handleManualActivity = useCallback(() => {
        lastActivityRef.current = Date.now();
    }, []);

    // Continuous auto-scroll
    useAnimationFrame((_t, delta) => {
        const now = Date.now();
        const inactivityDuration = now - lastActivityRef.current;

        if (!isHovered && !isDragging && inactivityDuration > 1500) {
            const currentX = x.get();
            const setWidth = getSetWidth();
            if (setWidth === 0) return;

            // Slow continuous move left
            const moveBy = 0.04 * delta; 
            const nextX = wrapX(currentX - moveBy);
            x.set(nextX);
        }
    });

    // Handle wrapping during drag or scroll animation
    useEffect(() => {
        return x.on("change", (latest) => {
            const setWidth = getSetWidth();
            if (setWidth === 0) return;

            // If we've dragged or animated past boundaries, jump silently
            if (latest <= -setWidth * 2) {
                x.set(latest + setWidth);
            } else if (latest >= 0) {
                x.set(latest - setWidth);
            }
        });
    }, [x, getSetWidth]);

    // Initial positioning
    useEffect(() => {
        const timer = setTimeout(() => {
            const setWidth = getSetWidth();
            if (setWidth > 0) x.set(-setWidth);
        }, 100);
        return () => clearTimeout(timer);
    }, [x, getSetWidth]);

    const scroll = (direction: 'left' | 'right') => {
        handleManualActivity();
        const currentX = x.get();
        const moveAmount = 400; // Approx one card
        const targetX = direction === 'left' ? currentX + moveAmount : currentX - moveAmount;
        
        animate(x, targetX, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
            onUpdate: handleManualActivity
        });
    };

    return (
        <div 
            ref={containerRef}
            className="relative group/carousel overflow-hidden py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Buttons */}
            <button 
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-auto"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-auto"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Overflow Fades */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />

            <motion.div 
                ref={innerRef}
                style={{ x, willChange: 'transform' }}
                drag="x"
                onDragStart={() => {
                    setIsDragging(true);
                    handleManualActivity();
                }}
                onDragEnd={() => {
                    setIsDragging(false);
                    handleManualActivity();
                }}
                onUpdate={handleManualActivity}
                className="flex gap-4 sm:gap-6 w-fit cursor-grab active:cursor-grabbing select-none px-4"
            >
                {tripleTestimonials.map((t, i) => (
                    <TestimonialCard key={`${i}-${t.name}`} testimonial={t} />
                ))}
            </motion.div>
        </div>
    );
};

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-24 bg-muted/5 border-t border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10 mb-12 sm:mb-16">
                <div className="md:text-center">
                    <h2 className="text-3xl md:text-5xl tracking-tight mb-4 leading-tight">
                        Words of praise from others <br />
                        <span className="text-foreground/60 italic">about our presence.</span>
                    </h2>
                </div>
            </div>

            <div className="relative">
                <Carousel />
            </div>
        </section>
    );
}
