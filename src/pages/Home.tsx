import { motion } from "motion/react";
import AnimatedButton from "../components/animated-button";
import ContactPage from "./Contact";
import { Code2, Rocket, Palette } from "lucide-react";
import { Works } from "../components/Works";
import { Testimonials } from "../components/Testimonials";

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
      className="flex flex-col w-full overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 textured-surface">
        {/* Refined Background Elements */}
        {/* <div className="absolute inset-0 bg-banner-grid opacity-[0.15] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" /> */}

        <div className="container relative z-10 mx-auto text-center max-w-5xl">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/10 bg-primary/5 mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Available for Q1 2026
            </span>
          </motion.div>

          {/* Minimal Professional Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[20vw] sm:text-9xl lg:text-[10rem] font-extrabold tracking-[-0.04em] leading-[0.8] alumni-sans mb-8">
              DIGITAL <br />
              <span className="text-primary italic">ARCHITECTS</span>
            </h1>
          </motion.div>

          {/* Concise Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-muted-foreground mb-12 max-w-md mx-auto font-sans leading-relaxed tracking-tight"
          >
            We build high-performance digital infrastructure for brands that
            refuse to be silent.
          </motion.p>

          {/* Minimal Action Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <AnimatedButton className="px-12 py-7 text-sm font-bold uppercase tracking-[0.2em] rounded-2xl w-full">
                Get Started
              </AnimatedButton>
            </a>
            <a
              href="#works"
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors py-4 border-b border-transparent hover:border-primary/20"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/20 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 sm:py-32 bg-muted/20 textured-surface"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold alumni-sans uppercase leading-none italic">
              Our Professional <br /> Services
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm sm:text-base font-sans leading-relaxed">
              We provide end-to-end digital solutions from strategy and design
              to deployment and long-term scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border overflow-hidden rounded-3xl bg-background shadow-2xl shadow-primary/5">
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
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-sans tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto overflow-hidden rounded-2xl border border-border/50">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Works />
      <Testimonials />

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-24 sm:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 sm:mb-24 space-y-4">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold alumni-sans uppercase italic">
              Transparent <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-sans text-sm sm:text-base px-4">
              Premium quality shouldn't have hidden layers. We believe in direct
              pricing for direct results and architectural excellence.
            </p>
          </div>
          <div className="flex justify-center px-4">
            <PricingCard />
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-muted/10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ContactPage />
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold alumni-sans tracking-tight">
                MASTROVIA
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
    </motion.div>
  );
}
