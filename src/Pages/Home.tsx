// import starAiIcon from "../assets/Star-ai-icon.png";
// import arrow from "../assets/arrow.png";
import { motion } from "motion/react";
import Button from "../Components/Button";
// import PricingCard from "../Components/PricingCard";
import ContactPage from "./Contact";

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden flex flex-col gap-5">
      <section className="relative">
        <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid"></div>
        <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid-filter"></div>
        <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid-filter-attached"></div>
        <div className="container mx-auto p-4 text-center flex flex-col justify-center gap-7 h-[100vh] max-h-[600px] max-w-7xl">
          {/* <img src={starAiIcon} className="w-[50px] h-[50px] object-scale-down" alt="" /> */}
          {/* <img src={arrow} alt="" className="absolute bottom-28 left-44"/> */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] title-aurora relative">
            Let's get your website ready
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="aurora"
            >
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </motion.div>
          </h1>
          <p className="opacity-85">A web development company</p>
          <div>
            <a href="#contact">
              <Button className="relative sm:w-auto">
                {/* <div className="absolute w-[300%] h-[1px] left-[-100%] top-0 bg-[var(--border)]" />
            <div className="absolute w-[300%] h-[1px] right-[-100%] bottom-0 bg-[var(--border)]" />
            <div className="absolute h-[300%] w-[1px] top-[-100%] left-0 bg-[var(--border)]" />
            <div className="absolute h-[300%] w-[1px] bottom-[-100%] right-0 bg-[var(--border)]" /> */}
                Let's connect
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 max-w-6xl flex flex-col gap-5">
        <h1 className="text-center font-bold text-5xl uppercase alumni-sans">Our services</h1>
        <div className="border border-[var(--border)] flex flex-col md:flex-row">
          <div className="border border-transparent w-full p-4 flex flex-col gap-3">
            <div className="text-[var(--border)] select-none">{"(1)"}</div>
            <h2 className="text-xl">We Design</h2>
            <p className="text-[var(--primary)] dim">
              Crafting visually stunning and user-friendly designs that captivate audiences and enhance user
              experiences. Our creative approach ensures your website reflects your brand’s identity while staying
              modern and intuitive.
            </p>
            <div className="overflow-hidden w-full">
              <motion.img
                whileHover={{ scale: 1.05, filter: "grayscale(.8)" }}
                className="w-full grayscale-0 md:grayscale-[.9]"
                src="/banners/design-image.png"
              />
            </div>
          </div>

          <div className="border border-transparent border-t-[var(--border)] md:border-t-transparent md:border-l-[var(--border)] w-full p-4 flex gap-3 flex-col md:flex-col-reverse">
            <div className="text-[var(--border)] select-none">{"(2)"}</div>
            <h2 className="text-xl">We Develop</h2>
            <p className="text-[var(--primary)] dim">
              Transforming innovative designs into fully functional websites using the latest technologies. Our
              development process focuses on performance, scalability, and user satisfaction to deliver a seamless
              digital experience.
            </p>
            <div className="overflow-hidden w-full">
              <motion.img
                whileHover={{ scale: 1.05, filter: "grayscale(.8)" }}
                className="w-full grayscale-0 md:grayscale-[.9]"
                src="/banners/develop-image.png"
              />
            </div>
          </div>

          <div className="border border-transparent border-t-[var(--border)] md:border-t-transparent md:border-l-[var(--border)] w-full p-4 flex flex-col gap-3">
            <div className="text-[var(--border)] select-none">{"(3)"}</div>
            <h2 className="text-xl">We Deploy</h2>
            <p className="text-[var(--primary)] dim">
              Bringing your website to life with reliable and efficient deployment solutions. We ensure your site is
              securely launched, optimized for all devices, and ready to engage your audience instantly.
            </p>
            <div className="overflow-hidden w-full">
              <motion.img
                whileHover={{ scale: 1.05, filter: "grayscale(.8)" }}
                className="w-full grayscale-0 md:grayscale-[.9]"
                src="/banners/deploy-image-4.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactPage />

      <section className=" border-transparent border-t-[var(--border)]">
        <div className="container border border-transparent border-t-[var(--border)] max-w-6xl mx-auto p-4 py-10 flex flex-col gap-2">
          <h1 className="font-bold text-3xl alumni-sans">Mastrovia</h1>
          <div className="dim text-sm ">© 2024 Mastrovia • contact@mastrovia.com</div>
        </div>
      </section>
    </motion.div>
  );
}
