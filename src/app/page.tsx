import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Works } from "@/components/sections/Works";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import ContactClient from "@/app/contact/ContactClient";

export default function HomePage() {
  return (
    <div
      className="flex flex-col w-full overflow-x-hidden"
    >
      <Hero />
      <Services />
      <TechMarquee />
      <Works />
      <Testimonials />
      <FAQ />

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-muted/10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ContactClient />
      </section>
    </div>
  );
}
