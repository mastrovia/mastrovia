import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes, BlockquoteHTMLAttributes } from "react";

export const mdxComponents = {
  h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mt-16 mb-8 text-foreground" {...props} />
  ),
  h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mt-14 mb-6 text-foreground" {...props} />
  ),
  h3: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mt-10 mb-4 text-foreground" {...props} />
  ),
  p: (props: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p className="text-lg md:text-xl leading-relaxed tracking-normal font-light mb-8 text-muted-foreground" {...props} />
  ),
  ul: (props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <ul className="list-none space-y-4 mb-8 text-lg md:text-xl tracking-normal font-light text-muted-foreground" {...props} />
  ),
  ol: (props: DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-4 mb-8 text-lg md:text-xl tracking-normal font-light text-muted-foreground" {...props} />
  ),
  li: (props: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
    <li className="flex items-start gap-3" {...props}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 flex-shrink-0" />
      <span className="flex-1">{props.children}</span>
    </li>
  ),
  strong: (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <a 
      className="font-medium text-foreground hover:text-primary underline underline-offset-4 decoration-border/50 hover:decoration-primary transition-all" 
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  blockquote: (props: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-primary pl-6 my-10 italic text-xl md:text-2xl font-light text-muted-foreground tracking-tight" {...props} />
  ),
  code: (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <code className="bg-muted/50 px-2 py-1 rounded-md text-sm font-mono border border-border/50 text-foreground" {...props} />
  ),
  pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre className="bg-[#1C1C1C] p-6 rounded-2xl overflow-x-auto text-sm font-mono my-10 shadow-none border border-border/20 text-[#D4D4D4] leading-relaxed" {...props} />
  ),
};
