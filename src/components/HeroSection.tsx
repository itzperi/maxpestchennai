
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showBookingForm?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText = 'Book an Inspection',
  primaryButtonLink = '/book-now',
  secondaryButtonText = 'Get a Quote',
  secondaryButtonLink = '/contact',
  showBookingForm = false
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div>
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
                <Link to={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>
              <Button size="lg" variant="outline" className="button-hover bg-white/10 text-white hover:bg-white/20 hover:text-white border-white/30" asChild>
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
              <Button size="lg" variant="outline" className="button-hover bg-white/10 text-white hover:bg-white/20 hover:text-white border-white/30" asChild>
                <a href="https://wa.me/919444420367" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <a href="tel:+919444420367" className="flex items-center text-white hover:text-primary transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                <span className="text-xl font-semibold">+91 94444 20367</span>
              </a>
            </div>
          </div>

          {/* Quick Booking Form */}
          {showBookingForm && (
            <div 
              className={cn(
                "bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transition-all duration-700 delay-600 transform max-w-md w-full mx-auto lg:mx-0",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <h3 className="text-white text-xl font-semibold mb-4">Book an Inspection</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="" className="bg-gray-800">Select Service</option>
                    <option value="residential" className="bg-gray-800">Residential Pest Control</option>
                    <option value="commercial" className="bg-gray-800">Commercial Pest Control</option>
                    <option value="termite" className="bg-gray-800">Termite Control</option>
                    <option value="rodent" className="bg-gray-800">Rodent Control</option>
                    <option value="mosquito" className="bg-gray-800">Mosquito Control</option>
                  </select>
                </div>
                <Button type="submit" className="w-full">Submit Request</Button>
              </form>
            </div>
          )}
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
