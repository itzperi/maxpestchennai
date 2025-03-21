
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText = 'Book Now',
  primaryButtonLink = '#',
  secondaryButtonText = 'Get a Quote',
  secondaryButtonLink = '#'
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-after-hero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 
            className={cn(
              "heading-xl text-white mb-6 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {title}
          </h1>
          <p 
            className={cn(
              "text-xl md:text-2xl text-white/80 mb-8 transition-all duration-700 delay-200 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {subtitle}
          </p>
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <Button size="lg" className="button-hover" asChild>
              <a href={primaryButtonLink}>{primaryButtonText}</a>
            </Button>
            <Button size="lg" variant="outline" className="button-hover bg-white/10 text-white hover:bg-white/20 hover:text-white border-white/30" asChild>
              <a href={secondaryButtonLink}>{secondaryButtonText}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center cursor-pointer animate-bounce-subtle" onClick={scrollToNextSection}>
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
