import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, MessageCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/mdjahidhasan919@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _captcha: 'false',
          _subject: `New Contact Form Message: ${formData.subject}`,
          _template: 'table',
          _autoresponse: 'Thank you for your message. I will get back to you soon.'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I will get back to you shortly.",
          duration: 5000,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to Send Message",
        description: "There was a problem sending your message. Please try again or contact me directly via email.",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            Let's Connect
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-portfolio-blue to-blue-600 mt-2 mx-auto max-w-[100px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 mt-12 md:max-w-[80%] md:mx-auto lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Contact Us" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/30 to-blue-600/30"></div>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-100 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">Get In Touch</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Looking for a reliable developer for your next project? I'm here to help you achieve your goals with professional expertise and dedicated support.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start bg-gray-50 p-4 md:p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-white p-2 rounded-lg shadow-sm mb-2 sm:mb-0 sm:mr-4">
                    <Phone className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div className="break-words break-all">
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a 
                      href="tel:+8801771749213" 
                      className="font-medium hover:text-portfolio-blue transition-colors"
                    >
                      +88 01771-749213
                    </a>
                    <a 
                      href="https://wa.me/8801771749213" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 mt-1 flex items-center hover:text-portfolio-blue transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Available on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start bg-gray-50 p-4 md:p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-white p-2 rounded-lg shadow-sm mb-2 sm:mb-0 sm:mr-4">
                    <Mail className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div className="break-words break-all">
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a 
                      href="mailto:mdjahidhasan919@gmail.com" 
                      className="font-medium hover:text-portfolio-blue transition-colors"
                    >
                      mdjahidhasan919@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start bg-gray-50 p-4 md:p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-white p-2 rounded-lg shadow-sm mb-2 sm:mb-0 sm:mr-4">
                    <Linkedin className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div className="break-words break-all">
                    <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-100 h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-2 block"
              >
                Send a Message
              </motion.span>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
                Drop a Line
              </h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-gradient-to-r from-portfolio-blue to-blue-600 mt-2 mx-auto max-w-[80px]"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-green-50 p-8 rounded-xl text-center border border-green-100"
                >
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="text-green-700 border-green-200 hover:bg-green-100"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className={cn("text-gray-700 font-medium", errors.firstName && "text-red-500")}>
                        First Name
                      </Label>
                      <Input 
                        id="firstName"
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        className={cn(
                          "border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20",
                          errors.firstName && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className={cn("text-gray-700 font-medium", errors.lastName && "text-red-500")}>
                        Last Name
                      </Label>
                      <Input 
                        id="lastName"
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className={cn(
                          "border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20",
                          errors.lastName && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className={cn("text-gray-700 font-medium", errors.email && "text-red-500")}>
                        Email Address
                      </Label>
                      <Input 
                        id="email"
                        name="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className={cn(
                          "border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20",
                          errors.email && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={cn("text-gray-700 font-medium", errors.phone && "text-red-500")}>
                        Phone Number
                      </Label>
                      <Input 
                        id="phone"
                        name="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000" 
                        className={cn(
                          "border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20",
                          errors.phone && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className={cn("text-gray-700 font-medium", errors.subject && "text-red-500")}>
                      Subject
                    </Label>
                    <Input 
                      id="subject"
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry" 
                      className={cn(
                        "border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20",
                        errors.subject && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className={cn("text-gray-700 font-medium", errors.message && "text-red-500")}>
                      Message
                    </Label>
                    <Textarea 
                      id="message"
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi, I'm interested in working with you on a project..." 
                      className={cn(
                        "min-h-[150px] border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20",
                        errors.message && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                      <p className={cn(
                        "text-sm",
                        formData.message.length < 10 ? "text-gray-500" : "text-green-500"
                      )}>
                        {formData.message.length}/500 characters
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white font-medium py-2.5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
