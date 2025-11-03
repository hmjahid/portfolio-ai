import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to your blog configuration file
const blogConfigPath = join(__dirname, 'src', 'config', 'blog.ts');

// Read and process the blog configuration file
async function processBlogConfig() {
    try {
        const data = await readFile(blogConfigPath, 'utf8');

    // This regex finds all content between backticks in the blog posts
    const contentRegex = /content: `([\s\S]*?)`/g;
    let match;
    let newContent = data;
    
    // Find all content blocks in the blog posts
    while ((match = contentRegex.exec(data)) !== null) {
        const originalContent = match[1];
        const lines = originalContent.split('\n');
        let h1Count = 0;
        let newLines = [];
        
        // Process each line to remove duplicate H1 tags
        for (const line of lines) {
            if (line.trim().startsWith('# ') && !line.trim().startsWith('##')) {
                h1Count++;
                // Keep the first H1, remove subsequent ones
                if (h1Count <= 1) {
                    newLines.push(line);
                }
            } else {
                newLines.push(line);
            }
        }
        
        // If we found and removed duplicate H1s, update the content
        if (h1Count > 1) {
            const newContentBlock = newLines.join('\n');
            newContent = newContent.replace(match[0], `content: \`${newContentBlock}\``);
        }
    }
    
        // Write the updated content back to the file
        await writeFile(blogConfigPath, newContent, 'utf8');
        console.log('Successfully removed duplicate H1 tags from blog posts');
    } catch (err) {
        console.error('Error processing blog config:', err);
    }
}

// Run the function
processBlogConfig();
