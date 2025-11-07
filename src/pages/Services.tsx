import { Code, Smartphone, Cloud, Brain, Database, Shield, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies. We create responsive, scalable, and secure web solutions that deliver exceptional user experiences.",
      features: ["React & TypeScript", "Node.js Backend", "Progressive Web Apps", "E-commerce Solutions"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth. Beautiful interfaces combined with powerful functionality.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services that grow with your business. We leverage AWS, Azure, and Google Cloud for optimal performance.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Cloud Security"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent automation and AI-powered features that transform your operations. From chatbots to predictive analytics, we bring AI to your business.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our comprehensive analytics solutions. Make informed decisions backed by powerful data visualization.",
      features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Custom Dashboards"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions. We ensure your applications and data remain secure against evolving threats.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business processes with our digital transformation services. We help you leverage technology to improve efficiency and competitiveness.",
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy", "Change Management"],
    },
    {
      icon: Users,
      title: "Consulting & Support",
      description: "Expert guidance and ongoing support for your technology initiatives. Our consultants bring deep expertise across various industries and technologies.",
      features: ["Technical Consulting", "Architecture Design", "24/7 Support", "Training & Workshops"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <service.icon className="text-accent-foreground" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Design", desc: "Creating intuitive solutions" },
              { step: "03", title: "Development", desc: "Building with best practices" },
              { step: "04", title: "Delivery", desc: "Launch and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{phase.title}</h3>
                <p className="text-primary-foreground/80">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center bg-secondary/30">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-accent shadow-glow hover:opacity-90">
              Contact Us Today
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Services;
