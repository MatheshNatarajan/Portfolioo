import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution built with React, Node.js, and MySQL. Features include user authentication, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'JWT'],
    demoLink: 'https://demo-ecommerce.com',
    githubLink: 'https://github.com/username/ecommerce-platform',
    status: 'Live',
    category: 'Full Stack'
  },
  {
    title: 'Task Automation Bot',
    description: 'Intelligent automation platform using n8n workflows to streamline business processes. Integrates with multiple APIs and services.',
    technologies: ['n8n', 'Node.js', 'REST APIs', 'PostgreSQL', 'Docker'],
    demoLink: 'https://automation-demo.com',
    githubLink: 'https://github.com/username/automation-bot',
    status: 'Live',
    category: 'Automation'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and real-time monitoring. Built with React and integrated with multiple data sources.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'WebSocket', 'MongoDB'],
    demoLink: 'https://analytics-dashboard.com',
    githubLink: 'https://github.com/username/analytics-dashboard',
    status: 'In Development',
    category: 'Data Visualization'
  },
  {
    title: 'Mobile Chat Application',
    description: 'Cross-platform mobile chat app with real-time messaging, file sharing, and group conversations. End-to-end encrypted.',
    technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux', 'Expo'],
    demoLink: 'https://play.google.com/store/apps/details?id=com.chatapp',
    githubLink: 'https://github.com/username/mobile-chat',
    status: 'Live',
    category: 'Mobile'
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'DevOps tool for managing cloud resources across multiple providers. Automated deployment and monitoring capabilities.',
    technologies: ['Python', 'Terraform', 'AWS', 'Docker', 'Kubernetes'],
    demoLink: 'https://cloud-manager.com',
    githubLink: 'https://github.com/username/cloud-manager',
    status: 'Beta',
    category: 'DevOps'
  },
  {
    title: 'AI Content Generator',
    description: 'Machine learning-powered content generation platform. Creates blog posts, social media content, and marketing copy.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL'],
    demoLink: 'https://ai-content.com',
    githubLink: 'https://github.com/username/ai-content-generator',
    status: 'Coming Soon',
    category: 'AI/ML'
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Mobile', 'Automation', 'DevOps', 'AI/ML', 'Data Visualization'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = document.querySelectorAll('[data-project-index]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'from-green-500 to-emerald-500';
      case 'In Development': return 'from-yellow-500 to-orange-500';
      case 'Beta': return 'from-blue-500 to-cyan-500';
      case 'Coming Soon': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-neon-purple/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-neon-cyan/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-bold text-gradient">
            FEATURED PROJECTS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto glow-cyan"></div>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`font-rajdhani font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground glow-cyan'
                  : 'border-border text-muted-foreground hover:text-primary hover:border-primary'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            
            return (
              <div
                key={project.title}
                data-project-index={index}
                className={`glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-orbitron font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-rajdhani font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white`}>
                        {project.status}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-rajdhani leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-rajdhani font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-rajdhani font-semibold glow-cyan flex-1"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-muted-foreground hover:text-primary hover:border-primary"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-rajdhani mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rajdhani font-semibold tracking-wide group"
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
          >
            Visit My GitHub
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;