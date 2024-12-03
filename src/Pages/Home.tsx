// import starAiIcon from "../assets/Star-ai-icon.png";
// import arrow from "../assets/arrow.png";
import { motion } from "motion/react";
import Button from "../Components/Button";
// import PricingCard from "../Components/PricingCard";
import ContactPage from "./Contact";

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden flex flex-col gap-5">
      <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid"></div>
      <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid-filter"></div>
      <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid-filter-attached"></div>

      <section className="container mx-auto p-4 text-center  flex flex-col justify-center gap-7 h-[100vh] max-h-[600px] max-w-7xl relative">
        {/* <img src={starAiIcon} className="w-[50px] h-[50px] object-scale-down" alt="" /> */}
        {/* <img src={arrow} alt="" className="absolute bottom-28 left-44"/> */}
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] title-aurora relative">
          Let's get your website ready
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="aurora">
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
      </section>

      <section className="container mx-auto max-w-6xl flex flex-col sm:flex-row border border-transparent border-t-[var(--border)]">
        <div className="flex flex-col gap-4 p-8 ">
          <h1 className="text-xl font-bold text-nowrap text-center md:text-start">Our services</h1>
          {/* <p>
            Crafting visually stunning and user-friendly designs that captivate audiences and enhance user experiences.
            Our creative approach ensures your website reflects your brand’s identity while staying modern and
            intuitive.
          </p> */}
        </div>
        <div className="border border-transparent sm:border-l-[var(--border)] flex flex-col w-full">
          <div className="flex flex-col md:flex-row">
            <div className="flex gap-4 flex-col p-8 w-full border border-transparent border-t-[var(--border)] sm:border-t-transparent sm:hover:bg-[var(--primary)] sm:hover:text-[var(--bg)] transition-colors">
              <h3 className="font-bold">We Design</h3>
              <p>
                Crafting visually stunning and user-friendly designs that captivate audiences and enhance user
                experiences. Our creative approach ensures your website reflects your brand’s identity while staying
                modern and intuitive.
              </p>
            </div>
            <div className="p-8 w-full border border-transparent border-t-[var(--border)] md:border-t-transparent md:border-l-[var(--border)] flex gap-4 flex-col sm:hover:bg-[var(--primary)] sm:hover:text-[var(--bg)] transition-colors">
              <h3 className="font-bold">We Development</h3>
              <p>
                Transforming innovative designs into fully functional websites using the latest technologies. Our
                development process focuses on performance, scalability, and user satisfaction to deliver a seamless
                digital experience.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-col p-8 border border-transparent border-t-[var(--border)] w-full sm:hover:bg-[var(--primary)] sm:hover:text-[var(--bg)] transition-colors">
            <h3 className="font-bold">We Deployment & Manage</h3>
            <p>
              Bringing your website to life with reliable and efficient deployment solutions. We ensure your site is
              securely launched, optimized for all devices, and ready to engage your audience instantly.
            </p>
          </div>
        </div>
      </section>

      {/* <motion.section className="px-4 bg-[var(--primary)] text-[var(--bg)] flex flex-col gap-5 py-10">
        <h1 className="text-xl font-bold text-center">Our services</h1>
        <div className="container max-w-6xl py-4 px-4 lg:px-0 mx-auto gap-5 flex flex-col md:flex-row">
          <div className="flex flex-col gap-5 relative ">
            <h3 className="font-bold">We Design</h3>
            <img
              src="/banners/design-illustration.jpg"
              alt=""
              className="z-0 mix-blend-darken grayscale hover:grayscale-0 opacity-20 absolute transition-all"
            />
            <p>
              Crafting visually stunning and user-friendly designs that captivate audiences and enhance user
              experiences. Our creative approach ensures your website reflects your brand’s identity while staying
              modern and intuitive.
            </p>
            <div>
              <Button invertMode>Know more</Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 relative">
            <h3 className="font-bold">We Development</h3>
            <p>
              Transforming innovative designs into fully functional websites using the latest technologies. Our
              development process focuses on performance, scalability, and user satisfaction to deliver a seamless
              digital experience.
            </p>
          </div>
          <div className="flex flex-col gap-5 relative">
            <h3 className="font-bold">We Deployment & Manage</h3>
            <p>
              Bringing your website to life with reliable and efficient deployment solutions. We ensure your site is
              securely launched, optimized for all devices, and ready to engage your audience instantly.
            </p>
          </div>
        </div>
      </motion.section> */}

      <section className="container max-w-6xl mx-auto flex flex-col gap-10 py-10">
        <h1 className="text-xl font-bold text-center">Our works</h1>
        <div className="img-grid-container">
          {Array(12)
            ?.fill("")
            ?.map((_, i) => {
              return (
                <div className="overflow-hidden w-[100%]">
                  <motion.img
                    whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
                    className="grayscale-0 md:grayscale-[.7]"
                    src={`https://picsum.photos/200/${(i + 1) % 3 == 0 ? 3 : 2}00?img${i}`}
                  />
                </div>
              );
            })}
        </div>
      </section>

      {/* <section className="container mx-auto max-w-6xl p-4">
        <h1 className="text-center text-xl font-bold mb-10">Pricing plans</h1>
        <div className="flex flex-col sm:flex-row gap-5">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </section> */}

      <ContactPage />

      <section className=" border-transparent border-t-[var(--border)]">
        <div className="container border border-transparent border-t-[var(--border)] max-w-6xl mx-auto p-4 py-10 flex flex-col gap-2">
          <h1 className="font-bold text-xl">Mastrovia</h1>
          <div className="dim text-sm">© 2024 Mastrovia • contact@mastrovia.com</div>
        </div>
      </section>
    </motion.div>
  );
}
