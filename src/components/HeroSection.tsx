import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/portfolio-hero.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-neon-cyan/20 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-neon-purple/20 to-transparent blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-orbitron font-bold leading-tight">
              <span className="text-gradient">SOFTWARE</span>
              <br />
              <span className="text-foreground">DEVELOPER</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full glow-cyan"></div>
          </div>

          <div className="space-y-6 text-lg font-rajdhani">
  <p className="text-muted-foreground leading-relaxed">
    I am a full-stack developer who loves turning ideas into functional, modern web applications. 
    My focus is on building solutions that are efficient, scalable, and easy to use.
  </p>

  <p className="text-muted-foreground leading-relaxed">
    With experience in Java, Spring Boot, Automation, and cloud technologies, I bring projects to life with clean code and thoughtful design. 
    I enjoy simplifying complex workflows, automating tasks, and creating user experiences that feel seamless and intuitive.
  </p>

  <p className="text-muted-foreground leading-relaxed">
    My goal is to craft innovative digital solutions that not only meet technical requirements but also provide real value to users and businesses.
  </p>
</div>



          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-rajdhani font-semibold tracking-wide glow-cyan hover-lift"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rajdhani font-semibold tracking-wide transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className={`relative ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <div className="relative w-full max-w-lg mx-auto">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl scale-105"></div>
            
            {/* Main image container */}
            <div className="relative glass-card rounded-full overflow-hidden hover-lift w-96 h-96 mx-auto">
              <img
                src={heroImage}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-full"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-10 h-10 bg-primary rounded-full glow-cyan animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full glow-purple animate-pulse delay-500"></div>
          </div>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          size="sm"
          variant="ghost"
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={() => scrollToSection('skills')}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;