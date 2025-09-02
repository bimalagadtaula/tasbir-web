import { Heart, Users, Camera } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-foreground">
              About <span className="text-primary">Tasbir</span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We are Tasbir, a customer-focused photography agency dedicated to capturing life's special moments. 
              From weddings and family portraits to birthdays and lifestyle shoots, our team ensures every detail 
              is beautifully preserved, so you can relive your memories again and again.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-card-foreground">Passion-Driven</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Every shot is taken with genuine care and artistic vision to create lasting memories that tell your unique story.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-card-foreground">Customer-Focused</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Your comfort and satisfaction are our priority throughout the entire photography experience, ensuring natural and authentic results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                <Camera className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-card-foreground">Professional Excellence</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                State-of-the-art equipment and years of experience ensure exceptional quality in every frame we capture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;