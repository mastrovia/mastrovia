"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

export function ContactPopup({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="w-full h-[100dvh] max-w-none md:max-w-6xl md:h-auto md:max-h-[calc(100vh-8rem)] md:my-12 md:w-[calc(100%-4rem)] bg-card border-none md:border-solid md:border-border/50 rounded-none md:rounded-[2.5rem] p-0 shadow-2xl overflow-y-auto md:overflow-hidden overflow-x-hidden flex flex-col pt-20 md:pt-0">

                <div className="grid grid-cols-1 md:grid-cols-5 flex-1 md:h-full md:min-h-0">
                    {/* Left Column: Info */}
                    <div className="p-6 sm:p-8 md:p-12 md:col-span-2 bg-muted/20 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between h-full md:h-full relative z-10 md:overflow-y-auto">
                        <div className="flex justify-between items-start gap-4">
                            <DialogHeader>
                                <ContactInfo compact />
                            </DialogHeader>

                            {/* Mobile Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="md:hidden shrink-0 mt-1 p-2 bg-muted/50 hover:bg-muted border border-border rounded-full transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                            </button>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 md:p-12 md:col-span-3 relative z-10 justify-center md:h-full md:overflow-y-auto">
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
                </div>
            </DialogContent>
        </Dialog>
    );
}
