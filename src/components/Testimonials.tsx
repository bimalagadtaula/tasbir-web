import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Bride",
      content: "Professional, friendly, and creative. Our family portraits turned out better than we imagined. Tasbir captured every emotion perfectly!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Father of three",
      content: "The team made our family feel so comfortable during the shoot. The photos are absolutely stunning and we'll treasure them forever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    // {
    //   name: "Sarah Williams",
    //   role: "Event Organizer",
    //   content: "Tasbir captured our corporate event beautifully. Their attention to detail and professionalism exceeded our expectations.",
    //   rating: 5,
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    // },
    // {
    //   name: "David Rodriguez",
    //   role: "Groom",
    //   content: "Our wedding photos are absolutely breathtaking. They captured every special moment and emotion of our big day perfectly.",
    //   rating: 5,
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    // },
    // {
    //   name: "Emily Johnson",
    //   role: "New Mother",
    //   content: "The maternity and newborn photos are pure magic. Tasbir has an incredible eye for capturing those precious early moments.",
    //   rating: 5,
    //   image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    // },
    {
      name: "Alex Thompson",
      role: "Business Owner",
      content: "Professional headshots that perfectly represent our brand. The quality and service are unmatched. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What Our Clients <span className="text-primary">Say</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the families and couples who trusted us with their special moments
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 border border-border">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/30 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary">4.9</span>
            </div>
            <p className="text-muted-foreground">
              Based on <strong className="text-foreground">500+</strong> reviews from happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;