import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';
import { 
  Camera, 
  Heart, 
  Users, 
  Calendar, 
  Star, 
  Award, 
  UserCheck, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

// Import images
import heroImage from '@/assets/hero-wedding.jpg';
import aboutImage from '@/assets/about-photographers.jpg';
import ctaBackground from '@/assets/cta-background.jpg';
import galleryWedding from '@/assets/gallery-wedding.jpg';
import galleryFamily from '@/assets/gallery-family.jpg';
import galleryEvents from '@/assets/gallery-events.jpg';
import galleryLifestyle from '@/assets/gallery-lifestyle.jpg';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portfolioItems = [
    {
      title: 'Weddings',
      description: 'Elegant, emotional storytelling for your big day.',
      image: galleryWedding,
      category: 'wedding'
    },
    {
      title: 'Family & Portraits',
      description: 'Natural and timeless portraits for every stage of life.',
      image: galleryFamily,
      category: 'family'
    },
    {
      title: 'Events',
      description: 'From birthdays to anniversaries, we capture the joy in every celebration.',
      image: galleryEvents,
      category: 'events'
    },
    {
      title: 'Lifestyle & Creative',
      description: 'Modern shoots for your personal and creative needs.',
      image: galleryLifestyle,
      category: 'lifestyle'
    }
  ];

  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete coverage for your once-in-a-lifetime day.'
    },
    {
      icon: Users,
      title: 'Family & Portraits',
      description: 'Professional, candid, and lifestyle shoots.'
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description: 'Seamless photography for birthdays, engagements, and more.'
    },
    {
      icon: Camera,
      title: 'Creative Projects',
      description: 'Lifestyle campaigns, branding, and custom shoots.'
    }
  ];

  const valueProps = [
    {
      icon: Award,
      title: 'Professional Team',
      description: 'Experienced photographers and editors working together.'
    },
    {
      icon: UserCheck,
      title: 'Customer First',
      description: 'A stress-free process designed around your comfort.'
    },
    {
      icon: Clock,
      title: 'Lasting Memories',
      description: 'Premium-quality photos, albums, and digital keepsakes.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-playfair font-bold gradient-text">Tasbir</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
                <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">Portfolio</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="sm">
                Book a Shoot
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
                <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">Home</a>
                <a href="#portfolio" className="block px-3 py-2 text-foreground hover:text-primary">Portfolio</a>
                <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">Services</a>
                <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">About</a>
                <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">Contact</a>
                <div className="px-3 py-2">
                  <Button variant="hero" size="sm" className="w-full">
                    Book a Shoot
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful wedding photography by Tasbir" 
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 hero-text-glow">
            Your Story, Captured Forever
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            At Tasbir, we turn your most important moments into timeless memories with creativity, care, and artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book a Shoot
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
                About <span className="gradient-text">Tasbir</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are Tasbir, a customer-focused photography agency dedicated to capturing life's special moments. 
                From weddings and family portraits to birthdays and lifestyle shoots, our team ensures every detail 
                is beautifully preserved, so you can relive your memories again and again.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our passion lies in storytelling through imagery, creating not just photographs, but emotional 
                keepsakes that transport you back to those precious moments for years to come.
              </p>
              <Button variant="elegant" size="lg">
                Meet Our Team
              </Button>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Professional photographers at work" 
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Portfolio <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our work across different photography styles and occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="gallery-item group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={item.image} 
                    alt={`${item.title} photography by Tasbir`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-playfair font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              See More Moments
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tasbir */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Why Choose <span className="gradient-text">Tasbir</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <prop.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <blockquote className="text-2xl md:text-3xl font-playfair italic text-foreground mb-6">
                "Professional, friendly, and creative. Our family portraits turned out better than we imagined."
              </blockquote>
              <p className="text-lg text-muted-foreground">— Jane Doe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ctaBackground} 
            alt="Photography equipment background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to capture your story?
          </h2>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
            Book Your Session Today
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Have an occasion coming up?<br />
              <span className="gradient-text">Let's make it unforgettable.</span>
            </h2>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-playfair font-semibold mb-4">Follow our journey</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-background/80">
            <p>&copy; 2025 Tasbir — Your Story, Our Lens.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;