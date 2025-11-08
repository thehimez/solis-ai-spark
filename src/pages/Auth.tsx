import { SignIn, SignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Zap, Cloud, CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const features = [
    {
      icon: Code,
      title: "Product Engineering",
      description: "Build scalable solutions with modern tech",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent workflows that save time",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Robust infrastructure & deployment",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Marketing Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
          <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <img
              src="/src/assets/mastersolis-logo.png"
              alt="Mastersolis Logo"
              className="h-12 mb-8 brightness-0 invert"
            />

            <h1 className="text-4xl xl:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Welcome to the Future of
              <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                AI & Automation
              </span>
            </h1>

            <p className="text-lg xl:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join us in innovating digital excellence.Collaborate with experts, and transform your ideas into reality.
            </p>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6 hover:bg-background/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <feature.icon className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground mb-1">{feature.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-8 text-primary-foreground/90 animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-sm">500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-sm">200+ Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-sm">15+ Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-1000">
          {/* Mobile Logo */}
          <div className="flex justify-center mb-8 lg:hidden">
            <img src="/src/assets/mastersolis-logo.png" alt="Mastersolis Logo" className="h-10" />
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4 shadow-glow">
              <Sparkles className="text-accent-foreground" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">{isSignIn ? "Welcome Back" : "Get Started"}</h2>
            <p className="text-muted-foreground">
              {isSignIn
                ? "Sign in to access your dashboard and projects"
                : "Create your account and start building today"}
            </p>
          </div>

          <div className="flex gap-2 mb-8 justify-center">
            <Button
              variant={isSignIn ? "default" : "outline"}
              onClick={() => setIsSignIn(true)}
              className="min-w-[120px]"
            >
              Sign In
            </Button>
            <Button
              variant={!isSignIn ? "default" : "outline"}
              onClick={() => setIsSignIn(false)}
              className="min-w-[120px]"
            >
              Sign Up
            </Button>
          </div>

          <div className="flex justify-center">
            {isSignIn ? <SignIn routing="hash" signUpUrl="#" /> : <SignUp routing="hash" signInUrl="#" />}
          </div>

          {/* Mobile Features */}
          <div className="mt-12 lg:hidden space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-accent-foreground" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
