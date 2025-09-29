import { useState, useEffect } from 'react';
import { Mail, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-2xl font-orbitron font-bold text-gradient">
            PORTFOLIO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="sm"
              variant="ghost"
              className="text-foreground hover:text-primary hover:glow-cyan"
              onClick={() => window.open('mailto:math8shh@gmail.com', '_blank')}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-foreground hover:text-primary hover:glow-cyan"
              onClick={() => window.open('https://www.linkedin.com/in/mathesh-natarajan-35931428a/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="sm"
            variant="ghost"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-rajdhani font-medium"
              >
                Get In Touch
              </button>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-foreground hover:text-primary"
                  onClick={() => window.open('mailto:math8shh@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                  <span className="ml-2">Email</span>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-foreground hover:text-primary"
                  onClick={() => window.open('https://www.linkedin.com/in/mathesh-natarajan-35931428a/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="ml-2">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;