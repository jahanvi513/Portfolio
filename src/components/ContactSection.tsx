import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactMethods = [
  {
    name: 'Email',
    value: 'jahanvisingh513@gmail.com',
    href: 'mailto:jahanvisingh513@gmail.com',
    icon: Mail,
    // description: 'Drop me a mail',
    color: 'text-blue-500',
  },
  {
    name: 'LinkedIn',
    value: '/in/jahanvisingh',
    href: 'https://www.linkedin.com/in/jahanvi-singh-24b70a200/',
    icon: Linkedin,
    // description: 'Let\'s Connect!',
    color: 'text-blue-600',
  },
  {
    name: 'GitHub',
    value: '/jahanvi513',
    href: 'https://github.com/jahanvi513',
    icon: Github,
    // description: 'Check out my code',
    color: 'text-gray-600 dark:text-gray-400',
  },
];

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={method.name}
                className={`interactive-card group cursor-pointer scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(method.href, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-3">
                      <method.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{method.name}</h3>
                    {/* <p className="text-sm text-muted-foreground mb-2">
                      {method.description}
                    </p> */}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm font-mono group-hover:text-primary transition-smooth">
                    <span>{method.value}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by Jahanvi
            </p>
            <div className="flex items-center gap-4">
              {contactMethods.map((method) => (
                <Button
                  key={method.name}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted transition-smooth"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <method.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};