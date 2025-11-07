import { Target, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: Eye,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring reliability and performance.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Our talented team works seamlessly together to bring your vision to life.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Mastersolis Infotech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative software solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="p-8 bg-gradient-card shadow-soft animate-in fade-in slide-in-from-left duration-700">
            <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 shadow-glow">
              <Target className="text-accent-foreground" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation. 
              We believe in creating software that not only meets today's needs but anticipates tomorrow's challenges.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card shadow-soft animate-in fade-in slide-in-from-right duration-700">
            <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6 shadow-glow">
              <Eye className="text-primary-foreground" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the global leader in delivering transformative technology solutions, recognized for our innovation, 
              quality, and commitment to client success. We envision a future where technology seamlessly integrates with business goals.
            </p>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-medium">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between business challenges and technology solutions, 
            Mastersolis Infotech has grown from a small startup to a trusted partner for businesses worldwide. 
            With over 15 years of experience, we've completed 500+ successful projects across various industries, 
            always staying at the forefront of technological innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "15+", label: "Years of Excellence" },
            { number: "50+", label: "Expert Team Members" },
            { number: "500+", label: "Successful Projects" },
            { number: "200+", label: "Satisfied Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-in fade-in zoom-in duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
