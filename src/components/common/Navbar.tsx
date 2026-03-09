"use client";

import { useState, useRef } from "react";
import {
  Menu, Github, Instagram, Mail
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/#works" },
  { name: "Journal", href: "/blogs" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [marqueeHidden, setMarqueeHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    lastScrollY.current = latest;

    if (direction === "down" && latest > 50) {
      setMarqueeHidden(true);
    } else if (direction === "up") {
      setMarqueeHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: 32 }}
      animate={{ y: marqueeHidden ? 0 : 32 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="z-[101] w-full fixed top-0 left-0 bg-background/80 backdrop-blur-xl border-b border-border"
      style={{ willChange: "transform" }}
    >
      <div className="container mx-auto flex flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="py-4 cursor-pointer select-none flex flex-row items-center gap-2 group"
        >
          <Image
            src="/logo.png"
            alt="Mastrovia Logo"
            width={48}
            height={23}
            className="w-10 sm:w-12 h-auto transition-transform duration-300 invert dark:invert-0"
          />
          <span className="hidden sm:inline text-2xl sm:text-3xl font-bold tracking-tight">
            Mastrovia
          </span>
        </Link>

        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-8 mr-4 leading-none">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm hover:text-primary transition-colors py-2 ${link.name === "Testimonials" || link.name == "Journal"? "md:hidden xl:block" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/cost-estimate"
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-tight hover:bg-primary/90 transition-all cursor-pointer"
            >
              Estimate Cost
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className={`w-[70%] sm:w-[350px] bg-background border-l border-border p-0 !h-auto bottom-0 z-[100] ${marqueeHidden ? "top-[50px] sm:top-[68px]" : "top-[82px] sm:top-[93px]"
                    }`}
                  style={{ transition: "top 0.3s ease-out" }}
                >
                  <div className="flex flex-col h-full overflow-y-auto">
                    <SheetHeader className="p-4 border-b border-border">
                      <SheetTitle className="text-left text-2xl font-normal tracking-tight">
                        Navigation
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col p-8 gap-6">
                      {navLinks.map((link, idx) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className=" tracking-tight hover:text-primary transition-all duration-150 translate-x-0 hover:translate-x-2"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                      <Link
                        href="/cost-estimate"
                        onClick={() => setIsOpen(false)}
                        className="text-left font-bold tracking-tight text-primary hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                      >
                        Estimate Cost &nbsp; &rarr;
                      </Link>
                    </div>
                    <div className="mt-auto p-5 pb-10 border-t border-border bg-muted/30">
                      <p className="text-xs tracking-widest text-muted-foreground mb-2">
                        Socials
                      </p>
                      <div className="flex gap-4">
                        {[
                          { icon: Github, href: "https://github.com/mastrovia" },
                          { icon: Instagram, href: "https://instagram.com/mastrovia.dev" },
                          { icon: Mail, href: "mailto:hello@mastrovia.com" },
                        ].map((social, idx) => (
                          <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
