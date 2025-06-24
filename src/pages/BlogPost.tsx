import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/config/blog';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import CallToAction from '@/components/CallToAction';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

// Helper function to format date as "DD MMM YYYY"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'short', 
    year: 'numeric' 
  });
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog | Md Jahid Hasan - Web & WordPress Developer | DevOps Enthusiast`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const content = post.excerpt || 'Read this blog post by Md Jahid Hasan - Web & WordPress Developer and DevOps Enthusiast.';
      if (metaDescription) {
        metaDescription.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = content;
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
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
            className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-blue/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden pt-[100px] pb-[60px] md:pt-[150px] md:pb-[90px] lg:pt-[200px] lg:pb-[120px]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-full lg:max-w-[80%] mx-auto">
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

              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-8">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => navigate(`/blog/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`)}
                    className="px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 border bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-blue/20"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="prose prose-lg max-w-none prose-img:rounded-xl prose-img:shadow-lg dark:prose-invert">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Share Buttons */}
              <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
                <span className="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2 text-[18px] md:text-[20px]">
                  Feel Free to Share:
                </span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                    className="rounded-full p-2 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-110"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(post.title)}`, '_blank')}
                    className="rounded-full p-2 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-110"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                    className="rounded-full p-2 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-110"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {navigator.clipboard.writeText(window.location.href)}}
                    className="rounded-full p-2 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-110"
                    aria-label="Copy Link"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Latest Posts Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6"
          >
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2 md:mb-1">
                Latest Posts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Explore more insights and articles from our blog
              </p>
            </div>
            {/* Desktop View All Button in Header Row */}
            <div className="hidden md:flex justify-end">
              <Link
                to="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  sessionStorage.setItem('scrollToTop', 'true');
                  navigate('/blog');
                }}
                className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:from-portfolio-blue/90 hover:to-blue-600/90 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 text-center"
              >
                <span className="w-full text-center">View All</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter(otherPost => otherPost.slug !== post.slug)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((otherPost) => (
                <motion.div
                  key={otherPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <Link to={`/blog/${otherPost.slug}`}>
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={otherPost.coverImage} 
                          alt={otherPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                      </div>
                    </Link>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(otherPost.date)}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{otherPost.readTime}</span>
                      </div>
                      <Link to={`/blog/${otherPost.slug}`}>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-portfolio-blue transition-colors">
                          {otherPost.title}
                        </h3>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{otherPost.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                      {otherPost.tags.map((tag) => (
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

          {/* Responsive View All Button at Bottom */}
          <div className="flex md:hidden justify-center mt-10">
            <Link
              to="/blog"
              onClick={(e) => {
                e.preventDefault();
                sessionStorage.setItem('scrollToTop', 'true');
                navigate('/blog');
              }}
              className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:from-portfolio-blue/90 hover:to-blue-600/90 text-white h-10 px-4 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 text-center"
            >
              <span className="text-center">View All</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default BlogPost; 