import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm"; // For tables, markdown extensions
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

import { mdxComponents } from "@/components/mdx-components";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Evaluate MDX with local React 19 runtime
  const { default: MDXContent } = await evaluate(post.content, {
    ...(runtime as any),
    remarkPlugins: [remarkGfm],
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-3xl">
        <Link 
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
        
        <header className="mb-16 border-b border-border/50 pb-16">
          <time className="text-sm font-bold uppercase tracking-widest text-primary mb-6 block">
            {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
               month: 'long',
               day: 'numeric',
               year: 'numeric'
            })}
          </time>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
            {post.metadata.title}
          </h1>
          {post.metadata.summary && (
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {post.metadata.summary}
            </p>
          )}
        </header>

        <article className="max-w-none w-full">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}
