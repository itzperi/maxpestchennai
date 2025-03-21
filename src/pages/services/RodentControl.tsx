
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, ChevronRight, Phone, MessageSquare } from 'lucide-react';

const RodentControl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection 
          title="Effective Rodent Control Services"
          subtitle="Protect your property from damage and health risks with our comprehensive rodent control solutions."
          backgroundImage="/lovable-uploads/b0e3e6bf-44bf-480c-bb9e-e0217ea77786.png"
          primaryButtonText="Schedule an Inspection"
          secondaryButtonText="Get a Quote"
        />

        {/* Overview Section */}
        <section className="section-padding section-after-hero bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Professional Rodent Control" 
                  subtitle="MaxPest provides effective solutions to eliminate and prevent rodent infestations in homes and businesses."
                />
                <p className="text-muted-foreground mb-6">
                  Rodents such as rats and mice can cause significant damage to your property, contaminate food sources, and pose serious health risks through the spread of diseases. Our comprehensive rodent control services address current infestations and implement preventive measures to keep rodents away.
                </p>
                <p className="text-muted-foreground mb-6">
                  We use a combination of advanced trapping methods, exclusion techniques, and when necessary, carefully applied rodenticides to provide effective and humane rodent management.
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
                  src="/lovable-uploads/b0e3e6bf-44bf-480c-bb9e-e0217ea77786.png" 
                  alt="Rodent Control" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Signs of Infestation Section */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto">
            <SectionHeading 
              title="Signs of Rodent Infestation" 
              subtitle="Recognizing the early signs of rodent activity can help prevent a full-scale infestation."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {infestationSigns.map((sign, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-amber-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{sign.title}</h3>
                  <p className="text-muted-foreground">{sign.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg mb-6">If you notice any of these signs in your home or business, it's important to contact professional rodent control services promptly.</p>
              <Button size="lg" asChild>
                <a href="/book-now">Book a Rodent Inspection</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Comprehensive Approach" 
              subtitle="We follow a systematic process to effectively control rodent infestations and prevent future problems."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{approach.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{approach.description}</p>
                  <h4 className="font-medium mb-3">What This Includes:</h4>
                  <ul className="space-y-2">
                    {approach.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention Tips Section */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <SectionHeading 
              title="Rodent Prevention Tips" 
              subtitle="Follow these recommendations to help keep rodents away from your property."
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
              <p className="text-muted-foreground mb-6">While these tips can help reduce the risk of rodent infestation, professional inspection and control are recommended for comprehensive protection.</p>
              <Button asChild>
                <a href="/contact">Contact Us for More Information</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Eliminate Rodent Problems Today</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Don't let rodents damage your property or threaten your health. Our expert team is ready to help.
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
const infestationSigns = [
  {
    title: 'Droppings',
    description: 'Small, dark pellets found along walls, in drawers, cupboards, or under sinks. Fresh droppings are dark and moist, while older ones are gray and crumble easily.'
  },
  {
    title: 'Gnaw Marks',
    description: 'Teeth marks on food packaging, wooden structures, electrical wires, or plastic pipes. Rodents constantly gnaw to keep their teeth from growing too long.'
  },
  {
    title: 'Scratching Noises',
    description: 'Sounds of movement in walls, ceilings, or under floors, especially at night when rodents are most active. You may hear scratching, scurrying, or squeaking.'
  },
  {
    title: 'Nests or Burrows',
    description: 'Collections of shredded paper, fabric, or plant material in hidden areas. You might find burrows near foundations, under debris, or in dense vegetation.'
  },
  {
    title: 'Grease Marks',
    description: 'Dark, greasy marks along walls and floorboards where rodents frequently travel. These smudges are caused by oils in their fur rubbing against surfaces.'
  },
  {
    title: 'Unusual Pet Behavior',
    description: 'Pets, especially cats and dogs, may act excited or alert when they sense rodents in the home. They might paw at walls, floors, or specific areas where rodents are hiding.'
  }
];

const approaches = [
  {
    title: 'Thorough Inspection',
    description: 'We begin with a comprehensive assessment of your property to identify rodent entry points, nesting areas, food sources, and the extent of the infestation.',
    includes: [
      'Identification of rodent species (rats, mice, etc.)',
      'Location of entry points and potential access routes',
      'Assessment of property damage',
      'Identification of factors attracting rodents to your property'
    ]
  },
  {
    title: 'Customized Treatment Plan',
    description: 'Based on our inspection findings, we develop a tailored rodent control strategy specific to your property and the severity of the infestation.',
    includes: [
      'Selection of appropriate trapping methods',
      'Determination of bait station locations',
      'Identification of exclusion points to seal',
      'Schedule for monitoring and follow-up visits'
    ]
  },
  {
    title: 'Active Elimination',
    description: 'We implement a combination of trapping, baiting, and exclusion methods to effectively remove existing rodents from your property.',
    includes: [
      'Strategic placement of traps and bait stations',
      'Regular monitoring and adjustments',
      'Safe removal of captured rodents',
      'Careful application of rodenticides when necessary'
    ]
  },
  {
    title: 'Exclusion & Prevention',
    description: 'We seal entry points and implement preventive measures to keep rodents from returning to your property.',
    includes: [
      'Sealing of gaps, cracks, and holes in the structure',
      'Installation of door sweeps and screens as needed',
      'Recommendations for landscaping and storage adjustments',
      'Ongoing prevention strategies tailored to your property'
    ]
  },
  {
    title: 'Follow-up & Monitoring',
    description: "Our service doesn't end with the initial treatment. We conduct follow-up visits to ensure the infestation is controlled and preventive measures remain effective.",
    includes: [
      'Regular inspections to check for new activity',
      'Removal of traps and baits when appropriate',
      'Assessment of exclusion repairs',
      'Ongoing recommendations for rodent prevention'
    ]
  },
  {
    title: 'Documentation & Recommendations',
    description: 'We provide detailed documentation of our findings, treatments applied, and recommendations for preventing future infestations.',
    includes: [
      'Comprehensive service reports',
      'Before and after documentation',
      'Customized prevention recommendations',
      'Education on rodent behavior and prevention strategies'
    ]
  }
];

const preventionTips = [
  {
    title: 'Seal Entry Points',
    description: 'Inspect your property for gaps, cracks, or holes larger than 1/4 inch and seal them with appropriate materials like steel wool, caulk, or hardware cloth.'
  },
  {
    title: 'Eliminate Food Sources',
    description: "Store food in airtight containers, clean up crumbs promptly, and don't leave pet food out overnight. Keep garbage in sealed containers with tight-fitting lids."
  },
  {
    title: 'Reduce Clutter',
    description: 'Minimize storage areas where rodents can hide and nest. Keep storage areas organized and elevated off the floor when possible.'
  },
  {
    title: 'Maintain Landscaping',
    description: 'Trim vegetation away from your building, keep grass short, and remove debris piles. Consider a gravel barrier around the foundation of your property.'
  },
  {
    title: 'Address Moisture Issues',
    description: 'Repair leaky pipes and faucets, ensure proper drainage around your property, and eliminate standing water. Rodents need water to survive.'
  },
  {
    title: 'Regular Inspections',
    description: 'Periodically inspect your property for signs of rodent activity. Early detection is key to preventing a full-scale infestation.'
  }
];

export default RodentControl;
