import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import WhatIsSection from "@/components/service-detail/WhatIsSection";
import DeliverablesSection from "@/components/service-detail/DeliverablesSection";
import ProcessSection from "@/components/service-detail/ProcessSection";
import ToolsSection from "@/components/service-detail/ToolsSection";
import ServiceTestimonial from "@/components/service-detail/ServiceTestimonial";
import PricingSection from "@/components/service-detail/PricingSection";
import ServiceCTA from "@/components/service-detail/ServiceCTA";
import ServiceDetailFAQ from "@/components/service-detail/ServiceDetailFAQ";
import ConsultationForm from "@/components/service-detail/ConsultationForm";
import RelatedServices from "@/components/service-detail/RelatedServices";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | JAC`,
    description: service.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetailHero service={service} />
        <WhatIsSection service={service} />
        <DeliverablesSection service={service} />
        <ProcessSection service={service} />
        <ToolsSection service={service} />
        <ServiceTestimonial service={service} />
        <PricingSection service={service} />
        <ServiceCTA service={service} />
        <ServiceDetailFAQ faqs={service.faqs} />
        <ConsultationForm />
        <RelatedServices service={service} />
      </main>
      <Footer />
    </>
  );
}
