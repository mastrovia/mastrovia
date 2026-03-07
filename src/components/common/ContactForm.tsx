import { FC, useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedButton from "./animated-button";
import { toast } from "sonner";
import { GOOGLE_SCRIPT_URL } from "@/data/contactData";

interface ContactFormProps {
    onSuccess?: () => void;
    className?: string;
}

export const ContactForm: FC<ContactFormProps> = ({ onSuccess, className }) => {
    const [data, setData] = useState<{ [key: string]: string }>({});
    const [submitDataLoading, setSubmitDataLoading] = useState(false);

    const submitData = async () => {
        if (!data?.email && !data?.phone) {
            toast.error("Please provide an email or phone number.");
            return;
        }
        if (!data?.query) {
            toast.error("Please describe your project.");
            return;
        }

        try {
            setSubmitDataLoading(true);
            const formData = new FormData();
            for (const key of Object.keys(data)) formData.append(key, data[key]);

            const response = await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: formData });
            await response.json();

            setData({});
            toast.success("Message sent successfully!");
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");
        } finally {
            setSubmitDataLoading(false);
        }
    };

    return (
        <div className={className}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitData();
                }}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                            Your Name
                        </label>
                        <Input
                            disabled={submitDataLoading}
                            className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm px-5 font-sans tracking-tight"
                            value={data?.name || ""}
                            onChange={(e) =>
                                setData((pre) => ({ ...pre, name: e.target.value }))
                            }
                            placeholder="John Wick"
                            required
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                            Email Address
                        </label>
                        <Input
                            disabled={submitDataLoading}
                            type="email"
                            className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm px-5 font-sans tracking-tight"
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
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                            Phone (Optional)
                        </label>
                        <Input
                            disabled={submitDataLoading}
                            className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm px-5 font-sans tracking-tight"
                            value={data?.phone || ""}
                            onChange={(e) =>
                                setData((pre) => ({ ...pre, phone: e.target.value }))
                            }
                            placeholder="+91 00000 00000"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                            Subject
                        </label>
                        <Input
                            disabled={submitDataLoading}
                            className="h-12 bg-muted/30 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm px-5 font-sans tracking-tight"
                            value={data?.websiteType || ""}
                            onChange={(e) =>
                                setData((pre) => ({
                                    ...pre,
                                    websiteType: e.target.value,
                                }))
                            }
                            placeholder="Web Development"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-sans font-bold text-muted-foreground px-1 tracking-[0.1em]">
                        Tell us about your project
                    </label>
                    <Textarea
                        disabled={submitDataLoading}
                        rows={4}
                        className="bg-muted/30 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm p-5 resize-none overflow-hidden font-sans tracking-tight"
                        value={data?.query || ""}
                        onChange={(e) =>
                            setData((pre) => ({ ...pre, query: e.target.value }))
                        }
                        placeholder="I have a vision for..."
                        required
                    />
                </div>

                <AnimatedButton
                    noArrow
                    disabled={submitDataLoading}
                    className="w-full h-14 text-sm font-sans font-bold uppercase tracking-[0.1em] rounded-xl group flex items-center justify-center gap-3 overflow-hidden"
                >
                    <span>
                        {submitDataLoading ? "Sending Proposal..." : "Send Message"}
                    </span>
                    <motion.div
                        animate={submitDataLoading ? { x: [0, 5, 0], y: [0, -5, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 1 }}
                    >
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.div>
                </AnimatedButton>
            </form>
        </div>
    );
};
