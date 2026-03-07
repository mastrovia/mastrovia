import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="py-16 border-t border-border bg-background">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Mastrovia
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed">
                            Empowering visionary brands with exceptional digital
                            architecture. Built for performance, designed for meaningful
                            impact.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end text-sm sm:text-base text-muted-foreground font-sans">
                        <p className="font-medium">
                            © {new Date().getFullYear()} Mastrovia •{" "}
                            <a
                                href="mailto:contact@mastrovia.com"
                                className="text-foreground hover:text-primary underline-offset-4 hover:underline transition-all"
                            >
                                contact@mastrovia.com
                            </a>
                        </p>
                        <p className="max-w-xs md:text-right italic opacity-70 text-xs sm:text-sm">
                            504, Sector 3, HSR Layout, Bengaluru, Karnataka 560102
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
