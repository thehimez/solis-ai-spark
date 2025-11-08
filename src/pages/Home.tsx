import { ArrowRight, Code, Zap, Cloud, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Product Engineering",
      description: "End-to-end product development from concept to deployment.",
      benefits: ["Scalable architecture", "Modern tech stack", "Rapid prototyping"],
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent workflows that save time and reduce manual effort.",
      benefits: ["Process automation", "Smart integrations", "AI-powered insights"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Robust infrastructure and seamless deployment pipelines.",
      benefits: ["Cloud migration", "CI/CD setup", "Infrastructure as code"],
    },
  ];

  const projects = [
    { id: 1, title: "E-commerce Platform", category: "Web" },
    { id: 2, title: "AI Analytics Dashboard", category: "AI" },
    { id: 3, title: "Mobile Banking App", category: "Mobile" },
    { id: 4, title: "Cloud Infrastructure", category: "Cloud" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "TechVentures Ltd",
      quote:
        "Mastersolis helped us build a production-ready MVP in just 8 weeks. Their AI automation saved us countless hours of manual work.",
      rating: 5,
    },
    {
      name: "James Mitchell",
      company: "CloudScale Inc",
      quote:
        "The team's expertise in cloud architecture is unmatched. They migrated our entire infrastructure with zero downtime.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      company: "DataFlow Solutions",
      quote:
        "Professional, responsive, and deeply technical. They understand both the business and engineering sides perfectly.",
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
              Innovating the Future with AI and Automation
              <br />
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent"></span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              We blend Engineering excellence with AI and automation to deliver smater , scalable digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                >
                  Work with Us
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                >
                  Explore Services
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
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driving you digital transformation forword
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 shadow-glow">
                  <service.icon className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle2 className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Innovation in Action
            </h2>
            <p className="text-xl text-muted-foreground">Smart. Scalable. Future-ready.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 bg-card hover:shadow-medium transition-all duration-300">
                      <div className="aspect-video bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold">{project.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View All Projects
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
              <div
                key={index}
                className="animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.number}</div>
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
              Our Clients , their Success.
            </h2>
            <p className="text-xl text-muted-foreground">Proof that innovation and automation create real impact.</p>
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
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your idea into reality? Our team is here to help you succeed.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                Work with Us
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
