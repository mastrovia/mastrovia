import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: FC = () => {
    return (
        <footer className="py-20 border-t border-border/50 bg-background text-foreground textured-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
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
                        <p className="text-base text-muted-foreground max-w-sm tracking-normal leading-relaxed">
                            Empowering visionary brands with exceptional digital
                            architecture. Built for performance, designed for meaningful
                            impact.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2">Navigation</h3>
                        <Link href="/" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">Home</Link>
                        <Link href="/#services" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">Services</Link>
                        <Link href="/#works" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">Works</Link>
                        <Link href="/cost-estimate" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">Estimate Cost</Link>
                    </div>

                    {/* Contact & Socials */}
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2">Connect</h3>
                        <a href="mailto:hello@mastrovia.com" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">hello@mastrovia.com</a>
                        <a href="https://github.com/mastrovia" target="_blank" rel="noreferrer" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">GitHub</a>
                        <a href="https://instagram.com/mastrovia.dev" target="_blank" rel="noreferrer" className="text-base text-muted-foreground hover:text-primary transition-colors tracking-normal">Instagram</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground tracking-normal text-center md:text-left">
                        © {new Date().getFullYear()} Mastrovia Team. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground tracking-normal text-center md:text-right max-w-sm">
                        Kochi, Kerala, India
                    </p>
                </div>
            </div>
        </footer>
    );
};
