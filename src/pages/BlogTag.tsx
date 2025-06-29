import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/config/blog';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import CallToAction from '@/components/CallToAction';
import { getAllTags, getTagUrl, decodeTagUrl } from '@/utils/blogUtils';

// Helper function to format date as "DD MMM YYYY"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'short', 
    year: 'numeric' 
  });
};

const BlogTag = () => {
  const { tag } = useParams<{ tag: string }>();
  const navigate = useNavigate();
  
  // Decode the tag URL to get the original tag name for filtering
  const originalTag = tag ? decodeTagUrl(tag) : '';
  const urlTag = originalTag.replace(/-/g, ' ');
  const allTags = getAllTags();
  const [visiblePosts, setVisiblePosts] = React.useState(9);
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Filter posts by tag - show all posts if tag is 'all' or undefined
  const filteredPosts = (tag && tag.toLowerCase() !== 'all' && originalTag)
    ? blogPosts.filter(post => post.tags.some(t => t.toLowerCase() === originalTag.toLowerCase()))
    : blogPosts;
  
  // Sort posts by date (latest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const POSTS_PER_PAGE = 3;
  const hasMorePosts = visiblePosts < sortedPosts.length;
  const loadMore = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVisiblePosts(prev => prev + POSTS_PER_PAGE);
    setIsLoading(false);
  };

  useEffect(() => {
    if (tag && tag !== 'all') {
      document.title = `Posts tagged with ${originalTag} | Blog | Md Jahid Hasan - Web & WordPress Developer | DevOps Enthusiast`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const content = `Browse blog posts tagged with ${originalTag} on Md Jahid Hasan's blog. Discover insights on DevOps, WordPress, Linux, and web development.`;
      if (metaDescription) {
        metaDescription.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = content;
        document.head.appendChild(meta);
      }
    } else {
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
    }
  }, [tag, originalTag]);

  return (
    <>
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden pt-[100px] pb-[60px] md:pt-[150px] md:pb-[90px] lg:pt-[200px] lg:pb-[120px]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <Link 
          to="/blog" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/blog');
            // Scroll to top after a small delay to ensure page loads
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-blue/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        
        {/* Tag Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 items-center">
          <button
            onClick={() => navigate('/blog/tag/all')}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-portfolio-blue border text-sm
              ${tag && tag.toLowerCase() === 'all' ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white border-transparent shadow-md' : 'bg-white dark:bg-gray-800 text-portfolio-blue border-portfolio-blue/30 dark:border-gray-600 hover:bg-portfolio-blue/10 dark:hover:bg-gray-700'}`}
          >
            All
          </button>
          {allTags.map((tagItem) => {
            const tagUrl = getTagUrl(tagItem);
            const isActive = originalTag.toLowerCase() === tagItem.toLowerCase();
            return (
              <button
                key={tagItem}
                onClick={() => navigate(tagUrl)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-portfolio-blue border text-sm
                  ${isActive ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white border-transparent shadow-md' : 'bg-white dark:bg-gray-800 text-portfolio-blue border-portfolio-blue/30 dark:border-gray-600 hover:bg-portfolio-blue/10 dark:hover:bg-gray-700'}`}
              >
                {tagItem}
              </button>
            );
          })}
        </div>
        
        {sortedPosts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-lg">No posts found for this tag.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.slice(0, visiblePosts).map((post) => (
              <Card key={post.id} className="h-full group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
                  {post.tags.map((tagItem) => (
                    <button
                      key={tagItem}
                      onClick={() => navigate(getTagUrl(tagItem))}
                      className="px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 border bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-blue/20"
                    >
                      {tagItem}
                    </button>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
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

export default BlogTag;