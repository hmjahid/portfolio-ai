
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0 md:w-1/2 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-blue mb-3">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
              Md Jahid Hasan
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-6">WordPress Developer & DevOps Enthusiast</p>
            <p className="text-gray-600 mb-8 max-w-lg">
              Passionate about creating user-friendly websites using WordPress and modern web technologies. 
              Experienced in theme development, plugin customization, and implementing DevOps practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white px-6 py-2"
                asChild
              >
                <a href="#contact">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/11lKB0RNXQxegyZFzXF-U1GD5911lMf8C/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-5/12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-full border-2 border-portfolio-blue"></div>
              <img
                src="https://media.licdn.com/dms/image/D5603AQHplGNeGf-vYA/profile-displayphoto-shrink_800_800/0/1691077299947?e=1720742400&v=beta&t=2OGEx9oAkpD5hqcB_SuOUZfodNqFzabyHe1UIIl9PSU"
                alt="Md Jahid Hasan"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-full border-2 border-portfolio-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
