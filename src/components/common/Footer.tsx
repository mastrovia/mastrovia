import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";

const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/blogs/about-us" },
    { label: "Journal", href: "/blogs" },
    { label: "Works", href: "/#works" },
    { label: "Services", href: "/#services" },
];

const resourceLinks = [
    { label: "Cost Estimate", href: "/cost-estimate" },
    { label: "FAQs", href: "/#faq" },
    { label: "Contact", href: "/contact" },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/mastrovia",
        path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/mastrovia.dev",
        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
];

const FooterLink: FC<{ href: string; label: string }> = ({ href, label }) => (
    <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-base text-muted-foreground hover:text-foreground transition-colors tracking-normal w-fit"
    >
        <ArrowRight className="w-0 h-4 -ml-1.5 opacity-0 -translate-x-1 text-primary transition-all duration-300 group-hover:w-4 group-hover:ml-0 group-hover:opacity-100 group-hover:translate-x-0" />
        {label}
    </Link>
);

export const Footer: FC = () => {
    return (
        <footer className="border-t border-border/50 bg-background text-foreground textured-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">

                {/* CTA Band */}
                <div className="rounded-3xl border border-border/60 bg-muted/20 px-6 sm:px-10 py-9 sm:py-11 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-2xl sm:text-3xl tracking-tight">
                            Have a project in mind?
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-md font-sans">
                            Let&apos;s turn your idea into a high-performance digital product.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-medium tracking-tight transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full md:w-auto shrink-0"
                    >
                        Start a project
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-12 lg:gap-8 items-start">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-5 lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 w-fit group">
                            <Image
                                src="/logo.png"
                                alt="Mastrovia Logo"
                                width={48}
                                height={23}
                                className="w-10 h-auto invert dark:invert-0 transition-transform group-hover:scale-110"
                            />
                            <span className="text-2xl font-medium tracking-tight">
                                Mastrovia
                            </span>
                        </Link>
                        <p className="text-base text-muted-foreground max-w-sm tracking-normal leading-relaxed font-sans">
                            Empowering visionary brands with exceptional digital
                            architecture. Built for performance, designed for meaningful
                            impact.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-3 mt-2">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="w-11 h-11 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-3 lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-2">Explore</h3>
                        {exploreLinks.map((link) => (
                            <FooterLink key={link.href} {...link} />
                        ))}
                    </div>

                    {/* Resources */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-2">Resources</h3>
                        {resourceLinks.map((link) => (
                            <FooterLink key={link.href} {...link} />
                        ))}
                    </div>

                    {/* Get in touch */}
                    <div className="col-span-2 md:col-span-5 lg:col-span-3 flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-2">Get in touch</h3>
                        <a
                            href="mailto:hello@mastrovia.com"
                            className="group inline-flex items-start gap-3 text-base text-muted-foreground hover:text-foreground transition-colors w-fit"
                        >
                            <span className="bg-primary/5 text-primary p-2 rounded-lg transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground shrink-0">
                                <Mail className="w-4 h-4" />
                            </span>
                            <span className="pt-1.5 tracking-tight">hello@mastrovia.com</span>
                        </a>
                        <div className="inline-flex items-start gap-3 text-base text-muted-foreground">
                            <span className="bg-primary/5 text-primary p-2 rounded-lg shrink-0">
                                <MapPin className="w-4 h-4" />
                            </span>
                            <span className="pt-1.5 tracking-tight">Kochi, Kerala, India</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground tracking-normal text-center sm:text-left">
                        © {new Date().getFullYear()} Mastrovia Team. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground tracking-normal text-center sm:text-right">
                        Crafted in Kochi · Built for the world
                    </p>
                </div>
            </div>

            {/* Oversized brand wordmark */}
            <div className="mt-12 w-full overflow-hidden select-none pointer-events-none" aria-hidden="true">
                <h2 className="text-center font-bold leading-[0.8] tracking-tighter text-[22vw] md:text-[20vw] bg-gradient-to-b from-foreground/[0.07] to-foreground/[0.015] bg-clip-text text-transparent">
                    Mastrovia
                </h2>
            </div>
        </footer>
    );
};
