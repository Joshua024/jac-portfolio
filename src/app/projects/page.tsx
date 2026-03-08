import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsContent from "@/components/projects/ProjectsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | JAC",
  description:
    "Explore my complete portfolio of design and development work",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsContent />
      </main>
      <Footer />
    </>
  );
}
