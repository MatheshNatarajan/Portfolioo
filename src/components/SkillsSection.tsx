import { useEffect, useState } from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Language',
    icon: Database,
    skills: ['Java','Python' , 'C'],
    color: 'from-neon-cyan to-neon-blue'
  },
  {
    category: 'Frameworks and Tools',
    icon: Database,
    skills: ['Spring boot','n8n - Expertise','REST APIs'],
    color: 'from-neon-cyan to-neon-blue'
  },
  {
    category: 'Database & Storage',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL'],
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    category: 'DevOps',
    icon: Cloud,
    skills: ['Docker'],
    color: 'from-neon-pink to-neon-purple'
  }
  
];

const SkillsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-neon-purple/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-neon-cyan/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-bold text-gradient">
            TECHNICAL SKILLS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto glow-cyan"></div>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => {
            const Icon = skillCategory.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={skillCategory.category}
                data-index={index}
                className={`glass-card p-6 rounded-2xl hover-lift transition-all duration-500 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  background: `linear-gradient(135deg, hsl(var(--glass)) / 0.3, hsl(var(--background)) / 0.1)`
                }}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategory.color} glow-cyan`}>
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-lg text-foreground">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center space-x-3 transition-all duration-300 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent glow-cyan"></div>
                      <span className="text-muted-foreground font-rajdhani font-medium hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Glow Effect */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${skillCategory.color} opacity-50`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-rajdhani mb-6">
            Always learning and adapting to new technologies
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary glow-cyan animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;