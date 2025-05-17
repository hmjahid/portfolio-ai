
import React from 'react';
import { User, Mail, Briefcase, GraduationCap } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <img
              src="https://hmjahid.netlify.app/assets/images/aboutMe.webp"
              alt="Md Jahid Hasan working"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <p className="text-gray-700 mb-6">
              Software Engineer specializing in WordPress development with expertise in creating custom themes, 
              plugins, and full-featured websites. Additionally, I have strong skills in React.js, Next.js, and Node.js.
              I create responsive and user-friendly web applications and sites for various business needs.
            </p>
            <p className="text-gray-700 mb-8">
              I'm also a DevOps enthusiast with hands-on experience using tools like Docker, Kubernetes, 
              Jenkins, and AWS. With a strong foundation in both development and operations, I'm dedicated to 
              delivering high-quality solutions that meet business requirements and exceed user expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-portfolio-blue mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">Md Jahid Hasan</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-portfolio-blue mr-3" />
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
              
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-portfolio-blue mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium">WordPress Developer & DevOps Enthusiast</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-portfolio-blue mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="font-medium">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
