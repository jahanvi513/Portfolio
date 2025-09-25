import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from 'react';

const experiences = [
  {
    id: "exp-1",
    title: "Teaching Assistant",
    description: "Shiv Nadar University, Delhi-NCR",
    year: "Jan 2025 - Apr 2025",
    fullDescription: "Worked as a Teaching Assistant for CSD101: Introduction to Computing and Programming using C. Assisted students during lab sessions, graded assignments, and provided support for course-related queries."
  },
  {
    id: "exp-2",
    title: "Research Intern",
    description: "Indian Institute of Technology, Hyderabad",
    year: "Jun 2024 - Dec 2024",
    fullDescription: "Worked under Prof. Sathya Peri on developing a unified framework to streamline operations related to Finite Element Methods. Contributed by remolding the framework to solve the Plane Stress problem and improving code documentation to enhance its reliability and maintainability"
  },
];

export const ExperienceSection = () => {
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
  
      const element = document.getElementById('skills');
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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="gradient-text">Experiences</span>
          </h2>
        </div>
        
        <Accordion type="multiple" className="space-y-4">
          {experiences.map((experience) => (
            <AccordionItem 
              key={experience.id} 
              value={experience.id}
              className="border border-border rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full text-left">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {experience.description}
                    </p>
                  </div>
                  <div className="ml-8 text-foreground font-medium">
                    {experience.year}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <p className="text-muted-foreground">
                  {experience.fullDescription}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};