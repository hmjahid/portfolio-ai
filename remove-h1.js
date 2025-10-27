import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogConfigPath = join(__dirname, 'src', 'config', 'blog.ts');

// Read the blog configuration file
let content = readFileSync(blogConfigPath, 'utf8');

// Remove H1 headings from content fields
const updatedContent = content.replace(/content: `# [^\n]+\n\n/g, 'content: `');

// Write the updated content back to the file
writeFileSync(blogConfigPath, updatedContent, 'utf8');

console.log('Successfully removed H1 headings from all blog posts!');
