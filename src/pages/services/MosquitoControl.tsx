
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, ChevronRight, Phone, MessageSquare } from 'lucide-react';

const MosquitoControl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection 
          title="Professional Mosquito Control Services"
          subtitle="Reclaim your outdoor spaces and protect your family from mosquito-borne diseases with our effective control solutions."
          backgroundImage="/lovable-uploads/adff0249-ac55-4012-98fe-717cf45c69e8.png"
          primaryButtonText="Schedule a Treatment"
          secondaryButtonText="Get a Quote"
        />

        {/* Overview Section */}
        <section className="section-padding section-after-hero bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Effective Mosquito Management" 
                  subtitle="MaxPest provides comprehensive mosquito control services to reduce mosquito populations around your home or business."
                />
                <p className="text-muted-foreground mb-6">
                  Mosquitoes are more than just a nuisance—they can transmit serious diseases like dengue fever, malaria, and chikungunya. Our mosquito control services target both adult mosquitoes and their breeding sites to provide effective, long-lasting protection.
                </p>
                <p className="text-muted-foreground mb-6">
                  We use an integrated approach that combines habitat modification, larvicides, and targeted treatments to significantly reduce mosquito populations while minimizing environmental impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild>
                    <a href="/book-now">Schedule a Treatment</a>
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
                  src="/lovable-uploads/adff0249-ac55-4012-98fe-717cf45c69e8.png" 
                  alt="Mosquito Control" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Health Risks Section */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto">
            <SectionHeading 
              title="Mosquito-Borne Disease Risks" 
              subtitle="Mosquitoes in Chennai can transmit various diseases that pose significant health risks."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {diseaseRisks.map((risk, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-red-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{risk.disease}</h3>
                  <p className="text-muted-foreground mb-4">{risk.description}</p>
                  <ul className="space-y-2">
                    {risk.symptoms.map((symptom, sIndex) => (
                      <li key={sIndex} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg mb-6">Protect your family and community from these health risks with professional mosquito control services.</p>
              <Button size="lg" asChild>
                <a href="/book-now">Get Protected Today</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Our Mosquito Control Services" 
              subtitle="We offer a range of effective solutions to control mosquito populations around your property."
              centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <h4 className="font-medium mb-3">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIY Prevention Tips Section */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <SectionHeading 
              title="Mosquito Prevention Tips" 
              subtitle="In addition to professional treatments, these practices can help reduce mosquito breeding around your property."
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
              <p className="text-muted-foreground mb-6">While these tips can help reduce mosquito breeding, professional mosquito control services provide the most effective protection.</p>
              <Button asChild>
                <a href="/contact">Contact Us for More Information</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container mx-auto text-center">
            <h2 className="heading-lg mb-4">Enjoy a Mosquito-Free Environment</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Schedule a mosquito control treatment today and reclaim your outdoor living spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Schedule a Treatment <ChevronRight className="ml-2 h-4 w-4" /></a>
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
const diseaseRisks = [
  {
    disease: 'Dengue Fever',
    description: 'A viral infection transmitted by Aedes mosquitoes, common in Chennai especially during monsoon season.',
    symptoms: [
      'High fever (40°C/104°F)',
      'Severe headache and pain behind the eyes',
      'Joint and muscle pain',
      'Skin rash and mild bleeding'
    ]
  },
  {
    disease: 'Malaria',
    description: 'A parasitic infection transmitted by Anopheles mosquitoes, which are active primarily between dusk and dawn.',
    symptoms: [
      'Fever and chills',
      'Headache and muscle aches',
      'Fatigue and nausea',
      'In severe cases, organ failure'
    ]
  },
  {
    disease: 'Chikungunya',
    description: 'A viral disease transmitted by infected Aedes mosquitoes, causing debilitating joint pain that can persist for months.',
    symptoms: [
      'Sudden high fever',
      'Severe joint pain (especially hands and feet)',
      'Headache and muscle pain',
      'Rash on trunk and limbs'
    ]
  },
  {
    disease: 'Japanese Encephalitis',
    description: 'A viral infection that affects the brain, transmitted by Culex mosquitoes that breed in rice fields and standing water.',
    symptoms: [
      'High fever and headache',
      'Neck stiffness and disorientation',
      'Seizures and paralysis',
      'Coma in severe cases'
    ]
  },
  {
    disease: 'Lymphatic Filariasis',
    description: 'A parasitic disease caused by thread-like worms transmitted through mosquito bites, leading to elephantiasis.',
    symptoms: [
      'Severe swelling in arms, legs or genitals',
      'Painful and swollen lymph nodes',
      'Fever and chills',
      'Skin thickening and hardening'
    ]
  },
  {
    disease: 'Zika Virus',
    description: 'A viral infection transmitted by Aedes mosquitoes, particularly dangerous for pregnant women due to risk of birth defects.',
    symptoms: [
      'Mild fever and headache',
      'Skin rash and joint pain',
      'Conjunctivitis (red eyes)',
      'Can cause birth defects if contracted during pregnancy'
    ]
  }
];

const services = [
  {
    title: 'Barrier Spray Treatments',
    description: 'Our barrier spray treatment targets adult mosquitoes and other flying insects around your property. We apply a specialized insecticide to vegetation, under decks, and other resting areas where mosquitoes hide during the day.',
    benefits: [
      'Immediate reduction in mosquito populations',
      'Residual protection for up to 3-4 weeks',
      'Targets mosquitoes where they rest',
      'Environmentally responsible application methods'
    ]
  },
  {
    title: 'Larvicide Treatments',
    description: 'We identify and treat areas of standing water around your property with environmentally friendly larvicides that prevent mosquito larvae from developing into adults. This breaks the mosquito life cycle at its source.',
    benefits: [
      'Prevents new mosquitoes from emerging',
      'Safe for fish, plants, and other wildlife',
      'Effective in water features that cannot be drained',
      'Long-lasting protection (up to 30 days)'
    ]
  },
  {
    title: 'Misting Systems',
    description: 'For ongoing protection, we install automated mosquito misting systems around your property perimeter. These systems release fine mists of insecticide at programmed intervals to control mosquito populations.',
    benefits: [
      'Automated, consistent protection',
      'Customizable timing to target peak mosquito activity',
      'Reduced need for manual applications',
      'Ideal for properties with persistent mosquito problems'
    ]
  },
  {
    title: 'Event Treatments',
    description: 'Planning an outdoor event? Our special event mosquito treatments ensure your guests can enjoy themselves without mosquito interference. We apply treatments shortly before the event for maximum effectiveness.',
    benefits: [
      'Quick-acting mosquito control',
      'Temporary but effective protection',
      'Timed specifically for your event',
      'Makes outdoor gatherings more enjoyable'
    ]
  },
  {
    title: 'Integrated Mosquito Management',
    description: 'Our comprehensive approach combines multiple strategies for maximum effectiveness, including habitat modification, larvicide applications, barrier treatments, and ongoing monitoring.',
    benefits: [
      'Targets mosquitoes at every life stage',
      'Customized to your specific property',
      'Environmentally responsible approach',
      'Long-term population reduction'
    ]
  },
  {
    title: 'Seasonal Protection Programs',
    description: 'Our seasonal protection programs provide ongoing mosquito control throughout mosquito season with regularly scheduled treatments to maintain protection.',
    benefits: [
      'Consistent protection throughout mosquito season',
      'Regular monitoring and adjustments as needed',
      'Convenient scheduled service',
      'Cumulative effectiveness with each treatment'
    ]
  }
];

const preventionTips = [
  {
    title: 'Eliminate Standing Water',
    description: "Regularly empty containers that collect water such as flower pots, bird baths, pet dishes, and children's toys. Mosquitoes can breed in as little as a bottle cap of water."
  },
  {
    title: 'Clean Gutters Regularly',
    description: 'Keep gutters clean and free of debris to prevent water accumulation. Clogged gutters are a common breeding site for mosquitoes around homes.'
  },
  {
    title: 'Maintain Swimming Pools',
    description: 'Keep swimming pools properly chlorinated and maintain pool filters. Cover unused pools and remove standing water from pool covers.'
  },
  {
    title: 'Trim Vegetation',
    description: 'Keep lawns mowed and vegetation trimmed to reduce resting places for adult mosquitoes. Dense vegetation provides shade and protection that mosquitoes seek.'
  },
  {
    title: 'Use Screens on Windows and Doors',
    description: 'Ensure all windows and doors have tight-fitting screens without tears or gaps to prevent mosquitoes from entering your home.'
  },
  {
    title: 'Apply Personal Repellents',
    description: 'Use mosquito repellents containing DEET, picaridin, or oil of lemon eucalyptus when outdoors, especially during dawn and dusk when mosquitoes are most active.'
  }
];

export default MosquitoControl;
