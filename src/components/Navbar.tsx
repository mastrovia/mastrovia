import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="z-50 w-full fixed top-0 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-7xl flex flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="py-4 cursor-pointer select-none flex flex-row items-center gap-3 alumni-sans text-4xl sm:text-5xl font-bold tracking-tight"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="Mastrovia Logo"
            className="w-10 sm:w-12 invert dark:invert-0"
          />
          <span className="hidden sm:inline">Mastrovia</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8 mr-4">
            <a
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
