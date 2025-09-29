import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing.',
    technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'JWT'],
    category: 'Full Stack'
  },
  {
    title: 'Partner Persona Matchmaking',
    description: 'Automated platform to match partners based on predefined personas using intelligent algorithms and workflow automation.',
    technologies: ['n8n', 'Node.js', 'REST APIs', 'PostgreSQL'],
    category: 'Automation'
  },
  {
    title: 'Student Onboarding System',
    description: 'Comprehensive onboarding system for students including registration, profile setup, and task tracking.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'React'],
    category: 'Full Stack'
  },
  {
    title: 'MeetSync',
    description: 'AI-powered meeting assistant that summarizes meetings, tracks tasks, and integrates with calendar & messaging apps.',
    technologies: ['React', 'Node.js', 'n8n', 'REST APIs', 'PostgreSQL'],
    category: 'Automation'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Streamlit-based movie recommendation system using preprocessed similarity matrices and custom algorithms for accurate suggestions.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Machine Learning'],
    category: 'AI/ML'
  },
  {
    title: 'Color Detection App',
    description: 'Interactive web app that identifies and provides information about colors in images in real-time.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Web App'
  },
  {
    title: 'Email Automation',
    description: 'Automated email workflows and notifications built using n8n to streamline business communication.',
    technologies: ['n8n', 'Node.js', 'REST APIs', 'SMTP'],
    category: 'Automation'
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Mobile', 'Automation', 'DevOps', 'AI/ML', 'Data Visualization', 'Web App'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setVisibleProjects(prev => prev.includes(index) ? prev : [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = document.querySelectorAll('[data-project-index]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

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
                {/* Project Content */}
                <div className="p-6 pb-4">
                  <h3 className="font-orbitron font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-rajdhani leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-rajdhani font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
