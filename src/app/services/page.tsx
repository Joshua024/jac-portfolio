import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import OurProcess from "@/components/services/OurProcess";
import ClientSuccessStories from "@/components/services/ClientSuccessStories";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ReadyToStart from "@/components/services/ReadyToStart";
import { getFAQs } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | JAC - Creative Developer & Designer",
  description: "Comprehensive digital solutions tailored to help your business thrive in the digital landscape.",
};

export default async function ServicesPage() {
  const dbFaqs = await getFAQs("services");
  const faqs = dbFaqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <WhatWeOffer />
        <OurProcess />
        <ClientSuccessStories />
        <ServicesFAQ faqs={faqs} />
        <ReadyToStart />
      </main>
      <Footer />
    </>
  );
}
