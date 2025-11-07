import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "Cloud", "AI/ML"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web",
      description: "A full-featured online marketplace with payment integration, inventory management, and analytics dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile",
      description: "Telemedicine application connecting patients with healthcare providers for virtual consultations.",
      tags: ["React Native", "Firebase", "WebRTC"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      title: "Cloud Migration Solution",
      category: "Cloud",
      description: "Enterprise-scale migration from on-premise infrastructure to AWS cloud services.",
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "AI Customer Service Bot",
      category: "AI/ML",
      description: "Intelligent chatbot powered by natural language processing for automated customer support.",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    },
    {
      title: "Financial Dashboard",
      category: "Web",
      description: "Real-time analytics platform for financial data visualization and reporting.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile",
      description: "Cross-platform mobile app for workout tracking, nutrition planning, and progress monitoring.",
      tags: ["Flutter", "Firebase", "HealthKit"],
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our successful projects and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`${
                activeFilter === category
                  ? "bg-gradient-accent shadow-glow"
                  : "hover:border-accent hover:text-accent"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button variant="secondary" size="sm">
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's work together to bring your vision to life
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
