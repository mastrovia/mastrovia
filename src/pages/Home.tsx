import { motion } from "motion/react";
import AnimatedButton from "../components/animated-button";
import PricingCard from "../components/PricingCard";
import ContactPage from "./Contact";
import { ArrowRight, Code2, Rocket, Palette } from "lucide-react";

const services = [
  {
    title: "We Design",
    description:
      "Crafting visually stunning and user-friendly designs that captivate audiences and enhance user experiences. Our creative approach ensures your website reflects your brand’s identity.",
    image: "/banners/design-image.png",
    icon: Palette,
    id: "01",
  },
  {
    title: "We Develop",
    description:
      "Transforming innovative designs into fully functional websites using the latest technologies. Our development process focuses on performance, scalability, and delivery.",
    image: "/banners/develop-image.png",
    icon: Code2,
    id: "02",
  },
  {
    title: "We Deploy",
    description:
      "Bringing your website to life with reliable and efficient deployment solutions. We ensure your site is securely launched and optimized for all devices.",
    image: "/banners/deploy-image-4.jpeg",
    icon: Rocket,
    id: "03",
  },
];

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-banner-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] alumni-sans mb-8">
              Let's get your <br />
              <span className="text-primary relative inline-block">
                website ready
                <div className="aurora -z-10 absolute inset-0 opacity-30">
                  <div className="aurora__item" />
                  <div className="aurora__item" />
                  <div className="aurora__item" />
                  <div className="aurora__item" />
                </div>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-sans"
          >
            Premium web development agency specialized in crafting
            high-performance digital experiences for modern brands.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#contact">
              <AnimatedButton className="px-10 py-6 text-lg group">
                Let's Connect
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold alumni-sans uppercase leading-none">
              Our Professional <br /> Services
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm font-sans">
              We provide end-to-end digital solutions from initial concept to
              deployment and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border overflow-hidden rounded-2xl bg-background">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                className="p-8 md:p-10 flex flex-col gap-6 border-b md:border-b-0 md:border-r last:border-0 border-border group"
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-primary/30 font-sans tracking-widest">
                    ({service.id})
                  </span>
                  <service.icon className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto overflow-hidden rounded-xl border border-border/50">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold alumni-sans uppercase mb-4">
                Transparent Pricing
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto font-sans">
                Choose the perfect plan for your project. No hidden fees, just
                pure quality.
              </p>
            </div>
            <div className="flex justify-center">
              <PricingCard />
            </div>
          </div>
        </section>

        <ContactPage />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold alumni-sans tracking-tight">
                MASTROVIA
              </h2>
              <p className="text-sm text-muted-foreground max-w-sm">
                Empowering brands with exceptional digital architecture. Built
                for performance, designed for impact.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:items-end text-sm text-muted-foreground">
              <p className="">
                © 2024 Mastrovia •{" "}
                <a
                  href="mailto:contact@mastrovia.com"
                  className="hover:text-primary underline-offset-4 hover:underline"
                >
                  contact@mastrovia.com
                </a>
              </p>
              <p className="max-w-xs md:text-right italic">
                504, Sector 3, HSR Layout, Bengaluru, Karnataka 560102
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
