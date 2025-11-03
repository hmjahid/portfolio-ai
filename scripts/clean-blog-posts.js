import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to your blog configuration file
const blogConfigPath = join(__dirname, '../src/config/blog.ts');

// Read and process the blog configuration file
async function cleanBlogPosts() {
    try {
        let data = await readFile(blogConfigPath, 'utf8');
        
        // Find all blog post content blocks
        const contentRegex = /(content: `)([\s\S]*?)(`,\s*coverImage)/g;
        
        // Process each content block
        data = data.replace(contentRegex, (match, prefix, content, suffix) => {
            // Remove any H1 tags from the content
            const cleanedContent = content.replace(/^#\s+.*$/gm, (h1Match) => {
                console.log(`Removed H1: ${h1Match}`);
                return ''; // Remove the H1 line
            }).trim();
            
            return `${prefix}${cleanedContent}${suffix}`;
        });
        
        // Write the cleaned content back to the file
        await writeFile(blogConfigPath, data, 'utf8');
        console.log('✅ Successfully cleaned all blog posts');
        
    } catch (err) {
        console.error('❌ Error processing blog posts:', err);
    }
}

// Add a pre-commit hook to automatically clean blog posts
async function setupPreCommitHook() {
    try {
        const huskyPath = join(__dirname, '../.husky/pre-commit');
        const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Clean blog posts
node scripts/clean-blog-posts.js

git add src/config/blog.ts
`;
        
        await writeFile(huskyPath, hookContent, { mode: 0o755 });
        console.log('✅ Pre-commit hook added');
    } catch (err) {
        console.error('❌ Error setting up pre-commit hook:', err);
    }
}

// Run the cleanup
cleanBlogPosts().then(() => {
    console.log('🎉 Blog post cleaning completed!');    
});

// Uncomment to set up the pre-commit hook (only needs to be done once)
// setupPreCommitHook();
