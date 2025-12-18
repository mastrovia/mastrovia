import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
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
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 w-full fixed top-0 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="container mx-auto max-w-7xl flex flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="py-4 cursor-pointer select-none flex flex-row items-center gap-2 group"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="Mastrovia Logo"
            className="w-10 sm:w-12 transition-transform duration-300 invert dark:invert-0"
          />
          <span className="hidden sm:inline alumni-sans text-4xl sm:text-5xl font-extrabold tracking-tighter">
            Mastrovia
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8 mr-4 leading-none">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-tight uppercase hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
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
                  className="w-[85%] sm:w-[350px] bg-background border-l border-border p-0"
                >
                  <div className="flex flex-col h-full">
                    <SheetHeader className="p-8 border-b border-border">
                      <SheetTitle className="text-left alumni-sans text-4xl font-extrabold tracking-tighter uppercase italic">
                        Navigation
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col p-8 gap-8">
                      {navLinks.map((link, idx) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="text-4xl font-extrabold alumni-sans uppercase hover:text-primary transition-all duration-300 translate-x-0 hover:translate-x-2"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-auto p-8 border-t border-border bg-muted/30">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Socials
                      </p>
                      <div className="flex gap-4">
                        <span className="text-sm font-bold uppercase">
                          Twitter
                        </span>
                        <span className="text-sm font-bold uppercase">
                          Linkedln
                        </span>
                        <span className="text-sm font-bold uppercase">
                          Behance
                        </span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
