import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import CaseStudyClient from "./CaseStudyClient";
import { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    id: cs.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === resolvedParams.id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  const ogImage = caseStudy.image || "/branding/mastrovia-banner.png";

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    keywords: `${caseStudy.title}, ${caseStudy.tags.join(
      ", "
    )}, case study, web development`,
    openGraph: {
      title: `${caseStudy.title} | Mastrovia Case Study`,
      description: caseStudy.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Mastrovia Case Study`,
      description: caseStudy.description,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === resolvedParams.id);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyClient caseStudy={caseStudy} />;
}
