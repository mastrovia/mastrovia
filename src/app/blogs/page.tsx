import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export default function BlogsPage() {
  const blogs = getBlogPosts();

  // Sort blogs by newest
  blogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <div className="min-h-screen bg-background pt-20 pb-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">Our Journal</h1>
        <p className="text-lg text-muted-foreground font-light mb-16 max-w-2xl">
          Thoughts, perspectives, and strategies on creating modern digital products and the web ecosystem.
        </p>

        <div className="flex flex-col gap-10">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group relative border border-border/50 rounded-2xl p-6 sm:p-10 bg-muted/20 hover:bg-muted/30 transition-all hover:border-primary/30">
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-1 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {new Date(blog.metadata.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-primary transition-colors">
                    {blog.metadata.title}
                  </h2>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    {blog.metadata.summary}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center p-4 rounded-full bg-background border border-border group-hover:scale-110 transition-transform duration-500">
                  <span className="text-primary font-medium tracking-widest text-sm uppercase">Read &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
          {blogs.length === 0 && (
             <p className="text-muted-foreground">Stay tuned! We are writing something amazing.</p>
          )}
        </div>
      </div>
    </div>
  );
}
