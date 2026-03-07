import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Github, Instagram } from "lucide-react";
import { toast } from "sonner";
import AnimatedButton from "./animated-button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

const URL =
    "https://script.google.com/macros/s/AKfycbyKmZGV2PTPI_1NhkvAYDhnN9sdmdR4suMYuMwbTCCK_4pkjKuUkXrtAe0_MzjM85pX/exec";

export function ContactPopup({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<{ [key: string]: string }>({});
    const [submitDataLoading, setSubmitDataLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: "Email Us",
            value: "hello@mastrovia.com",
            href: "mailto:hello@mastrovia.com",
        },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/mastrovia" },
        { icon: Instagram, href: "https://instagram.com/mastrovia.dev" },
    ];

    const submitData = async () => {
        if (!data?.email && !data?.phone) return;
        if (!data?.query) return;

        try {
            setSubmitDataLoading(true);
            const formData = new FormData();
            for (const key of Object.keys(data)) formData.append(key, data[key]);

            const response = await fetch(URL, { method: "POST", body: formData });
            await response.json();

            setData({});
            toast.success("Message sent successfully!");
            setOpen(false); // close the modal on success
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");
        } finally {
            setSubmitDataLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="w-full h-[100dvh] max-w-none md:max-w-6xl md:h-[auto] bg-card border-none md:border-solid md:border-border/50 rounded-none md:rounded-[2.5rem] p-0 shadow-2xl overflow-y-auto overflow-x-hidden md:overflow-hidden flex flex-col pt-12 md:pt-0">
                {/* <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rotate-45 translate-x-8 -translate-y-8 md:translate-x-16 md:-translate-y-16 pointer-events-none" /> */}

                <div className="grid grid-cols-1 md:grid-cols-5 flex-1 md:h-full">
                    {/* Left Column: Info */}
                    <div className="p-6 sm:p-8 md:p-12 md:col-span-2 bg-muted/20 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between h-full relative z-10">
                        <div>
                            <DialogHeader className="mb-8">
                                <DialogTitle className="text-3xl sm:text-4xl tracking-tight text-left font-normal">
                                    Let's Build something <span className="text-primary italic">amazing</span>
                                </DialogTitle>
                                <DialogDescription className="text-left text-muted-foreground font-sans font-normal text-sm sm:text-base tracking-tight leading-relaxed">
                                    Let's discuss your project and how we can help you achieve your goals.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-8 mt-8 md:mt-12 hidden md:block">
                                {contactInfo.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-5 group">
                                        <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                                                {item.label}
                                            </p>
                                            <a
                                                href={item.href}
                                                className="text-lg font-sans tracking-tight hover:text-primary transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 pt-8 mt-8 hidden md:block">
                            <p className="text-muted-foreground">
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

                    {/* Right Column: Form */}
                    <div className="p-6 sm:p-8 md:p-12 md:col-span-3 relative z-10">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                submitData();
                            }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                                        Your Name
                                    </label>
                                    <Input
                                        disabled={submitDataLoading}
                                        className="h-12 sm:h-14 font-sans tracking-tight bg-muted/30 border-secondary rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm sm:text-base px-5"
                                        value={data?.name || ""}
                                        onChange={(e) => setData((pre) => ({ ...pre, name: e.target.value }))}
                                        placeholder="John Wick"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                                        Email Address
                                    </label>
                                    <Input
                                        disabled={submitDataLoading}
                                        type="email"
                                        className="h-12 sm:h-14 font-sans tracking-tight bg-muted/30 border-secondary rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm sm:text-base px-5"
                                        value={data?.email || ""}
                                        onChange={(e) =>
                                            setData((pre) => ({
                                                ...pre,
                                                email: e.target.value.toLowerCase(),
                                            }))
                                        }
                                        placeholder="john@wick.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                                        Phone (Optional)
                                    </label>
                                    <Input
                                        disabled={submitDataLoading}
                                        className="h-12 sm:h-14 font-sans tracking-tight bg-muted/30 border-secondary rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm sm:text-base px-5"
                                        value={data?.phone || ""}
                                        onChange={(e) => setData((pre) => ({ ...pre, phone: e.target.value }))}
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                                        Subject
                                    </label>
                                    <Input
                                        disabled={submitDataLoading}
                                        className="h-12 sm:h-14 font-sans tracking-tight bg-muted/30 border-secondary rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm sm:text-base px-5"
                                        value={data?.websiteType || ""}
                                        onChange={(e) => setData((pre) => ({ ...pre, websiteType: e.target.value }))}
                                        placeholder="Web Development"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                                    Tell us about your project
                                </label>
                                <Textarea
                                    disabled={submitDataLoading}
                                    rows={4}
                                    className="bg-muted/30 font-sans tracking-tight border-secondary rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm sm:text-base p-5 resize-none"
                                    value={data?.query || ""}
                                    onChange={(e) => setData((pre) => ({ ...pre, query: e.target.value }))}
                                    placeholder="I have a vision for..."
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <AnimatedButton
                                    noArrow
                                    disabled={submitDataLoading}
                                    className="w-full h-14 font-sans text-sm font-bold rounded-2xl group flex items-center justify-center gap-3 overflow-hidden"
                                >
                                    <span>{submitDataLoading ? "Sending Proposal..." : "Send Message"}</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </AnimatedButton>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
