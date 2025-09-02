import { Shield, Users, Award, Clock, Heart, Camera } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced photographers and editors working together to capture your perfect moments."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "A stress-free process designed around your comfort and satisfaction every step of the way."
    },
    // {
    //   icon: Award,
    //   title: "Lasting Memories",
    //   description: "Premium-quality photos, albums, and digital keepsakes that stand the test of time."
    // },
    // {
    //   icon: Shield,
    //   title: "Reliability",
    //   description: "Trusted by hundreds of families to capture their most important life moments."
    // },
    // {
    //   icon: Clock,
    //   title: "Timely Delivery",
    //   description: "Professional editing and delivery within 2-3 weeks, with sneak peeks available sooner."
    // },
    {
      icon: Camera,
      title: "Premium Equipment",
      description: "State-of-the-art cameras and lighting equipment for the highest quality results."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">Tasbir</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing an exceptional photography experience that exceeds your expectations
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group text-center space-y-4 p-6 rounded-lg hover:bg-card hover:shadow-card transition-all duration-300 border border-transparent hover:border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Weddings</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Photo Sessions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;