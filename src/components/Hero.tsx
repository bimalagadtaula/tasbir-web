import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] ease-out"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Multi-layer overlay for perfect contrast */}
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/50 via-transparent to-elegant-dark/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-elegant-dark/40 via-transparent to-elegant-dark/20"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
        <div className="max-w-5xl mx-auto lg:mx-0">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="font-hero text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-hero tracking-hero">
              Your Story,{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent animate-shimmer bg-size-200">
                  Captured
                </span>
                <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-gold rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}></div>
              </span>{" "}
              <span className="block lg:inline text-white/95">Forever</span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
              At <span className="text-primary font-semibold">Tasbir</span>, we turn your most important moments into timeless memories with creativity, care, and artistry.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Button 
                variant="hero" 
                size="xl" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero hover:shadow-button transform hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-lg font-semibold animate-glow"
              >
                Book a Shoot
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-elegant-dark backdrop-blur-sm bg-white/10 shadow-elegant transform hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-lg"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                View Our Work
              </Button>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="animate-scale-in" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left group">
                <div className="text-3xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm lg:text-base text-white/80 font-medium uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm lg:text-base text-white/80 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm lg:text-base text-white/80 font-medium uppercase tracking-wider">Weddings Captured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer group">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10 group-hover:bg-white/20 transition-all duration-300">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-3 animate-pulse group-hover:bg-white transition-colors"></div>
        </div>
        <div className="text-xs text-white/60 mt-2 text-center uppercase tracking-widest">Scroll</div>
      </div>
    </section>
  );
};

export default Hero;