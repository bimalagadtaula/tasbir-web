import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Calendar, Sparkles, Camera, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete coverage for your once-in-a-lifetime day.",
      features: ["Full day coverage", "Engagement shoots", "Digital gallery", "Wedding album"],
      price: "Starting from $2,500"
    },
    {
      icon: Users,
      title: "Family & Portraits",
      description: "Professional, candid, and lifestyle shoots.",
      features: ["Studio or outdoor", "Family sessions", "Individual portraits", "High-res images"],
      price: "Starting from $350"
    },
    {
      icon: Calendar,
      title: "Event Coverage",
      description: "Seamless photography for birthdays, engagements, and more.",
      features: ["Birthday parties", "Corporate events", "Anniversaries", "Social gatherings"],
      price: "Starting from $450"
    },
    {
      icon: Sparkles,
      title: "Creative Projects",
      description: "Lifestyle campaigns, branding, and custom shoots.",
      features: ["Brand photography", "Product shoots", "Creative portraits", "Marketing content"],
      price: "Starting from $600"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Tasbir, we make photography simple and memorable with comprehensive packages tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <div className="text-sm text-primary font-semibold mt-1">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button variant="elegant" className="w-full group">
                    <Camera className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process */}
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
        </div>
      </div>
    </section>
  );
};

export default Services;