import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'AI Speech Analyzer',
    description: 'A real-time speech analysis platform using AI to provide insights on tone, sentiment, and engagement.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'OpenAI Whisper'],
    image: 'https://plus.unsplash.com/premium_photo-1756766406257-8bcfd53f8fc9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/jahanvi513/Speech-Analyzer',
    demo: 'https://speech-analyzer-sf94.onrender.com/',
    featured: true,
    hasDemo: true,
  },
  {
    id: 2,
    title: 'Supermarket Automation System',
    description: 'A comprehensive system for managing supermarket operations, including inventory tracking, sales management, and customer engagement.',
    technologies: ['Java', 'Selenium', 'SQL'],
    image: 'https://images.unsplash.com/photo-1679954570743-fadc1f2953f4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp',
    github: 'https://github.com/jahanvi513/Supermarket-Automation-System',
    demo: '',
    featured: false,
    hasDemo: false,
  },
  {
    id: 3,
    title: 'Image Labeling Application',
    description: 'A real-time image labeling system that detects and classifies objects in images using AWS Rekognition',
    technologies: ['Python', 'AWS Rekognition', 'AWS Lambda', 'Amazon S3', 'API Gateway', 'HTML'],
    image: 'https://cdn.sanity.io/images/31qskqlc/production/7efded788704af633479ae5745b5411c3712222d-1080x608.webp?fit=max&auto=format',
    github: 'https://github.com/jahanvi513/Image-Labeling-Application',
    demo: 'https://drive.google.com/drive/folders/13raIM7Sg6VR33EOIMg0p9L-rkuolDOZ0',
    featured: false,
    hasDemo: true,
  },
  {
    id: 4,
    title: 'Fake News Detection',
    description: 'A Fake News Detection system that classifies news headlines as fake or real using a pre-trained BERT model from Hugging Face, deployed through Amazon SageMaker',
    technologies: ['Amazon Sagemaker', 'Amazon S3', 'Amazon Quicksight', 'Python'],
    image: 'https://plus.unsplash.com/premium_photo-1708469007251-1d5e2c090fbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/jahanvi513/Fake-News-Detection',
    demo: 'https://drive.google.com/drive/folders/1t-Z3-YhWVh7_Qn9bn6Ze5P7XiViDvgwk',
    featured: false,
    hasDemo: true,
  },
];

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Project Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="interactive-card border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Project Image */}
                        <div className="relative h-64 lg:h-96 overflow-hidden bg-gradient-secondary">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Project Details */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="mb-4">
                            {project.featured && (
                              <span className="inline-block px-3 py-1 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                                Featured
                              </span>
                            )}
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Technologies */}
                          <div className="mb-8">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md font-mono"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4">
                           {project.hasDemo && (
                              <Button
                                variant="default"
                                className="bg-gradient-primary hover:opacity-90"
                                onClick={() => window.open(project.demo, '_blank')}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              className="h-12 w-12 rounded-full border border-border/40 hover:bg-card-hover"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentProject 
                      ? 'bg-gradient-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              className="h-12 w-12 rounded-full border border-border/40 hover:bg-card-hover"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};