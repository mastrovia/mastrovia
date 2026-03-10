import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/mdx';
import { caseStudies } from '@/data/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mastrovia.com';

  // Static routes
  const routes = [
    '',
    '/contact',
    '/cost-estimate',
    '/blogs',
    '/cal-demo'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Blog routes
  const posts = getBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Case Study routes
  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-study/${cs.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes, ...caseStudyRoutes];
}
