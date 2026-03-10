import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes, BlockquoteHTMLAttributes, ReactNode, Children, isValidElement } from "react";
import { CopyButton } from "@/components/ui/copy-button";
import Balancer from "react-wrap-balancer";

export const mdxComponents = {
  h1: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-16 mb-8" {...props}>
      <Balancer>{children}</Balancer>
    </h1>
  ),
  h2: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-14 mb-6" {...props}>
      <Balancer>{children}</Balancer>
    </h2>
  ),
  h3: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-10 mb-4" {...props}>
      <Balancer>{children}</Balancer>
    </h3>
  ),
  p: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p className="mb-8 text-muted-foreground" {...props}>
      <Balancer>{children}</Balancer>
    </p>
  ),
  ul: (props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <ul className="list-none space-y-4 mb-8 text-muted-foreground" {...props} />
  ),
  ol: (props: DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-4 mb-8 text-muted-foreground" {...props} />
  ),
  li: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
    <li className="flex items-start gap-3" {...props}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 flex-shrink-0" />
      <span className="flex-1"><Balancer>{children}</Balancer></span>
    </li>
  ),
  strong: (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <strong className="text-foreground" {...props} />
  ),
  a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <a
      className="text-foreground hover:text-primary underline underline-offset-4 decoration-border/50 hover:decoration-primary transition-all"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  blockquote: ({ children, ...props }: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-primary pl-6 my-10 italic text-xl md:text-2xl font-light text-muted-foreground tracking-tight" {...props}>
      <Balancer>{children}</Balancer>
    </blockquote>
  ),
  code: (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border border-border/50 text-foreground" {...props} />
  ),
  pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
    const { children, ...rest } = props;
    // Helper to extract text from nested children (especially from rehype-pretty-code nodes)
    const getText = (node: any): string => {
      if (!node) return '';
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return node.toString();
      if (Array.isArray(node)) return node.map(getText).join('');
      if (isValidElement(node)) return getText((node.props as any).children);
      return '';
    };

    const textContent = getText(children);

    return (
      <div className="relative group my-10 textured-surface">
        <CopyButton text={textContent} />
        <pre
          className="bg-muted/30 p-6 rounded-2xl overflow-x-auto text-sm font-mono shadow-none border border-border/50 leading-relaxed"
          {...rest}
        >
          {children}
        </pre>
      </div>
    );
  },
};
