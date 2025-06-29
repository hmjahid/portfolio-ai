import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { blogPosts } from '@/config/blog';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Loader2, X as CloseIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CallToAction from '@/components/CallToAction';

// Helper function to format date as "DD MMM YYYY"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'short', 
    year: 'numeric' 
  });
};

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();
  const location = useLocation();
  const POSTS_PER_PAGE = 3;

  const mainCategories = ['DevOps', 'WordPress', 'Web Development' , 'Linux', 'Others'];

  const loadMore = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVisiblePosts(prev => prev + POSTS_PER_PAGE);
    setIsLoading(false);
  };

  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : selectedCategory === 'Others'
      ? blogPosts.filter(post => !mainCategories.slice(0, 4).includes(post.category))
      : blogPosts.filter(post => post.category === selectedCategory);

  // Sort posts by date (latest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const hasMorePosts = visiblePosts < sortedPosts.length;

  // Scroll to top when navigating from other pages (delayed smooth scroll)
  useEffect(() => {
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop');
    if (shouldScrollToTop === 'true') {
      sessionStorage.removeItem('scrollToTop');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.title = 'Blog | Md Jahid Hasan - Web & WordPress Developer | DevOps Enthusiast';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = 'Read the latest articles on DevOps, WordPress, Linux, and web development by Md Jahid Hasan - Web & WordPress Developer and DevOps Enthusiast.';
    if (metaDescription) {
      metaDescription.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.14),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 dark:bg-blue-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-100 dark:bg-indigo-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-100 dark:bg-purple-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative pt-[120px] pb-[80px] md:pt-[150px] md:pb-[100px] lg:pt-[180px] lg:pb-[120px]">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-100 text-sm font-medium border border-gray-200 dark:border-gray-600 shadow-lg">
                <span className="text-xl">📚</span>
                Latest Articles & Insights
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-8"
              style={{ lineHeight: '1.3' }}
            >
              Discover Our
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Blog Collection
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Dive into expert insights on <span className="font-semibold text-blue-600 dark:text-blue-400">DevOps</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">WordPress development</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Linux administration</span>, and modern web technologies. 
              Stay updated with the latest trends and best practices.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300 mb-12"
            >
              <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{blogPosts.length}+ Articles</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">5+ Categories</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Expert Insights</span>
              </div>
            </motion.div>
            
           
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector('.section-padding');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center gap-2 text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">
            <span className="text-xs font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-blue-600 dark:border-blue-400 rounded-full flex justify-center hover:border-blue-700 dark:hover:border-blue-300 transition-colors duration-200"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Blog Content Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden pt-[60px] pb-[60px] md:pt-[80px] md:pb-[80px] lg:pt-[100px] lg:pb-[100px]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Browse Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl ml-0">
              Filter by category to explore our latest articles and insights.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="mb-8 flex flex-wrap gap-3 items-center justify-start">
            {['All', ...mainCategories].map(category => (
              <button
                key={category}
                onClick={() => { 
                  setSelectedCategory(category); 
                  setVisiblePosts(9); 
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-portfolio-blue border text-sm
                  ${selectedCategory === category ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white border-transparent shadow-md' : 'bg-white dark:bg-gray-800 text-portfolio-blue border-portfolio-blue/30 dark:border-gray-600 hover:bg-portfolio-blue/10 dark:hover:bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.slice(0, visiblePosts).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}> 
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-portfolio-blue transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={e => {
                          e.stopPropagation();
                          navigate(`/blog/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`);
                        }}
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

          {hasMorePosts && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mt-12"
            >
              <Button
                onClick={loadMore}
                disabled={isLoading}
                className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:from-portfolio-blue/90 hover:to-blue-600/90 text-white h-10 px-4 py-2 md:h-auto md:px-8 md:py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 rounded-lg font-semibold shadow-lg transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Load More'
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default Blog; 