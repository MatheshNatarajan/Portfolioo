import { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const { toast } = useToast();

  const contactInfo = {
    email: 'matheshnatarajan2006@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mathesh-natarajan-35931428a/',
    phone: '+91 93448 55564',
    location: 'Coimbatore, India'
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
      
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy manually",
        variant: "destructive"
      });
    }
  };

  const handleContactReveal = () => {
    setIsContactVisible(true);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-neon-pink/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-orbitron font-bold text-gradient">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto glow-cyan"></div>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>

        {/* Contact Reveal */}
        <div className="text-center">
          {!isContactVisible ? (
            <div className="space-y-8">
              <div className="glass-card p-12 rounded-2xl mx-auto max-w-md hover-lift">
                <div className="space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 glow-cyan">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-orbitron font-bold text-foreground">
                      Let's Connect
                    </h3>
                    <p className="text-muted-foreground font-rajdhani">
                      Click below to reveal my contact information
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-rajdhani font-semibold tracking-wide glow-cyan group w-full"
                    onClick={handleContactReveal}
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Reveal Contact Details
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="glass-card p-6 rounded-2xl hover-lift group">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue glow-cyan">
                  <Mail className="h-6 w-6 text-background" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-orbitron font-semibold text-foreground mb-1">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground font-rajdhani hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary"
                  onClick={() => copyToClipboard(contactInfo.email, 'Email')}
                >
                  {copiedItem === 'Email' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

                {/* LinkedIn */}
                <div className="glass-card p-6 rounded-2xl hover-lift group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink glow-purple">
                      <Linkedin className="h-6 w-6 text-background" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-orbitron font-semibold text-foreground mb-1">LinkedIn</h4>
                      <p className="text-muted-foreground font-rajdhani">Professional Profile</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-primary"
                      onClick={() => window.open(contactInfo.linkedin, '_blank')}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass-card p-6 rounded-2xl hover-lift group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan glow-cyan">
                      <Phone className="h-6 w-6 text-background" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-orbitron font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground font-rajdhani">{contactInfo.phone}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-primary"
                      onClick={() => copyToClipboard(contactInfo.phone, 'Phone')}
                    >
                      {copiedItem === 'Phone' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-card p-6 rounded-2xl hover-lift group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple glow-purple">
                      <MapPin className="h-6 w-6 text-background" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-orbitron font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground font-rajdhani">{contactInfo.location}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-primary"
                      onClick={() => copyToClipboard(contactInfo.location, 'Location')}
                    >
                      {copiedItem === 'Location' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-rajdhani font-semibold tracking-wide glow-cyan group"
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Send Email
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rajdhani font-semibold tracking-wide group"
                  onClick={() => window.open(contactInfo.linkedin,)}
                >
                  <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </Button>
              </div>

              {/* Response Time */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-rajdhani text-muted-foreground">
                    Usually responds within 24 hours
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;