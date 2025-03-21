
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ChevronRight, Phone, MessageSquare } from 'lucide-react';

const ResidentialService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection 
          title="Residential Pest Control Services"
          subtitle="Keep your home pest-free with our comprehensive residential pest control solutions."
          backgroundImage="/lovable-uploads/38e553f4-8248-44b8-b567-76462de7ea21.png"
          primaryButtonText="Book an Inspection"
          secondaryButtonText="Get a Free Quote"
        />

        {/* Overview Section */}
        <section className="section-padding section-after-hero bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Protect Your Home from Unwanted Pests" 
                  subtitle="MaxPest provides effective, safe, and long-lasting pest control services for homeowners in Chennai."
                />
                <p className="text-muted-foreground mb-6">
                  Our residential pest control services are designed to eliminate existing pest problems and prevent future infestations. We understand that every home is unique, which is why we offer customized solutions tailored to your specific needs.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of experienced technicians uses the latest pest control methods and environmentally friendly products to ensure the safety of your family, pets, and the environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild>
                    <a href="/book-now">Book an Inspection</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/919444420367" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/38e553f4-8248-44b8-b567-76462de7ea21.png" 
                  alt="Residential Pest Control" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Included Section */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Residential Pest Control Services" 
              subtitle="We offer comprehensive pest control solutions for all types of residential properties."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {residentialServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Residential Pest Control Process" 
              subtitle="We follow a systematic approach to ensure effective and long-lasting results."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <div className="text-xl font-bold text-primary">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our residential pest control services."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Have more questions? We're here to help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+919444420367">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Make Your Home Pest-Free?</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Schedule an inspection with our expert technicians and take the first step towards a pest-free home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Book an Inspection <ChevronRight className="ml-2 h-4 w-4" /></a>
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
const residentialServices = [
  {
    title: 'General Pest Control',
    description: 'Comprehensive protection against common household pests',
    features: [
      'Treatment for cockroaches, ants, and spiders',
      'Indoor and outdoor application',
      'Safe for family and pets',
      'Preventive barrier treatments'
    ]
  },
  {
    title: 'Termite Management',
    description: 'Protect your home from destructive termites',
    features: [
      'Thorough inspection and identification',
      'Targeted treatments for active colonies',
      'Preventive barriers and monitors',
      'Structural protection'
    ]
  },
  {
    title: 'Rodent Control',
    description: 'Effective solutions for rodent problems',
    features: [
      'Humane trapping and removal',
      'Entry point identification and sealing',
      'Prevention strategies',
      'Sanitization recommendations'
    ]
  },
  {
    title: 'Mosquito Reduction',
    description: 'Reclaim your outdoor living spaces',
    features: [
      'Breeding site elimination',
      'Targeted treatments for adult mosquitoes',
      'Yard and garden treatments',
      'Ongoing prevention strategies'
    ]
  },
  {
    title: 'Bed Bug Elimination',
    description: 'Complete elimination of bed bug infestations',
    features: [
      'Comprehensive inspection',
      'Heat treatments and targeted applications',
      'Furniture and mattress treatments',
      'Follow-up inspections'
    ]
  },
  {
    title: 'Preventive Programs',
    description: 'Ongoing protection for your home',
    features: [
      'Seasonal treatments',
      'Regular inspections',
      'Early detection of potential issues',
      'Customized prevention strategies'
    ]
  }
];

const process = [
  {
    title: 'Inspection',
    description: 'Our technicians conduct a thorough inspection of your property to identify pest issues, entry points, and contributing factors.'
  },
  {
    title: 'Treatment Plan',
    description: 'Based on our findings, we develop a customized treatment plan tailored to your specific pest problems and home environment.'
  },
  {
    title: 'Implementation',
    description: 'Our trained technicians carefully implement the treatment plan using the most effective and environmentally responsible methods.'
  },
  {
    title: 'Follow-up',
    description: 'We provide ongoing support, follow-up inspections, and maintenance treatments to ensure long-term pest control success.'
  }
];

const faqs = [
  {
    question: 'How often should I schedule residential pest control services?',
    answer: 'For most homes in Chennai, we recommend quarterly treatments (every 3 months) to maintain protection throughout the year. However, this can vary based on your specific situation, pest pressure in your area, and the types of pests you're dealing with.'
  },
  {
    question: 'Are the products you use safe for my family and pets?',
    answer: 'Yes, we prioritize safety and use products that are approved for residential use. Our technicians are trained to apply treatments in a way that minimizes risk to your family, pets, and the environment. We'll provide specific safety instructions for each treatment.'
  },
  {
    question: 'How long will it take to see results?',
    answer: 'Many customers notice a significant reduction in pest activity within 24-48 hours of treatment. However, complete control may take longer depending on the pest species and the severity of the infestation. Some treatments work immediately, while others are designed to break the reproductive cycle over time.'
  },
  {
    question: 'Do I need to leave my home during treatment?',
    answer: 'In most cases, you don't need to leave your home during treatment. Our technicians will advise you on any specific precautions to take, such as staying out of treated areas until dry. For certain treatments, like fumigation, temporary relocation may be necessary.'
  },
  {
    question: 'What happens if pests return after treatment?',
    answer: 'We stand behind our work with a satisfaction guarantee. If pests return between regularly scheduled treatments, we'll return to provide additional treatments at no extra cost. Just contact our customer service team to arrange a callback service.'
  },
  {
    question: 'How can I prepare my home for pest control treatment?',
    answer: 'We'll provide specific preparation instructions based on your treatment plan. General preparation may include cleaning, reducing clutter, moving furniture away from walls, and storing food items. Our goal is to make the process as convenient as possible for you.'
  }
];

export default ResidentialService;
