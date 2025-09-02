import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About", "Portfolio", "Services", "Testimonials", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // triggers scroll effect after 80px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="relative container mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-20">
          <img
            src="/lovable-uploads/a6b5b1fe-18f2-4355-8a94-c57c7a49c8d6.png"
            alt="Tasbir Photography Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 z-20">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative font-semibold transition-all duration-300 ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-primary"
              } group`}
            >
              {link}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-primary via-gold to-primary transition-all duration-300 group-hover:w-full ${scrolled ? "" : "w-0"}`}></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block z-20">
          <Button
            variant="hero"
            size="lg"
            className={`px-6 py-2 text-lg font-semibold animate-glow transition-colors duration-300 ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
            }`}
          >
            Book a Shoot
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-20 p-2 transition-colors duration-300 ${
            scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-primary"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        {isMenuOpen && (
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-center animate-fade-in z-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-white/90 hover:text-primary transition-all duration-300"
              >
                {link}
              </a>
            ))}
            <Button
              variant="hero"
              size="lg"
              className="px-10 py-3 text-lg font-semibold animate-glow"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Shoot
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
