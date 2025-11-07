import { Code, Brain, Cloud, Palette, BarChart3, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Product Engineering",
      description: "We build scalable, modern applications from scratch. Our full-stack expertise ensures your product is production-ready, maintainable, and future-proof.",
      benefits: [
        "End-to-end development lifecycle",
        "Agile methodology with fast iterations",
        "Clean, maintainable codebase"
      ],
      deliverables: ["MVP Development", "Full Product Launch"]
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Leverage cutting-edge AI to automate repetitive tasks and unlock insights. From chatbots to intelligent workflows, we make your operations smarter.",
      benefits: [
        "Custom AI model integration",
        "Workflow automation that saves hours",
        "Predictive analytics for decision-making"
      ],
      deliverables: ["AI Chatbot Implementation", "Process Automation Suite"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploy with confidence using our cloud infrastructure expertise. We design, migrate, and manage scalable systems on AWS, Azure, and GCP.",
      benefits: [
        "Zero-downtime deployments",
        "Auto-scaling infrastructure",
        "Monitoring and incident response"
      ],
      deliverables: ["Cloud Migration Plan", "CI/CD Pipeline Setup"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "We create intuitive, beautiful interfaces that users love. Our design process is research-driven, ensuring every pixel serves a purpose.",
      benefits: [
        "User-centered design approach",
        "Responsive across all devices",
        "Design systems for consistency"
      ],
      deliverables: ["Wireframes & Prototypes", "High-Fidelity UI Kit"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn raw data into actionable insights with custom dashboards and reports. We help you make data-driven decisions with confidence.",
      benefits: [
        "Real-time data visualization",
        "Custom reporting dashboards",
        "Data pipeline architecture"
      ],
      deliverables: ["Analytics Dashboard", "Business Intelligence Reports"]
    },
    {
      icon: CheckSquare,
      title: "QA & Testing",
      description: "Ship bug-free software with our rigorous testing processes. From unit tests to end-to-end automation, we ensure quality at every stage.",
      benefits: [
        "Automated test coverage",
        "Performance and load testing",
        "Security vulnerability scanning"
      ],
      deliverables: ["Test Automation Framework", "QA Strategy Document"]
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
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Sample Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="mt-2">
                      Talk to Us
                    </Button>
                  </Link>
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
