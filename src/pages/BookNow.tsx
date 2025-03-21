
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
import { Calendar, Phone, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  address: z.string().min(5, { message: 'Please enter your full address' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  date: z.string().min(1, { message: 'Please select a preferred date' }),
  time: z.string().min(1, { message: 'Please select a preferred time' }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookNow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      date: '',
      time: '',
      notes: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking data:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      toast({
        title: "Booking Successful",
        description: "We'll contact you shortly to confirm your appointment.",
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
              title="Book an Inspection or Treatment" 
              subtitle="Schedule a pest control service with our expert team at your convenience."
              centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              {/* Booking Form */}
              <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Schedule Your Service</h3>

                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-3">Booking Successful!</h4>
                    <p className="text-muted-foreground max-w-md mx-auto mb-8">
                      Thank you for booking with MaxPest. Our team will contact you shortly to confirm your appointment details.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>Make Another Booking</Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Address</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Enter your complete address where service is needed" 
                                className="min-h-20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
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
                                <option value="inspection">Pest Inspection Only</option>
                                <option value="emergency">Emergency Pest Control</option>
                                <option value="other">Other Services</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <FormControl>
                                <select 
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="">Select a time slot</option>
                                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                  <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                                  <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your pest problem or any special instructions." 
                                className="min-h-20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> Our team will contact you within 24 hours to confirm your appointment. For emergency services, please call us directly.
                        </p>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : 'Book Service'}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Why Book with Us?</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <ShieldCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{benefit.title}</span>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary text-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Need Urgent Help?</h3>
                  <p className="mb-4">For emergency pest control services, contact us directly:</p>
                  
                  <div className="space-y-4">
                    <a href="tel:+919444420367" className="flex items-center text-white group">
                      <div className="bg-white/20 p-2 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-semibold">+91 94444 20367</span>
                    </a>
                    
                    <a href="https://wa.me/919444420367" target="_blank" rel="noopener noreferrer" className="flex items-center text-white group">
                      <div className="bg-white/20 p-2 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-semibold">WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Regular Service Hours</span>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Closed (Emergency services available)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Emergency Service Hours</span>
                        <p className="text-sm text-muted-foreground">
                          Available 24/7 for urgent pest control needs.<br />
                          Additional charges may apply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="What to Expect" 
              subtitle="Our simple booking and service process."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0" />
              
              {bookingProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 relative z-10">
                  <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Answers to common questions about our booking process and services."
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Sample Data
const benefits = [
  {
    title: 'Expert Technicians',
    description: 'All our pest control specialists are certified, experienced, and regularly trained on the latest techniques.'
  },
  {
    title: 'Flexible Scheduling',
    description: 'We offer convenient appointment times to fit your schedule, including weekend and evening options.'
  },
  {
    title: 'Guaranteed Results',
    description: 'We stand behind our work with a satisfaction guarantee. If pests return, so do we—at no additional cost.'
  },
  {
    title: 'Safe Methods',
    description: 'We use eco-friendly products and methods that are safe for your family, pets, and the environment.'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide clear, upfront pricing before any work begins.'
  }
];

const bookingProcess = [
  {
    title: 'Book Online',
    description: 'Fill out our booking form with your details and preferred service date and time.'
  },
  {
    title: 'Confirmation',
    description: 'Our team will contact you to confirm your appointment and answer any questions.'
  },
  {
    title: 'Service Visit',
    description: 'Our trained technicians will arrive at the scheduled time to perform the service.'
  },
  {
    title: 'Follow-Up',
    description: "We'll follow up to ensure your satisfaction and schedule any needed follow-up treatments."
  }
];

const faqs = [
  {
    question: 'How soon can you schedule a service?',
    answer: 'For standard services, we can typically schedule an appointment within 1-3 business days. For emergency services, we offer same-day appointments when available. Our team will work to accommodate your schedule.'
  },
  {
    question: 'Do I need to prepare my home before the service?',
    answer: "Yes, we'll provide specific preparation instructions based on the service you're booking. General preparations include removing pets, covering fish tanks, and clearing access to treatment areas. Detailed instructions will be sent after your booking is confirmed."
  },
  {
    question: 'How long does a typical pest control service take?',
    answer: 'Service duration varies depending on the type of treatment and the size of your property. Initial inspections typically take 30-60 minutes. Standard treatments range from 1-2 hours, while more comprehensive services like termite treatments may take longer.'
  },
  {
    question: 'Can I reschedule my appointment?',
    answer: "Yes, you can reschedule your appointment by contacting our customer service team at least 24 hours in advance. For emergency or last-minute changes, please call us directly and we'll do our best to accommodate your request."
  },
  {
    question: 'Do you offer recurring service plans?',
    answer: 'Yes, we offer quarterly, bi-monthly, and monthly service plans that provide regular treatments and ongoing protection. These plans often include special pricing and priority scheduling. Our team can recommend the best plan based on your specific needs.'
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept cash, credit cards, debit cards, UPI, and online bank transfers. For recurring service plans, we offer auto-payment options for added convenience. Payment is typically collected after the service is completed to your satisfaction.'
  }
];

export default BookNow;
