
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, ChevronRight, Phone, MessageSquare } from 'lucide-react';

const TermiteControl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection 
          title="Professional Termite Control Services"
          subtitle="Protect your property from destructive termites with our specialized treatments and prevention solutions."
          backgroundImage="/lovable-uploads/425a6921-6220-46df-9ad0-a53d2fe7b653.png"
          primaryButtonText="Schedule an Inspection"
          secondaryButtonText="Get a Quote"
        />

        {/* Overview Section */}
        <section className="section-padding section-after-hero bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Termite Control & Prevention" 
                  subtitle="MaxPest offers comprehensive termite management solutions for homes and businesses in Chennai."
                />
                <p className="text-muted-foreground mb-6">
                  Termites cause billions in property damage each year, often working silently and unseen until significant damage has occurred. Our termite control services are designed to eliminate active infestations and provide long-term protection against future termite activity.
                </p>
                <p className="text-muted-foreground mb-6">
                  We use the latest termite detection technology and treatment methods to provide effective control while minimizing the impact on your property and the environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild>
                    <a href="/book-now">Schedule an Inspection</a>
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
                  src="/lovable-uploads/425a6921-6220-46df-9ad0-a53d2fe7b653.png" 
                  alt="Termite Control" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto">
            <SectionHeading 
              title="Warning Signs of Termite Infestation" 
              subtitle="Recognizing the early signs of termite activity can save you thousands in property damage."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {warningSigns.map((sign, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-red-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{sign.title}</h3>
                  <p className="text-muted-foreground">{sign.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg mb-6">If you notice any of these signs, it's important to act quickly to prevent further damage.</p>
              <Button size="lg" asChild>
                <a href="/book-now">Schedule a Termite Inspection Today</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Termite Treatment Solutions" 
              subtitle="We offer a range of effective treatment options tailored to your property's specific needs."
              centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {treatments.map((treatment, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{treatment.title}</h3>
                  <p className="text-muted-foreground mb-6">{treatment.description}</p>
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {treatment.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground italic">{treatment.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention Tips Section */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <SectionHeading 
              title="Termite Prevention Tips" 
              subtitle="Proactive steps you can take to reduce the risk of termite infestation."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {preventionTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">While these tips can help reduce the risk of termite infestation, professional inspection and treatment are recommended for comprehensive protection.</p>
              <Button asChild>
                <a href="/contact">Contact Us for More Information</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Protect Your Property from Termites</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Don't wait until termites cause significant damage. Schedule an inspection with our expert technicians today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Schedule an Inspection <ChevronRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 border-white/20 text-white button-hover" asChild>
                <a href="tel:+919444420367">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
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
const warningSigns = [
  {
    title: 'Mud Tubes',
    description: 'Pencil-thin tubes made of soil found on exterior walls, foundation, or in crawl spaces. These tubes are constructed by termites as protective pathways.'
  },
  {
    title: 'Damaged Wood',
    description: 'Wood that sounds hollow when tapped or has maze-like patterns. Termites eat wood from the inside out, leaving a thin veneer of timber or just paint.'
  },
  {
    title: 'Swarmers or Wings',
    description: 'Presence of winged termites (swarmers) inside your home or discarded wings near windowsills and doors, indicating a termite colony nearby.'
  },
  {
    title: 'Frass (Termite Droppings)',
    description: 'Small, wood-colored pellets that resemble sawdust or coffee grounds, often found near termite entry points.'
  },
  {
    title: 'Tight Fitting Doors and Windows',
    description: 'Doors and windows that suddenly become difficult to open or close due to warping caused by termite damage and moisture.'
  },
  {
    title: 'Bubbling or Uneven Paint',
    description: 'Paint that appears to be bubbling, peeling, or has water damage when no water source is present. This can indicate termite activity behind the surface.'
  }
];

const treatments = [
  {
    title: 'Soil Treatment & Barrier Systems',
    description: "We create a protective barrier in the soil around your property's foundation to prevent termites from entering the structure. This treatment involves applying specialized termiticides that either repel or eliminate termites that come into contact with the treated soil.",
    benefits: [
      'Creates a continuous barrier of protection',
      'Long-lasting effectiveness (5+ years with proper maintenance)',
      'Protects the entire structure from subterranean termites',
      'Minimal disruption to your property'
    ],
    note: 'Recommended for new constructions and as preventive treatment for existing structures.'
  },
  {
    title: 'Termite Baiting Systems',
    description: 'Our baiting system involves placing stations around your property perimeter. These stations contain cellulose material that attracts termites. Once termite activity is detected, we add a growth regulator that termites carry back to the colony, eliminating the population.',
    benefits: [
      'Eliminates the entire termite colony, including the queen',
      'Environmentally friendly with minimal chemical usage',
      'Ongoing monitoring for continuous protection',
      'Effective for properties where soil treatment may be difficult'
    ],
    note: 'Ideal for both active infestations and as a preventive measure with ongoing monitoring.'
  },
  {
    title: 'Direct Wood Treatment',
    description: 'For active infestations in wooden structures, we directly treat the affected wood and surrounding areas using specialized termiticides that penetrate the wood to eliminate termites. This treatment targets termites already inside the structure.',
    benefits: [
      'Immediate action against active infestations',
      'Treats termites already inside wooden structures',
      'Protects treated wood from future infestations',
      'Can be combined with other treatment methods'
    ],
    note: 'Typically used as part of a comprehensive treatment plan for active infestations.'
  },
  {
    title: 'Foam and Liquid Applications',
    description: 'We use specialized equipment to apply termiticide foam or liquid into wall voids, cracks, and hard-to-reach areas where termites may be active. This method ensures thorough coverage in areas where conventional treatments may not reach.',
    benefits: [
      'Reaches termites in inaccessible areas',
      'Effective for spot treatments of localized infestations',
      'Minimally invasive with limited drilling required',
      'Quick application with immediate results'
    ],
    note: 'Often used as a supplementary treatment for targeted areas with known termite activity.'
  }
];

const preventionTips = [
  {
    title: 'Reduce Soil-to-Wood Contact',
    description: 'Maintain at least 15 cm of clearance between soil and wooden structures. Use concrete foundations and bases where possible to create a barrier between soil and wood.'
  },
  {
    title: 'Control Moisture Around Your Property',
    description: 'Fix leaky pipes, faucets, and AC units promptly. Ensure proper drainage away from your foundation and maintain gutters and downspouts to prevent water accumulation.'
  },
  {
    title: 'Inspect and Remove Dead Wood',
    description: 'Regularly inspect and remove dead trees, stumps, and accumulated wood debris near your property, as these can attract termites and serve as entry points.'
  },
  {
    title: 'Ventilate Crawl Spaces',
    description: 'Ensure adequate ventilation in crawl spaces and attics to reduce humidity and moisture that attract termites. Consider installing vapor barriers in crawl spaces.'
  },
  {
    title: 'Store Firewood Properly',
    description: 'Keep firewood, lumber, and paper goods elevated and away from your foundation. Store these items at least 6 meters from your home if possible.'
  },
  {
    title: 'Schedule Regular Inspections',
    description: 'Have your property professionally inspected for termites at least once a year, especially in high-risk areas. Early detection is key to preventing extensive damage.'
  }
];

export default TermiteControl;
