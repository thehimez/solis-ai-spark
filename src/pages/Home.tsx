import { ArrowRight, Code, Zap, Shield, Users, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and best practices.",
    },
    {
      icon: Zap,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    },
    {
      icon: Shield,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to power your business growth.",
    },
    {
      icon: Users,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered features to transform your operations.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Mastersolis delivered beyond our expectations. Their team's expertise and dedication transformed our digital presence.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateNow",
      content: "Outstanding work on our mobile app. The attention to detail and technical excellence is remarkable.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GrowthHub",
      content: "Their AI integration solution revolutionized our workflow. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                With Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              We build cutting-edge software solutions that drive growth and efficiency for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 shadow-glow">
                  <service.icon className="text-accent-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="animate-in fade-in zoom-in duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-medium transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-hero text-center shadow-medium">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
