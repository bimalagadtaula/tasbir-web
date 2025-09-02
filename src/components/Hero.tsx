import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] ease-out"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/50 via-transparent to-elegant-dark/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-elegant-dark/40 via-transparent to-elegant-dark/20"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float -z-10"></div>
      <div className="absolute bottom-40 right-16 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Hero Heading */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-snug sm:leading-tight md:leading-tight lg:leading-tight tracking-tight mt-20 sm:mt-24 md:mt-28 lg:mt-32">
              Your Story,{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent animate-shimmer bg-size-200">
                  Captured Forever
                </span>
                <div
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-gold rounded-full transform scale-x-0 animate-scale-in"
                  style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
                ></div>
              </span>
            </h1>
          </div>

          {/* Hero Subtitle */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-light">
              At <span className="text-primary font-semibold">Tasbir</span>, we turn your most important moments into timeless memories with creativity, care, and artistry.
            </p>
          </div>

          {/* Hero Buttons */}
          <div className="animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                variant="hero"
                size="xl"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero hover:shadow-button transform hover:-translate-y-1 transition-all duration-300 px-12 py-4 text-lg font-semibold animate-glow"
              >
                Book a Shoot
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-elegant-dark backdrop-blur-sm bg-white/10 shadow-elegant transform hover:-translate-y-1 transition-all duration-300 px-12 py-4 text-lg"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                View Our Work
              </Button>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="animate-scale-in" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm sm:text-base text-white/80 font-medium uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm sm:text-base text-white/80 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm sm:text-base text-white/80 font-medium uppercase tracking-wider">Weddings Captured</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Removed Scroll Indicator */}
    </section>
  );
};

export default Hero;
