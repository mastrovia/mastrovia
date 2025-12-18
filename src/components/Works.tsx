import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "./animated-button";

const works = [
  {
    title: "Project Aurora",
    category: "Web Experiment",
    description:
      "Interactive landing page with custom GLSL shaders and fluid simulations.",
    image: "/banners/design-image.png", // Reusing existing assets
    tags: ["WebGL", "Three.js", "React"],
    link: "#",
  },
  {
    title: "Mastroia SaaS",
    category: "Software",
    description:
      "Enterprise-grade dashboard system with real-time analytics and user management.",
    image: "/banners/develop-image.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    link: "#",
  },
  {
    title: "Lumina Engine",
    category: "Architecture",
    description:
      "High-performance rendering engine for modern architectural visualizations.",
    image: "/banners/deploy-image-4.jpeg",
    tags: ["C++", "Vulkan", "Rust"],
    link: "#",
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold alumni-sans uppercase leading-none">
              Selected <br /> Works
            </h2>
            <p className="text-muted-foreground max-w-md font-sans">
              A curated collection of our most challenging and impactful digital
              projects.
            </p>
          </div>
          <AnimatedButton
            variant="outline"
            className="rounded-full hidden md:flex"
          >
            View All Projects
          </AnimatedButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 rounded-3xl">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-background/90 p-2 rounded-full backdrop-blur-md border border-border">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                      {work.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {work.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted/50 text-[10px] font-bold tracking-wider uppercase border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex md:hidden justify-center">
          <AnimatedButton variant="outline" className="w-full py-6">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
