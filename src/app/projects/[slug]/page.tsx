import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailHero from "@/components/project-detail/ProjectDetailHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ChallengesSolutions from "@/components/project-detail/ChallengesSolutions";
import DevelopmentProcess from "@/components/project-detail/DevelopmentProcess";
import TechImplementation from "@/components/project-detail/TechImplementation";
import ProjectGallery from "@/components/project-detail/ProjectGallery";
import ResultsImpact from "@/components/project-detail/ResultsImpact";
import ProjectTestimonial from "@/components/project-detail/ProjectTestimonial";
import RelatedProjects from "@/components/project-detail/RelatedProjects";
import ProjectCTA from "@/components/project-detail/ProjectCTA";
import { getProjectDetail } from "@/data/projectDetails";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | JAC`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetailHero project={project} />
        <ProjectOverview project={project} />
        <ChallengesSolutions project={project} />
        <DevelopmentProcess project={project} />
        <TechImplementation project={project} />
        <ProjectGallery project={project} />
        <ResultsImpact project={project} />
        <ProjectTestimonial project={project} />
        <RelatedProjects project={project} />
        <ProjectCTA project={project} />
      </main>
      <Footer />
    </>
  );
}
