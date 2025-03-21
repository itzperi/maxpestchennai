
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Shield, BugOff, Sparkles, CheckCircle, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [animatedElements, setAnimatedElements] = useState<{[key: string]: boolean}>({
    'services': false,
    'why-choose': false,
    'process': false,
    'testimonials': false,
    'cta': false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'why-choose', 'process', 'testimonials', 'cta'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            setAnimatedElements(prev => ({...prev, [section]: true}));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection 
          title="Professional Pest Control Services in Chennai"
          subtitle="Protect your home and business with MaxPest's environmentally friendly pest control services. 100% satisfaction guaranteed."
          backgroundImage="/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png"
          primaryButtonText="Book an Inspection"
          secondaryButtonText="Get a Free Quote"
          showBookingForm={true}
        />

        {/* Services Section */}
        <section id="services" className="section-padding section-after-hero bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Pest Control Services" 
              subtitle="We offer comprehensive pest management solutions for residential and commercial properties in Chennai."
              centered
              className={cn(
                "transition-all duration-700 transform",
                animatedElements.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={cn(
                    "transition-all duration-700 transform",
                    animatedElements.services 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-12",
                    {
                      "transition-delay-150": index === 0,
                      "transition-delay-300": index === 1,
                      "transition-delay-450": index === 2,
                      "transition-delay-600": index === 3,
                      "transition-delay-750": index === 4,
                    }
                  )}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageSrc={service.imageSrc}
                    link={service.link}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="button-hover" onClick={() => navigate('/book-now')}>
                Book an Inspection <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose" className="section-padding bg-accent">
          <div className="container mx-auto">
            <SectionHeading 
              title="Why Choose MaxPest" 
              subtitle="We provide the highest quality pest control services with guaranteed results."
              centered
              className={cn(
                "transition-all duration-700 transform",
                animatedElements['why-choose'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center transition-all duration-700 transform",
                    animatedElements['why-choose'] 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-12",
                    {
                      "transition-delay-150": index === 0,
                      "transition-delay-300": index === 1,
                      "transition-delay-450": index === 2,
                      "transition-delay-600": index === 3,
                    }
                  )}
                >
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="section-padding bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Process" 
              subtitle="We follow a comprehensive approach to pest control to ensure effective results."
              centered
              className={cn(
                "transition-all duration-700 transform",
                animatedElements.process ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0" />
              
              {process.map((step, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex flex-col items-center text-center relative z-10 transition-all duration-700 transform",
                    animatedElements.process 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-12",
                    {
                      "transition-delay-150": index === 0,
                      "transition-delay-300": index === 1,
                      "transition-delay-450": index === 2,
                      "transition-delay-600": index === 3,
                    }
                  )}
                >
                  <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold border-2 border-primary text-primary mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <SectionHeading 
              title="What Our Customers Say" 
              subtitle="Our customers trust us to deliver quality pest control services."
              centered
              className={cn(
                "transition-all duration-700 transform",
                animatedElements.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={cn(
                    "transition-all duration-700 transform",
                    animatedElements.testimonials 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-12",
                    {
                      "transition-delay-150": index === 0,
                      "transition-delay-300": index === 1,
                      "transition-delay-450": index === 2,
                    }
                  )}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta" 
          className="bg-primary text-white section-padding"
        >
          <div 
            className={cn(
              "container mx-auto text-center transition-all duration-700 transform",
              animatedElements.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <h2 className="heading-lg mb-4">Ready to Eliminate Your Pest Problems?</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Get in touch with our experts today and receive a free, no-obligation quote for your pest control needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Book an Inspection</a>
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 border-white/20 text-white button-hover" asChild>
                <a href="tel:+919444420367">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 border-white/20 text-white button-hover" asChild>
                <a href="https://wa.me/919444420367" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Sample Data
const services = [
  {
    title: 'Residential Pest Control',
    description: 'Comprehensive pest control solutions to protect your home from unwanted pests.',
    imageSrc: '/lovable-uploads/38e553f4-8248-44b8-b567-76462de7ea21.png',
    link: '/services/residential'
  },
  {
    title: 'Commercial Pest Control',
    description: 'Customized pest management programs for businesses of all sizes and industries.',
    imageSrc: '/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png',
    link: '/services/commercial'
  },
  {
    title: 'Termite Control',
    description: 'Advanced termite detection and elimination services to protect your property.',
    imageSrc: '/lovable-uploads/425a6921-6220-46df-9ad0-a53d2fe7b653.png',
    link: '/services/termite-control'
  },
  {
    title: 'Rodent Control',
    description: 'Effective rodent removal and prevention strategies for a healthier environment.',
    imageSrc: '/lovable-uploads/b0e3e6bf-44bf-480c-bb9e-e0217ea77786.png',
    link: '/services/rodent-control'
  },
  {
    title: 'Mosquito Control',
    description: 'Reclaim your outdoor spaces with our mosquito reduction and prevention services.',
    imageSrc: '/lovable-uploads/adff0249-ac55-4012-98fe-717cf45c69e8.png',
    link: '/services/mosquito-control'
  }
];

const features = [
  {
    title: 'Eco-Friendly Solutions',
    description: 'We use environmentally responsible products and methods that are safe for your family and pets.',
    icon: <BugOff className="h-6 w-6 text-primary" />
  },
  {
    title: 'Licensed Professionals',
    description: 'Our team consists of certified technicians with years of experience in pest control.',
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: 'Guaranteed Results',
    description: 'We stand behind our work with a 100% satisfaction guarantee on all our services.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  },
  {
    title: 'Customized Approach',
    description: 'We develop tailored pest control strategies based on your specific needs and situation.',
    icon: <Sparkles className="h-6 w-6 text-primary" />
  }
];

const process = [
  {
    title: 'Inspection',
    description: 'We conduct a thorough inspection of your property to identify pest issues and entry points.'
  },
  {
    title: 'Treatment Plan',
    description: 'Based on our findings, we develop a customized treatment plan to address your specific pest problems.'
  },
  {
    title: 'Implementation',
    description: 'Our skilled technicians implement the agreed-upon treatment plan with minimal disruption to your routine.'
  },
  {
    title: 'Follow-up',
    description: 'We provide ongoing monitoring and follow-up visits to ensure long-lasting pest control results.'
  }
];

const testimonials = [
  {
    quote: 'MaxPest eliminated our termite problem completely. The technicians were professional, thorough, and respectful of our home.',
    author: 'Rajesh Kumar',
    role: 'Homeowner, Chennai',
    rating: 5
  },
  {
    quote: 'As a restaurant owner, pest control is critical. MaxPest has been our trusted partner for years, providing reliable and discreet service.',
    author: 'Priya Sharma',
    role: 'Restaurant Owner, Chennai',
    rating: 5
  },
  {
    quote: 'After struggling with recurring ant problems, MaxPest solved the issue for good. Their preventive approach really works!',
    author: 'Anand Mehta',
    role: 'Office Manager, Chennai',
    rating: 4
  }
];

export default Index;
