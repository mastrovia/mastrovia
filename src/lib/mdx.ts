import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Generic function to read MDX files from a directory
export function getMdxFiles(dir: string) {
  try {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      return [];
    }
    return fs.readdirSync(fullPath).filter((file) => path.extname(file) === '.mdx');
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

// Extract data from a single MDX file
export function getMdxData(dir: string) {
  const mdFiles = getMdxFiles(dir);

  return mdFiles.map((file) => {
    const fullPath = path.join(process.cwd(), dir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: data,
      slug: file.replace(/\.mdx$/, ''),
      content,
    };
  });
}

export function getBlogPosts() {
  return getMdxData('src/content/blogs');
}

export function getBlogPost(slug: string) {
  const fullPath = path.join(process.cwd(), 'src/content/blogs', `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content,
    slug,
  };
}
