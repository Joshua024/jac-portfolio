import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LatestArticles from "@/components/LatestArticles";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getTestimonials } from "@/lib/data";

export default async function Home() {
  const dbTestimonials = await getTestimonials("home");
  const testimonials = dbTestimonials.map((t) => ({
    id: t.id,
    name: t.name,
    role: t.role ? `${t.role}${t.company ? `, ${t.company}` : ""}` : "",
    content: t.content,
    rating: t.rating,
  }));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <Testimonials testimonials={testimonials} />
        <LatestArticles />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
