import { Instagram, Facebook, Heart, Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-elegant-dark text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/a6b5b1fe-18f2-4355-8a94-c57c7a49c8d6.png" 
                  alt="Tasbir Photography Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Your story, our lens. At Tasbir, we capture life's most precious moments with artistry, 
                creativity, and care that lasts a lifetime.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label="TikTok"
                >
                  <Camera className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-white/80 hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-white/80 hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Wedding Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Family Portraits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Event Coverage
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Lifestyle Shoots
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors">
                    Creative Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white/80">
                <span>© 2025 Tasbir — Your Story, Our Lens.</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-primary fill-primary" />
                <span>for capturing beautiful moments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;