import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LatestArticles from "@/components/LatestArticles";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getTestimonials, getTrustedCompanies, getFeaturedProjects } from "@/lib/data";

export default async function Home() {
  const [dbTestimonials, dbCompanies, dbProjects] = await Promise.all([
    getTestimonials("home"),
    getTrustedCompanies(),
    getFeaturedProjects(6),
  ]);

  const testimonials = dbTestimonials.map((t) => ({
    id: t.id,
    name: t.name,
    role: t.role ? `${t.role}${t.company ? `, ${t.company}` : ""}` : "",
    content: t.content,
    rating: t.rating,
  }));

  const companies = dbCompanies.map((c) => ({
    id: c.id,
    name: c.name,
    icon: c.icon,
  }));

  const projects = dbProjects.map((p) => {
    let tags: string[] = [];
    if (p.tags) {
      try {
        const parsed = JSON.parse(p.tags);
        tags = Array.isArray(parsed) ? parsed : [p.tags];
      } catch {
        tags = p.tags.split(",").map((t: string) => t.trim());
      }
    }
    return {
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category,
      description: p.description,
      image: p.image || "/projects/project1.jpg",
      tags,
    };
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy companies={companies} />
        <FeaturedProjects projects={projects.length > 0 ? projects : undefined} />
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
