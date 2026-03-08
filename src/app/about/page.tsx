import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMe from "@/components/about/AboutMe";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import SkillsAndTools from "@/components/about/SkillsAndTools";
import MyMission from "@/components/about/MyMission";
import EducationCertifications from "@/components/about/EducationCertifications";
import ReadyToWork from "@/components/about/ReadyToWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | JAC - Creative Developer & Designer",
  description: "Learn more about Joshua Adumchimma - Creative Developer & Digital Storyteller",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutMe />
        <ProfessionalJourney />
        <SkillsAndTools />
        <MyMission />
        <EducationCertifications />
        <ReadyToWork />
      </main>
      <Footer />
    </>
  );
}
