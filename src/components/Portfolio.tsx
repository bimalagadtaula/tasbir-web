import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import weddingPortfolio from "@/assets/wedding-portfolio.jpg";
import familyPortfolio from "@/assets/family-portfolio.jpg";
import eventPortfolio from "@/assets/event-portfolio.jpg";
import lifestylePortfolio from "@/assets/lifestyle-portfolio.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: weddingPortfolio,
      title: "Weddings",
      description: "Elegant, emotional storytelling for your big day.",
      category: "Wedding Photography"
    },
    {
      image: familyPortfolio,
      title: "Family & Portraits",
      description: "Natural and timeless portraits for every stage of life.",
      category: "Family Photography"
    },
    {
      image: eventPortfolio,
      title: "Events",
      description: "From birthdays to anniversaries, we capture the joy in every celebration.",
      category: "Event Photography"
    },
    {
      image: lifestylePortfolio,
      title: "Lifestyle & Creative",
      description: "Modern shoots for your personal and creative needs.",
      category: "Lifestyle Photography"
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Portfolio <span className="text-primary">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our latest work and see how we bring stories to life through our lens
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/90 via-elegant-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-4">{item.description}</p>
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-elegant-dark">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" className="group">
              See More Moments
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;