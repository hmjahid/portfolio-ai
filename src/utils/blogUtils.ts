import { blogPosts } from '@/config/blog';

// Generate a URL-friendly slug from a string
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Generate a URL-friendly tag from a string
export const generateTagUrl = (tag: string): string => {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Decode tag URL back to original tag name for filtering
export const decodeTagUrl = (tagUrl: string): string => {
  // This function helps match URL-encoded tags back to their original form
  const allTags = getAllTags();
  const decodedTag = allTags.find(tag => generateTagUrl(tag) === tagUrl);
  return decodedTag || tagUrl;
};

// Check if a slug exists in blog posts
export const isValidBlogSlug = (slug: string): boolean => {
  return blogPosts.some(post => post.slug === slug);
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

// Get all unique tags from blog posts
export const getAllTags = (): string[] => {
  return Array.from(new Set(blogPosts.flatMap(post => post.tags)));
};

// Check if a tag exists
export const isValidTag = (tag: string): boolean => {
  const allTags = getAllTags();
  return allTags.some(t => t.toLowerCase() === tag.toLowerCase());
};

// Parse URL path to determine route type
export const parseBlogRoute = (pathname: string) => {
  const cleanPath = pathname.replace(/\/$/, '');
  
  if (cleanPath === '/blog') {
    return { type: 'listing' as const };
  }
  
  if (cleanPath.startsWith('/blog/tag/')) {
    const tag = cleanPath.replace('/blog/tag/', '').split('/')[0];
    return { type: 'tag' as const, tag };
  }
  
  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '').split('/')[0];
    return { type: 'post' as const, slug };
  }
  
  return { type: 'listing' as const };
};

// Generate blog post URL
export const getBlogPostUrl = (slug: string): string => {
  return `/blog/${slug}`;
};

// Generate tag URL
export const getTagUrl = (tag: string): string => {
  const tagUrl = generateTagUrl(tag);
  return `/blog/tag/${tagUrl}`;
}; 