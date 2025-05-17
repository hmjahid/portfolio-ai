import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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

const Testimonials = () => {
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

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-left text-gray-600 max-w-2xl mb-12">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>

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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-left">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2 bg-white hover:bg-gray-100 text-black border-gray-200 hover:border-gray-300 transition-all duration-300" />
            <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2 bg-white hover:bg-gray-100 text-black border-gray-200 hover:border-gray-300 transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials; 