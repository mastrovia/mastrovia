import { FC, lazy, Suspense } from "react";
import { motion } from "motion/react";
import { services } from "@/data/homeData";

const LottiePlayer = lazy(() => import("@/components/common/LottiePlayer"));

export const Services: FC = () => {
    return (
        <section
            id="services"
            className="pb-20 sm:pb-32"
        >
            <div className="container mx-auto px-8">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl tracking-tight">
                        Our Professional <br /> <span className="text-primary italic">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto font-sans">
                        We provide end-to-end digital solutions from strategy and design
                        to deployment and long-term scaling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border overflow-hidden rounded-3xl bg-background shadow-primary/5">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                            className="p-8 sm:p-12 flex flex-col gap-8 border-b md:border-b-0 md:border-r last:border-0 border-border group"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-sm font-bold text-primary/30 font-sans tracking-widest leading-none">
                                    ({service.id})
                                </span>
                                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary/40 group-hover:text-primary transition-all duration-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl mb-4 font-sans tracking-tight leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 font-sans">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-auto overflow-hidden rounded-2xl border border-border/50 bg-white min-h-[150px] flex items-center justify-center">
                                <Suspense fallback={<div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />}>
                                    <LottiePlayer src={service.lottie} />
                                </Suspense>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
