"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
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
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const lastActivityRef = useRef<number>(Date.now());
    const animationFrameRef = useRef<number | null>(null);

    const handleManualActivity = useCallback(() => {
        lastActivityRef.current = Date.now();
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const animate = () => {
            const now = Date.now();
            const inactivityDuration = now - lastActivityRef.current;

            // Start auto-scrolling if not hovered AND inactive for 2 seconds
            if (!isHovered && inactivityDuration > 2000) {
                // Adjust speed here
                el.scrollLeft += 0.8;

                // Infinite loop logic:
                // We have exactly 3 sets of testimonials.
                // Each set is el.scrollWidth / 3.
                const setWidth = el.scrollWidth / 3;
                
                if (el.scrollLeft >= setWidth * 2) {
                    el.scrollLeft -= setWidth;
                } else if (el.scrollLeft <= 0) {
                    el.scrollLeft += setWidth;
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isHovered]);

    // Initial positioning to the middle set
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            // Give a small delay to ensure layout is calculated
            const timer = setTimeout(() => {
                const setWidth = el.scrollWidth / 3;
                el.scrollLeft = setWidth;
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        handleManualActivity();
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Render the set of cards
    const renderCards = (suffix: string) => (
        <>
            {testimonials.map((t, i) => (
                <TestimonialCard key={`${suffix}-${i}`} testimonial={t} />
            ))}
        </>
    );

    return (
        <div 
            className="relative group/carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                handleManualActivity();
            }}
        >
            {/* Navigation Buttons */}
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

            {/* Scroll Container */}
            <div 
                ref={scrollRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-4 px-4 no-scrollbar cursor-grab active:cursor-grabbing select-none"
                onScroll={handleManualActivity}
                onTouchStart={handleManualActivity}
                onMouseDown={handleManualActivity}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {renderCards('set1')}
                {renderCards('set2')}
                {renderCards('set3')}
            </div>
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
                {/* Side Fades */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />

                <Carousel />
            </div>
        </section>
    );
}
