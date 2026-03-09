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

// Pre-configure components to match the branding and layout properly
const components = {
  h1: (props: any) => <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mt-10 mb-5" {...props} />,
  h3: (props: any) => <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed tracking-normal font-light mb-6 text-muted-foreground" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-3 mb-6 text-lg tracking-normal font-light text-muted-foreground" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-3 mb-6 text-lg tracking-normal font-light text-muted-foreground" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
  a: (props: any) => (
    <a 
      className="font-medium text-foreground hover:text-primary underline underline-offset-4 decoration-border hover:decoration-primary transition-all" 
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl text-foreground bg-primary/5 py-4 pr-4 rounded-r-lg" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-muted px-2 py-1 rounded-md text-sm font-mono border border-border/50" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[#1C1C1C] p-6 rounded-xl overflow-x-auto text-sm font-mono my-8 shadow-sm border border-border/20 text-[#D4D4D4] leading-relaxed" {...props} />
  ),
};

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

        <article className="prose prose-lg dark:prose-invert max-w-none font-sans mt-0">
          <MDXContent components={components} />
        </article>
      </div>
    </div>
  );
}
