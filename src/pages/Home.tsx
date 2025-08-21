import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  X,
  MapPin,
  Mail,
  Phone,
  ArrowRight
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
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 creative-text-glow">
            Visual Stories That 
            <br />
            <span className="gradient-text-electric">Transcend Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-white/90">
            We are Tasbir—a collective of visual storytellers crafting cinematic experiences 
            that capture the essence of your most precious moments with unparalleled artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book a Shoot
            </Button>
            <Button variant="outline" size="lg" className="neon-glow bg-background/10 border-primary/30 text-foreground hover:bg-primary hover:text-background">
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

      {/* Creative Portfolio Gallery */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
              Creative <span className="gradient-text-electric">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each frame tells a story. Every shot captures emotion. 
              Discover how we transform moments into visual masterpieces.
            </p>
          </div>

          {/* Featured Project - Large Hero */}
          <div className="mb-16">
            <div className="gallery-item group relative h-[70vh] rounded-3xl overflow-hidden">
              <img 
                src={galleryWedding} 
                alt="Featured wedding photography by Tasbir"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white max-w-2xl">
                <div className="text-sm uppercase tracking-wider text-primary mb-2">Featured Project</div>
                <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Ethereal Wedding Story</h3>
                <p className="text-xl text-white/90 mb-6">A dreamy celebration of love captured through cinematic storytelling and artistic composition.</p>
                <Button variant="outline" className="neon-glow bg-background/10 border-primary/30 text-foreground hover:bg-primary">
                  View Full Story
                </Button>
              </div>
            </div>
          </div>

          {/* Creative Masonry Grid */}
          <div className="masonry-grid mb-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`masonry-item gallery-item group`}>
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} photography by Tasbir`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="text-xs uppercase tracking-wider text-primary mb-1">{item.category}</div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional Creative Items */}
            <div className="masonry-item gallery-item group">
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Your Story Awaits</h3>
                  <p className="text-muted-foreground mb-4">Ready to create something extraordinary?</p>
                  <Button variant="outline" size="sm" className="neon-glow">
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Weddings', 'Portraits', 'Events', 'Lifestyle', 'Commercial'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-secondary/20 text-muted-foreground hover:bg-primary hover:text-background transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="neon-glow">
              Explore Full Portfolio
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

      {/* Stats Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-primary">500+</div>
              <div className="text-background/80">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-primary">1000+</div>
              <div className="text-background/80">Photo Sessions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-primary">5+</div>
              <div className="text-background/80">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-primary">100%</div>
              <div className="text-background/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Our Creative <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From consultation to final delivery, we ensure every step is seamless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-playfair font-bold text-primary">01</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Consultation</h3>
              <p className="text-muted-foreground">We discuss your vision, style preferences, and unique requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-playfair font-bold text-primary">02</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Photo Session</h3>
              <p className="text-muted-foreground">Professional photography with attention to every detail and emotion</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-playfair font-bold text-primary">03</span>
                </div>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Delivery</h3>
              <p className="text-muted-foreground">Expertly edited photos delivered in your preferred format</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-playfair font-bold text-primary mb-4">Tasbir</h3>
              <p className="text-background/80 mb-6 leading-relaxed">
                Professional photography agency capturing life's most precious moments with creativity, care, and artistry.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Wedding Photography</a></li>
                <li><a href="#" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Family Portraits</a></li>
                <li><a href="#" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Event Coverage</a></li>
                <li><a href="#" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Creative Projects</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />About Us</a></li>
                <li><a href="#portfolio" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Portfolio</a></li>
                <li><a href="#services" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Our Services</a></li>
                <li><a href="#" className="text-background/80 hover:text-primary transition-colors flex items-center group"><ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />Pricing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80">123 Photography Street</p>
                    <p className="text-background/80">Creative City, CC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-background/80">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-background/80">hello@tasbir.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-background/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-background/60 text-sm">
                &copy; 2025 Tasbir Photography. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">Cookie Policy</a>
              </div>
              <p className="text-background/40 text-sm italic font-playfair">
                Your Story, Our Lens.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;