import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 rounded-full border border-border/40 backdrop-blur-sm bg-background/80">
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-smooth relative ${
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary rounded-full" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};