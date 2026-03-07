import { motion } from 'motion/react';
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
    <div className="flex-none w-[350px] sm:w-[450px] bg-card/40 backdrop-blur-sm border border-border/50 p-8 rounded-[2rem] flex flex-col gap-6 group hover:border-primary/30 transition-all duration-300">
        <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary fill-primary/20" />
        </div>

        <p className="text-lg leading-relaxed text-foreground/90 font-sans tracking-tight italic">
            "{testimonial.content}"
        </p>

        <div className="flex items-center gap-4 mt-auto">
            <Avatar className="w-12 h-12 border-2 border-primary/10">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonial.name?.slice(0, 1)?.toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <h4 className="font-bold text-base tracking-tight leading-tight">
                    {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-1">
                    {testimonial.role}, {testimonial.company}
                </p>
            </div>
        </div>
    </div>
);

const Marquee = ({ children, reverse = false, duration = 60 }: { children: React.ReactNode, reverse?: boolean, duration?: number }) => (
    <div className="flex overflow-hidden py-4 select-none">
        <motion.div
            initial={{ x: reverse ? "-50%" : "0%" }}
            animate={{ x: reverse ? "0%" : "-50%" }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear"
            }}
            className="flex gap-8 px-4 w-fit"
        >
            {children}
            {children}
        </motion.div>
    </div>
);

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-muted/5 relative overflow-hidden">
            {/* Dynamic background element */}
            {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" /> */}
            {/* <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" /> */}

            <div className="container mx-auto px-8 max-w-7xl relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-5xl md:text-6xl tracking-tight mb-4 leading-tight">
                        Words of praise from others <br />
                        <span className="text-foreground/60 italic">about our presence.</span>
                    </h2>
                </div>
            </div>

            <div className="relative flex flex-col gap-4">
                {/* Left and Right fades */}
                <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <Marquee>
                    {repeatedTestimonials.slice(0, 6).map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
