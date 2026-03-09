import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/mdx";

export default function BlogsPage() {
  const blogs = getBlogPosts();

  // Sort blogs by newest
  blogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <div className="min-h-screen bg-background pt-8 pb-24 sm:pt-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">Our Journal</h1>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          Thoughts, perspectives, and strategies on creating modern digital products and the web ecosystem.
        </p>

        <div className="flex flex-col gap-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group relative border border-border/50 rounded-2xl p-6 sm:p-8 bg-muted/20 hover:bg-muted/30 transition-all hover:border-primary/30">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {blog.metadata.image && (
                  <div className="w-full md:w-1/3 aspect-[16/10] relative overflow-hidden rounded-xl border border-border/50">
                    <Image
                      src={blog.metadata.image}
                      alt={blog.metadata.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex-1 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {new Date(blog.metadata.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h2 className="text-2xl sm:text-3xl tracking-tight group-hover:text-primary transition-colors">
                    {blog.metadata.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {blog.metadata.summary}
                  </p>
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
