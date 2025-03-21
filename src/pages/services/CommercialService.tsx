
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Building, CheckCircle, ChevronRight, Phone, MessageSquare } from 'lucide-react';

const CommercialService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection 
          title="Commercial Pest Control Services"
          subtitle="Protect your business reputation with our discreet and effective commercial pest management solutions."
          backgroundImage="/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png"
          primaryButtonText="Schedule a Consultation"
          secondaryButtonText="Get a Business Quote"
        />

        {/* Overview Section */}
        <section className="section-padding section-after-hero bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Commercial Pest Management Solutions" 
                  subtitle="MaxPest delivers industry-specific pest control services to businesses throughout Chennai."
                />
                <p className="text-muted-foreground mb-6">
                  We understand that pest issues can damage your reputation, compromise health standards, and disrupt your operations. Our commercial pest control programs are designed to address these concerns with minimal disruption to your business.
                </p>
                <p className="text-muted-foreground mb-6">
                  From restaurants and hotels to offices, warehouses, and manufacturing facilities, we provide tailored solutions that meet regulatory requirements while effectively eliminating pest problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild>
                    <a href="/book-now">Schedule a Consultation</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+919444420367">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png" 
                  alt="Commercial Pest Control" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto">
            <SectionHeading 
              title="Industries We Serve" 
              subtitle="We provide specialized pest control solutions for various industries."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.services.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Benefits of Our Commercial Services" 
              subtitle="Why businesses throughout Chennai choose MaxPest for their pest control needs."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SectionHeading 
                  title="Regulatory Compliance & Documentation" 
                  subtitle="We help you meet industry standards and regulatory requirements."
                />
                <p className="text-muted-foreground mb-6">
                  Our commercial pest control services include comprehensive documentation and reporting to help you maintain compliance with industry regulations and standards, including:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed service reports for every visit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pest activity monitoring and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>FSSAI compliance documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Safety data sheets for all products used</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Digital access to all service records</span>
                  </li>
                </ul>
                <Button asChild>
                  <a href="/contact">Learn More About Compliance</a>
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png" 
                  alt="Regulatory Compliance" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Protect Your Business from Pests</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Contact us today to schedule a consultation and receive a customized commercial pest control proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Schedule a Consultation <ChevronRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 border-white/20 text-white button-hover" asChild>
                <a href="https://wa.me/919444420367" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Us
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
const industries = [
  {
    name: 'Restaurants & Food Service',
    description: 'Keep your food service establishment pest-free and compliant with health regulations.',
    services: [
      'Kitchen and dining area pest control',
      'Food storage area protection',
      'FSSAI compliance support',
      'Discreet treatments during off-hours'
    ]
  },
  {
    name: 'Hotels & Hospitality',
    description: 'Protect your guests and reputation with our comprehensive pest management programs.',
    services: [
      'Guest room inspections and treatments',
      'Common area pest prevention',
      'Kitchen and food service protection',
      'Discreet service delivery'
    ]
  },
  {
    name: 'Healthcare Facilities',
    description: 'Maintain the highest standards of cleanliness and safety in your healthcare facility.',
    services: [
      'Sensitive area pest management',
      'Regulatory compliance support',
      'Patient safety-focused approaches',
      'Monitoring and documentation'
    ]
  },
  {
    name: 'Retail & Shopping Centers',
    description: 'Create a pest-free shopping environment for your customers and staff.',
    services: [
      'Common area pest control',
      'Loading dock and storage protection',
      'Food court pest management',
      'After-hours service options'
    ]
  },
  {
    name: 'Warehouses & Distribution',
    description: 'Protect your inventory and operations with effective pest management solutions.',
    services: [
      'Inventory protection strategies',
      'Loading dock pest control',
      'Rodent management programs',
      'Large-scale facility solutions'
    ]
  },
  {
    name: 'Office Buildings',
    description: 'Maintain a professional, pest-free environment for your employees and visitors.',
    services: [
      'Common area pest prevention',
      'Break room and kitchen protection',
      'After-hours service options',
      'Preventive maintenance programs'
    ]
  }
];

const benefits = [
  {
    title: 'Customized Programs',
    description: 'Tailored solutions designed specifically for your industry, facility, and unique pest challenges.',
    icon: <Building className="h-6 w-6 text-primary" />
  },
  {
    title: 'Discreet Service',
    description: 'Our technicians work around your schedule to minimize disruption to your business operations.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  },
  {
    title: 'Compliance Support',
    description: 'Comprehensive documentation and reporting to help you meet industry standards and regulations.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  },
  {
    title: 'Rapid Response',
    description: 'Fast response to urgent pest issues with our emergency service for commercial clients.',
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  }
];

export default CommercialService;
