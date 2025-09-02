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
                  <Button variant="elegant" className="w-full group">
                    <Camera className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">Our Simple Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground">Consultation</h4>
                <p className="text-muted-foreground">We discuss your vision, preferences, and requirements</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground">Photography</h4>
                <p className="text-muted-foreground">Professional shoot with our experienced team</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Delivery</h4>
                <p className="text-muted-foreground">Edited photos delivered within 2-3 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;