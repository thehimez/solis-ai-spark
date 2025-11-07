import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="p-8 bg-gradient-card hover:shadow-medium transition-all duration-300 animate-in fade-in slide-in-from-left duration-700">
            <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 shadow-glow">
              <Mail className="text-accent-foreground" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Email Us</h3>
            <p className="text-muted-foreground">info@mastersolis.com</p>
            <p className="text-muted-foreground">support@mastersolis.com</p>
          </Card>

          <Card className="p-8 bg-gradient-card hover:shadow-medium transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 shadow-glow">
              <Phone className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Call Us</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
            <p className="text-muted-foreground">Mon-Fri: 9AM - 6PM EST</p>
          </Card>

          <Card className="p-8 bg-gradient-card hover:shadow-medium transition-all duration-300 animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 shadow-glow">
              <MapPin className="text-accent-foreground" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Visit Us</h3>
            <p className="text-muted-foreground">123 Tech Street</p>
            <p className="text-muted-foreground">Innovation City, IC 12345</p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 bg-card shadow-medium animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-accent shadow-glow hover:opacity-90"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>

        {/* Map Section - Placeholder */}
        <div className="mt-16 h-96 bg-muted rounded-2xl overflow-hidden animate-in fade-in duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459395!3d40.74844097932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
