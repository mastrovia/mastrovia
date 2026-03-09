"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowLeft } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";

export function ContactPopup({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleTriggerClick = (e: React.MouseEvent) => {
        if (isMobile) {
            e.preventDefault();
            router.push("/contact");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={handleTriggerClick}>
                {children}
            </DialogTrigger>
            <DialogContent className="w-full h-[100dvh] max-w-none md:max-w-6xl md:h-auto md:max-h-[calc(100vh-8rem)] md:my-12 md:w-[calc(100%-4rem)] bg-card border-none md:border-solid md:border-border/50 rounded-none md:rounded-[2.5rem] p-0 shadow-2xl overflow-y-auto md:overflow-hidden overflow-x-hidden flex flex-col md:pt-0">
                {/* Screen Reader Title */}
                <DialogHeader className="sr-only">
                    <DialogTitle>Contact Us</DialogTitle>
                </DialogHeader>

                {/* Mobile Header & Close Button */}
                <div className="md:hidden sticky top-0 z-[60] bg-card/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-border/50">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40">Get in touch</span>
                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 bg-muted/50 hover:bg-muted border border-border rounded-full transition-colors cursor-pointer"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 flex-1 md:h-full md:min-h-0">
                    {/* Right Column: Form (Top on mobile) */}
                    <div className="order-1 md:order-2 p-6 sm:p-8 md:p-12 md:col-span-3 relative z-10 justify-center md:h-full md:overflow-y-auto">
                        {/* Desktop Close Button Wrapper */}
                        <div className="hidden md:flex justify-end w-full mb-6 top-0 z-50 bg-card">
                            <button
                                onClick={() => setOpen(false)}
                                className="p-3 bg-muted/50 hover:bg-muted border border-border rounded-full transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                            </button>
                        </div>
                        <ContactForm onSuccess={() => setOpen(false)} />
                    </div>

                    {/* Left Column: Info (Bottom on mobile) */}
                    <div className="order-2 md:order-1 p-6 sm:p-8 md:p-12 md:col-span-2 bg-muted/20 border-t md:border-t-0 md:border-r border-border flex flex-col h-full relative z-10 md:overflow-y-auto">
                        <ContactInfo compact />
                        
                        {/* More accessible mobile close button at bottom of info */}
                        <div className="md:hidden flex justify-center pt-12 pb-8 mt-auto">
                            <button
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors py-4 px-8 border border-border rounded-full"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to website
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
