import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LatestArticles from "@/components/LatestArticles";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <Testimonials />
        <LatestArticles />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
