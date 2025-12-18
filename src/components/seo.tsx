import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: FC<SEOProps> = ({
  title = "Mastrovia | Premium Web Development Agency",
  description = "Mastrovia is a high-end web development agency specializing in performant, scalable, and visually stunning digital products.",
  keywords = "web development, agency, react, nextjs, typescript, design, mastrovia",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
