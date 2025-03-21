
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Leaf, Target, ChevronRight, Phone, MessageSquare } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-xl mb-6">About MaxPest</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Chennai's trusted pest control service provider, delivering effective and environmentally responsible solutions since 2010.
                </p>
                <p className="text-muted-foreground mb-6">
                  At MaxPest, we understand the challenges that pests present to homes and businesses in Chennai. Our mission is to provide comprehensive pest management solutions that protect your property, health, and peace of mind.
                </p>
                <p className="text-muted-foreground mb-8">
                  With our team of experienced professionals and commitment to using the latest pest control technologies, we have established ourselves as a leader in the industry, known for our reliability, effectiveness, and customer-focused approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/book-now">Book a Service</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png" 
                  alt="MaxPest Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Story" 
              subtitle="From humble beginnings to becoming Chennai's trusted pest control provider."
              centered
            />
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <p className="text-lg">
                  MaxPest was founded in 2010 by Mr. Rajesh Kumar, a certified entomologist with a passion for developing effective and environmentally responsible pest control solutions. What began as a small operation with just two technicians has grown into a comprehensive pest management company serving thousands of customers throughout Chennai and surrounding areas.
                </p>
                <p>
                  In our early years, we focused primarily on residential pest control services, building our reputation through word-of-mouth recommendations from satisfied customers. As our expertise and team grew, we expanded into commercial pest control, developing specialized programs for restaurants, hotels, healthcare facilities, and other businesses.
                </p>
                <p>
                  A pivotal moment in our company's history came in 2015 when we introduced our Integrated Pest Management (IPM) approach, which emphasizes prevention, monitoring, and the use of targeted treatments only when necessary. This approach not only proved more effective but also aligned with our commitment to environmental responsibility.
                </p>
                <p>
                  Today, MaxPest employs over 50 trained technicians and staff members, all dedicated to our mission of providing safe, effective pest control solutions. We continue to invest in the latest technologies, training, and equipment to ensure we stay at the forefront of the pest control industry.
                </p>
                <p>
                  Throughout our journey, our core values have remained the same: integrity, quality, safety, and customer satisfaction. These principles guide every aspect of our business, from how we train our technicians to how we interact with our customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Core Values" 
              subtitle="The principles that guide everything we do at MaxPest."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Leadership Team" 
              subtitle="Meet the experts behind MaxPest's success."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.certifications.map((cert, cIndex) => (
                        <span key={cIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Certifications & Affiliations" 
              subtitle="We maintain the highest standards in the pest control industry."
              centered
            />
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Industry Certifications</h3>
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{cert.name}</span>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Memberships</h3>
                  <ul className="space-y-3">
                    {memberships.map((membership, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{membership.name}</span>
                          <p className="text-sm text-muted-foreground">{membership.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="heading-lg mb-4">Ready to Work with Chennai's Pest Control Experts?</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Contact MaxPest today to schedule a consultation or service appointment. Our team is ready to help you with all your pest control needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Book a Service <ChevronRight className="ml-2 h-4 w-4" /></a>
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
const values = [
  {
    title: 'Customer Satisfaction',
    description: 'We prioritize the needs of our customers and are committed to exceeding expectations with every service we provide. Your satisfaction is our ultimate measure of success.',
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: 'Environmental Responsibility',
    description: 'We use eco-friendly products and integrated pest management techniques to minimize environmental impact while effectively controlling pests.',
    icon: <Leaf className="h-6 w-6 text-primary" />
  },
  {
    title: 'Quality & Effectiveness',
    description: 'We deliver the highest quality pest control services using proven methods and the latest industry innovations to ensure effective, long-lasting results.',
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: 'Integrity & Transparency',
    description: 'We operate with honesty and transparency in all aspects of our business, from pricing to the products we use and the recommendations we make.',
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: 'Continuous Improvement',
    description: 'We are committed to ongoing learning and improvement, staying updated with the latest pest control technologies and methods to better serve our customers.',
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: 'Community Engagement',
    description: 'We actively participate in and contribute to the Chennai community, providing education and support for public health initiatives related to pest control.',
    icon: <Users className="h-6 w-6 text-primary" />
  }
];

const team = [
  {
    name: 'Rajesh Kumar',
    position: 'Founder & CEO',
    bio: 'With over 25 years of experience in entomology and pest management, Rajesh founded MaxPest with a vision to provide effective, environmentally responsible pest control solutions.',
    image: '/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png',
    certifications: ['IPCA Certified', 'Entomologist']
  },
  {
    name: 'Priya Sharma',
    position: 'Operations Director',
    bio: 'Priya oversees all service operations, ensuring that MaxPest delivers consistent, high-quality pest control services to every customer. She has been with the company since 2012.',
    image: '/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png',
    certifications: ['IPCA Certified', 'MBA']
  },
  {
    name: 'Dr. Anand Mehta',
    position: 'Technical Director',
    bio: 'Dr. Mehta leads our research and development efforts, constantly evaluating new pest control technologies and methodologies to enhance our service effectiveness.',
    image: '/lovable-uploads/89edde90-11dc-4fff-afd5-3f4b3801c8d3.png',
    certifications: ['Ph.D. Entomology', 'IPM Specialist']
  }
];

const certifications = [
  {
    name: 'Indian Pest Control Association (IPCA) Certification',
    description: 'Recognized for adhering to the highest standards of pest management practices and professional ethics.'
  },
  {
    name: 'ISO 9001:2015 Certification',
    description: 'Certified for our quality management system, ensuring consistent delivery of services that meet customer and regulatory requirements.'
  },
  {
    name: 'Green Pro Certification',
    description: 'Recognized for our commitment to environmentally responsible pest management practices and sustainability.'
  },
  {
    name: 'Food Safety Management System Certification',
    description: 'Specialized certification for pest control services in food processing and handling facilities.'
  }
];

const memberships = [
  {
    name: 'Indian Pest Control Association (IPCA)',
    description: 'Active member contributing to the advancement of the pest management industry in India.'
  },
  {
    name: 'National Pest Management Association (NPMA)',
    description: 'International affiliation providing access to global best practices and industry research.'
  },
  {
    name: 'Chennai Chamber of Commerce',
    description: 'Active participation in local business community and industry standards development.'
  },
  {
    name: 'Environmental Protection Association of India',
    description: 'Committed to promoting environmentally sustainable business practices.'
  }
];

export default About;
