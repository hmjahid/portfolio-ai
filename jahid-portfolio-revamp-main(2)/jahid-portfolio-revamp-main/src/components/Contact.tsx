
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      // Using formsubmit.co service with your email specifically configured
      const response = await fetch("https://formsubmit.co/ajax/mdjahidhasan919@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _captcha: "false", // Disabling captcha for easier testing
          _subject: `New Contact Form Message: ${subject}`, // Custom subject line for better email organization
          _template: "table" // Using table template for better readability
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submission response:", data);
        
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I will get back to you shortly.",
          duration: 5000,
        });
        
        // Reset form
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out. I'm always open to new challenges and collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-portfolio-blue mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+88 01771-749213</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-portfolio-blue mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a 
                    href="mailto:mdjahidhasan919@gmail.com" 
                    className="font-medium hover:text-portfolio-blue transition-colors"
                  >
                    mdjahidhasan919@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="h-5 w-5 text-portfolio-blue mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/hmjahid/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-portfolio-blue transition-colors"
                  >
                    linkedin.com/in/hmjahid
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="border-gray-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject" 
                  placeholder="Project Inquiry" 
                  required 
                  className="border-gray-300"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message" 
                  placeholder="Hi, I'm interested in working with you on a project..." 
                  required 
                  className="min-h-[150px] border-gray-300"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
