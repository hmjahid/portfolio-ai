import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, BookOpen, Mail, Code, Server, Monitor, Cloud, Database, GitBranch, Globe, Terminal, Package, Layers, Zap, Shield, Cpu, HardDrive, Network } from "lucide-react";
import { motion } from "framer-motion";
import { RESUME_FILE, SOCIAL_LINKS } from '@/config/constants';
import { images } from '@/config/images';
import { 
  SiLinux, 
  SiDocker, 
  SiKubernetes, 
  SiWordpress, 
  SiPhp, 
  SiMysql, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiReact, 
  SiTailwindcss, 
  SiNginx, 
  SiAmazon,
  SiJenkins,
  SiGitlab,
  SiGithub,
  SiBitbucket,
  SiProxmox,
  SiGrafana,
  SiPrometheus,
  SiBootstrap,
  SiYaml
} from 'react-icons/si';

const Hero = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-52 sm:pt-4 sm:pb-64 md:pt-40 md:pb-80 lg:pt-40 lg:pb-64 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 will-change-transform"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] will-change-transform"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] will-change-transform"></div>
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 -left-24 w-96 h-96 bg-portfolio-blue/5 dark:bg-portfolio-blue/10 rounded-full blur-3xl will-change-transform"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl will-change-transform"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-16 md:max-w-[80%] md:mx-auto lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-blue to-blue-600 rounded-full"></div>
              <span className="text-portfolio-blue font-medium tracking-wider text-sm sm:text-base">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="relative inline-flex items-center"
              >
                <span className="relative inline-flex items-center">
                  <span className="bg-gradient-to-r from-portfolio-blue via-blue-500 to-blue-600 bg-clip-text text-transparent inline-flex items-center">
                    <motion.div
                      className="inline-block overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <motion.span
                        className="inline-block whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.5
                        }}
                      >
                        Md Jahid Hasan
                      </motion.span>
                    </motion.div>
                    <motion.span
                      className="inline-block w-1 h-12 bg-gradient-to-r from-portfolio-blue to-blue-600 ml-1"
                      initial={{ opacity: 1 }}
                      animate={{ 
                        opacity: [1, 0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        times: [0, 0.33, 0.66, 1],
                        delay: 0.5
                      }}
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 via-blue-500/20 to-blue-600/20 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue/10 via-blue-500/10 to-blue-600/10 rounded-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="h-10 w-10 min-w-[2.5rem] sm:h-12 sm:w-12 sm:min-w-[3rem] rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                WD
              </div>
              <div className="h-10 w-10 min-w-[2.5rem] sm:h-12 sm:w-12 sm:min-w-[3rem] rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                DE
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-portfolio-blue to-blue-600"></div>
              <span className="text-xl font-medium text-gray-600 dark:text-gray-300">
                Web & WordPress Developer | DevOps Enthusiast
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Passionate about creating user-friendly websites using WordPress and modern web technologies. 
              Experienced in theme development, plugin customization, and implementing DevOps practices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                    Hire Me <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 dark:border-portfolio-blue dark:text-portfolio-blue dark:hover:bg-portfolio-blue/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                  asChild
                >
                  <a 
                    href={RESUME_FILE.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {RESUME_FILE.label}
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white dark:bg-gray-700/80 shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white dark:bg-gray-700/80 shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white dark:bg-gray-700/80 shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Medium"
              >
                <BookOpen className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="md:w-[80%] md:mx-auto lg:w-5/12"
          >
            <div className="relative">
              {/* Outer decorative border */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -inset-6 rounded-full border-2 border-dashed border-portfolio-blue/30"
              />
              
              {/* Rotating border */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: 360
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-4 rounded-full border-2 border-portfolio-blue/20"
              />
              
              {/* Main image container */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative"
              >
                {/* Image shadow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-blue/20 to-blue-600/20 blur-xl"></div>
                
                {/* Main image */}
                <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                  src={images.profile.main}
                  alt="Md Jahid Hasan"
                  loading="eager"
                  fetchPriority="high"
                  width={384}
                  height={384}
                  className="w-72 h-72 md:w-96 md:h-96 lg:w-80 lg:h-80 object-cover rounded-full relative z-10 border-4 border-white dark:border-gray-800 shadow-2xl"
                />
                
                {/* Corner accents */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-portfolio-blue to-blue-600 flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-portfolio-blue to-blue-600 flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Technology Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute -bottom-1 sm:-bottom-1 md:-bottom-1 lg:-bottom-1 left-0 right-0 w-full bg-gradient-to-t from-white/90 via-white/70 to-transparent dark:from-gray-900/90 dark:via-gray-900/70 dark:to-transparent backdrop-blur-sm py-2 sm:py-3 md:py-4 pb-12 sm:pb-16 md:pb-20 lg:pb-24 z-10"
        style={{ marginBottom: '-1rem' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center justify-center mb-4 sm:mb-6"
          >
              {/* Decorative line before text */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: ['0%', '50%', '100%'] }}
                transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
                className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"
              />
              
              {/* Main text with gradient and animation */}
              <motion.h3 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-gray-800 dark:text-gray-200 whitespace-nowrap mx-2 sm:mx-4"
              >
                <motion.span
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-gradient-to-r from-portfolio-blue via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_200%]"
                  >
                    Technologies I Work With
                  </motion.span>
                
                {/* Animated underline */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-portfolio-blue via-blue-600 to-purple-600 rounded-full"
                />
                
                {/* Glowing effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"
                />
              </motion.h3>
              
              {/* Decorative line after text */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: ['0%', '50%', '100%'] }}
                transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
                className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent via-portfolio-blue to-transparent"
              />
          </motion.div>
        </div>
        {/* Full width infinite slider */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-infinite-slider whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 min-w-max">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/90 dark:bg-gray-800/90 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiLinux className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Linux</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiDocker className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Docker</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiKubernetes className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Kubernetes</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiWordpress className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">WordPress</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiPhp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">PHP</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiMysql className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">MySQL</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-700 dark:text-yellow-300">JavaScript</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
                <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-300">HTML5</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-600 dark:text-pink-400" />
                <span className="text-xs sm:text-sm font-semibold text-pink-700 dark:text-pink-300">CSS3</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGit className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300">Git</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800 dark:text-gray-200" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">GitHub</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiReact className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">React</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-300">Tailwind</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiBootstrap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">Bootstrap</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiNginx className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Nginx</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiAmazon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-700 dark:text-yellow-300">AWS</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiProxmox className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">Proxmox</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiPrometheus className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Prometheus</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGrafana className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Grafana</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiYaml className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300">YAML</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400 font-bold text-xs sm:text-sm flex items-center justify-center">L</div>
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">LAMP</span>
              </div>
            </div>
            
            {/* Second set for seamless loop */}
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 min-w-max">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/90 dark:bg-gray-800/90 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiLinux className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Linux</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiDocker className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Docker</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiKubernetes className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Kubernetes</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiWordpress className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">WordPress</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiPhp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">PHP</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiMysql className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">MySQL</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-700 dark:text-yellow-300">JavaScript</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
                <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-300">HTML5</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-600 dark:text-pink-400" />
                <span className="text-xs sm:text-sm font-semibold text-pink-700 dark:text-pink-300">CSS3</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGit className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300">Git</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800 dark:text-gray-200" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">GitHub</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiReact className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">React</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-300">Tailwind</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiBootstrap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">Bootstrap</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiNginx className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Nginx</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiAmazon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-700 dark:text-yellow-300">AWS</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiProxmox className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">Proxmox</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiPrometheus className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Prometheus</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGrafana className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Grafana</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiYaml className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300">YAML</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400 font-bold text-xs sm:text-sm flex items-center justify-center">L</div>
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">LAMP</span>
              </div>
            </div>
            
            {/* Third set for extra seamless loop */}
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 min-w-max">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/90 dark:bg-gray-800/90 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiLinux className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Linux</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiDocker className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Docker</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiKubernetes className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Kubernetes</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiWordpress className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">WordPress</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiPhp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">PHP</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiMysql className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">MySQL</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-700 dark:text-yellow-300">JavaScript</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
                <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-300">HTML5</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-600 dark:text-pink-400" />
                <span className="text-xs sm:text-sm font-semibold text-pink-700 dark:text-pink-300">CSS3</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGit className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300">Git</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800 dark:text-gray-200" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">GitHub</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiReact className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">React</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-300">Tailwind</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiBootstrap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">Bootstrap</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiNginx className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Nginx</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiAmazon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-700 dark:text-yellow-300">AWS</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiProxmox className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">Proxmox</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiPrometheus className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Prometheus</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiGrafana className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">Grafana</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <SiYaml className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300">YAML</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl shadow-sm backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600 dark:text-orange-400 font-bold text-xs sm:text-sm flex items-center justify-center">L</div>
                <span className="text-xs sm:text-sm font-semibold text-orange-700 dark:text-orange-300">LAMP</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
