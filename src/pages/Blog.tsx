import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/config/blog';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Loader2, X as CloseIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();
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

  const hasMorePosts = visiblePosts < filteredPosts.length;

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden pt-[100px] pb-[60px] md:pt-[150px] md:pb-[90px] lg:pt-[200px] lg:pb-[120px]">
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
          Blog
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl"
        >
          Explore our latest articles and insights on DevOps, WordPress development, and more.
        </motion.p>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 items-center">
          {['All', ...mainCategories].map(category => (
            <button
              key={category}
              onClick={() => { setSelectedCategory(category); setVisiblePosts(9); }}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-portfolio-blue border text-sm
                ${selectedCategory === category ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white border-transparent shadow-md' : 'bg-white text-portfolio-blue border-portfolio-blue/30 hover:bg-portfolio-blue/10'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
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
                      onClick={e => {
                        e.stopPropagation();
                        navigate(`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`);
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
              className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:from-portfolio-blue/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
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
  );
};

export default Blog; 