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

        {/* Company Milestones */}
        <div className="bg-gradient-hero rounded-2xl p-12 mb-20 shadow-medium">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-3">2010</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Founded</h3>
              <p className="text-primary-foreground/80">Started with a vision to innovate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-3">200+</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Clients Served</h3>
              <p className="text-primary-foreground/80">Fortune 500 to startups</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-3">500+</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Projects Delivered</h3>
              <p className="text-primary-foreground/80">Across 15+ industries</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            The team driving innovation and excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO & Founder",
                bio: "Serial entrepreneur with 20+ years in tech. Previously led engineering at two unicorns. Passionate about building products that matter.",
              },
              {
                name: "Ananya Singh",
                role: "CTO",
                bio: "Ex-Google engineer specializing in distributed systems and AI. MIT grad. Loves solving hard problems at scale.",
              },
              {
                name: "Michael Chen",
                role: "Lead Designer",
                bio: "Award-winning product designer. Worked with Apple and Airbnb. Believes great design is invisible.",
              },
              {
                name: "Priya Nair",
                role: "Head of Engineering",
                bio: "Full-stack architect with a DevOps mindset. Built platforms serving 50M+ users. Open-source contributor.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-accent rounded-full mb-4 mx-auto flex items-center justify-center">
                  <Users className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-1">{member.name}</h3>
                <p className="text-sm text-accent text-center mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
