import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm"; // For tables, markdown extensions
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';
import rehypeHighlight from "rehype-highlight";

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
    rehypePlugins: [rehypeHighlight],
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8 pb-24 sm:pt-12 sm:pb-32 max-w-3xl">
        <Link 
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
        
        <header className="mb-16 border-b border-border/50 pb-16 text-left">
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
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12">
              {post.metadata.summary}
            </p>
          )}

          {post.metadata.image && (
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden border border-border/50 mt-12 bg-muted/20">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <article className="max-w-none w-full">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}
