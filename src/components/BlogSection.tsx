import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/config/blog';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Helper function to format date as "DD MMM YYYY"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'short', 
    year: 'numeric' 
  });
};

const BlogSection = () => {
  const navigate = useNavigate();
  // Get the featured blog posts
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  
  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-2 text-3xl md:text-4xl font-bold text-gray-800"
        >
          Featured Posts
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl"
        >
          Explore our featured articles and insights on DevOps, WordPress development, and more.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <Link to={`/blog/${post.slug}`}> 
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}> 
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-portfolio-blue transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => navigate(`/blog/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`)}
                      className="px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 border bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-blue/20"
                    >
                      {tag}
                    </button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Button
            onClick={() => {
              sessionStorage.setItem('scrollToTop', 'true');
              navigate('/blog');
            }}
            className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:from-portfolio-blue/90 hover:to-blue-600/90 text-white h-10 px-4 py-2 md:h-auto md:px-8 md:py-4 text-lg rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 text-center"
          >
            <span className="w-full text-center">View All</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 