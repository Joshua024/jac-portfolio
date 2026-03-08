import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import OurProcess from "@/components/services/OurProcess";
import ClientSuccessStories from "@/components/services/ClientSuccessStories";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ReadyToStart from "@/components/services/ReadyToStart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | JAC - Creative Developer & Designer",
  description: "Comprehensive digital solutions tailored to help your business thrive in the digital landscape.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <WhatWeOffer />
        <OurProcess />
        <ClientSuccessStories />
        <ServicesFAQ />
        <ReadyToStart />
      </main>
      <Footer />
    </>
  );
}
