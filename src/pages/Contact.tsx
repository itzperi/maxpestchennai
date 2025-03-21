import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from '@/components/SectionHeading';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server.
    console.log('Form submitted', { name, email, phone, message });

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          title="Contact Us"
          subtitle="We're here to help! Reach out to us with any questions or inquiries."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 rounded-lg neomorphism">
            <h3 className="heading-md mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full button-hover">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-6 rounded-lg neomorphism">
            <h3 className="heading-md mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919444420367" className="hover:text-primary transition-colors">
                  +91 94444 20367
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@maxpestcontrol.com" className="hover:text-primary transition-colors">
                  info@maxpestcontrol.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Our Office</p>
                  <address className="not-italic text-muted-foreground">
                    123 Main Street,
                    <br />
                    Chennai, Tamil Nadu 600001
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
