
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        variant: "success",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Contact MaxPest" 
              subtitle="Get in touch with our team for inquiries, quotes, or to schedule a service."
              centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <FormControl>
                              <select 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                {...field}
                              >
                                <option value="">Select a service</option>
                                <option value="residential">Residential Pest Control</option>
                                <option value="commercial">Commercial Pest Control</option>
                                <option value="termite">Termite Control</option>
                                <option value="rodent">Rodent Control</option>
                                <option value="mosquito">Mosquito Control</option>
                                <option value="other">Other Services</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your pest control needs or any questions you may have." 
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-primary text-white p-8 rounded-lg shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Phone</h4>
                        <p className="text-white/80 mb-1">Call us for immediate assistance</p>
                        <a href="tel:+919444420367" className="text-xl font-semibold hover:text-white/90 transition-colors">
                          +91 94444 20367
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <p className="text-white/80 mb-1">Send us an email anytime</p>
                        <a href="mailto:info@maxpest.in" className="text-lg font-semibold hover:text-white/90 transition-colors">
                          info@maxpest.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Office Location</h4>
                        <p className="text-white/80 mb-1">Visit our office</p>
                        <address className="not-italic font-semibold">
                          123 Anna Nagar, Chennai - 600001<br />
                          Tamil Nadu, India
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">WhatsApp</h4>
                        <p className="text-white/80 mb-1">Message us on WhatsApp</p>
                        <a 
                          href="https://wa.me/919444420367" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mt-2"
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Chat Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 rounded-md border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> Emergency pest control services are available outside regular business hours. Please call our emergency line for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Find Us" 
              subtitle="Visit our office or schedule a service in your area."
              centered
            />
            
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62212.67689446259!2d80.18627424863279!3d13.08671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1691293919548!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MaxPest Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
              Contact us today to schedule a pest inspection or treatment. Our team is ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white button-hover" asChild>
                <a href="/book-now">Book an Inspection</a>
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 border-white/20 text-white button-hover" asChild>
                <a href="tel:+919444420367">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
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

export default Contact;
