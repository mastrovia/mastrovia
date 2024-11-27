// import starAiIcon from "../assets/Star-ai-icon.png";
import { motion } from "motion/react";
import Button from "../Components/Button";

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden flex flex-col gap-5">
      <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid"></div>
      <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid-filter"></div>
      <div className="absolute -z-10 w-[100%] h-[100vh] bg-banner-grid-filter-attached"></div>

      <section className="container mx-auto p-4 text-center  flex flex-col justify-center gap-7 h-[100vh] max-h-[600px] max-w-7xl relative">
        {/* <img src={starAiIcon} className="w-[50px] h-[50px] object-scale-down" alt="" /> */}
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
          <Button className="relative  sm:w-auto transition-all">
            {/* <div className="absolute w-[300%] h-[1px] left-[-100%] top-0 bg-[var(--border)]" />
            <div className="absolute w-[300%] h-[1px] right-[-100%] bottom-0 bg-[var(--border)]" />
            <div className="absolute h-[300%] w-[1px] top-[-100%] left-0 bg-[var(--border)]" />
            <div className="absolute h-[300%] w-[1px] bottom-[-100%] right-0 bg-[var(--border)]" /> */}
            Let's connect
          </Button>
        </div>
      </section>

      <section className="px-4 bg-[var(--primary)] text-[var(--bg)] flex flex-col gap-5 py-10">
        <h1 className="text-xl font-bold text-center">Our services</h1>
        <div className=" container mx-auto flex flex-col md:flex-row">
          <div className="p-4">
            <h3 className="font-bold">Design</h3>
            <p>
              Crafting visually stunning and user-friendly designs that captivate audiences and enhance user
              experiences. Our creative approach ensures your website reflects your brand’s identity while staying
              modern and intuitive.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-bold">Development</h3>
            <p>
              Transforming innovative designs into fully functional websites using the latest technologies. Our
              development process focuses on performance, scalability, and user satisfaction to deliver a seamless
              digital experience.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-bold">Deployment</h3>
            <p>
              Bringing your website to life with reliable and efficient deployment solutions. We ensure your site is
              securely launched, optimized for all devices, and ready to engage your audience instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto  flex flex-col gap-10 py-10">
        <h1 className="text-xl font-bold text-center">Our works</h1>
        <div className="">
          <div className="img-grid-container">
            <div className="items">
              <img src="https://picsum.photos/200/300?img1" alt="" />
            </div>
            <div className="items">
              <img src="https://picsum.photos/200/300?img2" alt="" />
            </div>
            <div className="items">
              <img src="https://picsum.photos/200/300?img3" alt="" />
            </div>
            <div className="items">
              <img src="https://picsum.photos/200/300?img4" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 bg-[var(--primary)] text-[var(--bg)]">
        <h1 className="font-bold">Mastrovia</h1>
      </section>
    </motion.div>
  );
}
