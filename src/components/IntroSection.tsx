import { useState, useEffect } from 'react';
import { ArrowDown, Book, BookAIcon, BookIcon, CatIcon, Code2, Palette, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const roles = ['Developer', 'Creative', 'Reader', 'Cat Lover'];

export const IntroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Greeting */}
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="gradient-text">Jahanvi</span>
            </h1>

            {/* Dynamic Role */}
            <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start mb-8">
              <h2 className="text-xl md:text-3xl font-semibold text-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <span className="inline-flex items-center gap-3">
                  {currentRole === 0 && <Code2 className="w-6 h-6 md:w-8 md:h-8" />}
                  {currentRole === 1 && <Palette className="w-6 h-6 md:w-8 md:h-8" />}
                  {currentRole === 2 && <BookIcon className="w-6 h-6 md:w-8 md:h-8" />}
                  {currentRole === 3 && <CatIcon className="w-6 h-6 md:w-8 md:h-8" />}
                  <span className="font-mono">{roles[currentRole]}</span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              A Computer Science Undergrad. I enjoy exploring cybersecurity, AI and building fun web apps. In my free time, you'll find me with a book or my cat!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 text-lg font-medium transition-smooth hover:scale-105 glow-primary"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('#contact', '_self')}
                className="border-border/40 hover:bg-card-hover px-8 py-3 text-lg font-medium transition-smooth hover:scale-105 glow-primary"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Animation */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-full max-w-lg">
              <DotLottieReact
                src="https://lottie.host/fd894fdc-4897-4d16-ac8f-fc6cf883de53/YHxVpZOnFk.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};