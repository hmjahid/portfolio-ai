import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded our expectations in every way. The attention to detail and technical expertise were impressive.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Innovate Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The WordPress development work was exceptional. They helped us transform our website into a modern, user-friendly platform that has significantly improved our conversion rates. Their expertise in WordPress and PHP was invaluable.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Global Brands",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "Our WordPress website transformation was outstanding. The new design is modern, responsive, and has significantly improved our conversion rates. The developer's understanding of both technical and business needs was impressive.",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Product Manager",
    company: "E-Commerce Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The WooCommerce implementation was flawless. They customized our online store exactly to our needs, integrated payment gateways, and optimized the performance. The result has been a significant increase in our online sales.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Founder",
    company: "EduTech Solutions",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The WordPress LMS platform they developed has transformed how we deliver courses. The custom features and user-friendly interface have received excellent feedback from both instructors and students.",
    rating: 5
  },
  {
    id: 6,
    name: "James Anderson",
    role: "IT Director",
    company: "Enterprise Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "The custom WordPress plugin development was exceptional. They created a complex booking system that integrates perfectly with our existing infrastructure. Their attention to security and performance was impressive.",
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/5 to-blue-600/5 dark:from-portfolio-blue/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-portfolio-blue to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-top"></div>
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Quote className="absolute -top-4 -left-2 h-8 w-8 text-portfolio-blue/20 dark:text-portfolio-blue/30 group-hover:text-portfolio-blue/40 transition-colors duration-500" />
        </motion.div>
        
        <div className="flex items-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8 text-left relative z-10 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
        >
          "{testimonial.content}"
        </motion.p>
        
        <div className="flex items-center gap-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-portfolio-blue/20 dark:ring-portfolio-blue/30 group-hover:ring-portfolio-blue/40 transition-all duration-500">
              <motion.img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="h-3 w-3 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-portfolio-blue transition-colors duration-300">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
              {testimonial.role} at {testimonial.company}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-blue/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-title"
        >
          Client Testimonials
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl"
        >
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-12">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-4 bg-white dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-portfolio-blue transition-all duration-300 shadow-md hover:shadow-lg" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-4 bg-white dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-portfolio-blue transition-all duration-300 shadow-md hover:shadow-lg" />
              </motion.div>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 