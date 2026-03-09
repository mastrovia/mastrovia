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

  return {
    title: `${caseStudy.title} - Case Study | Mastrovia`,
    description: caseStudy.description,
    keywords: `${caseStudy.title}, ${caseStudy.tags.join(
      ", "
    )}, case study, web development`,
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
