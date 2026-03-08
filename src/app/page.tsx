import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LatestArticles from "@/components/LatestArticles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getTestimonials, getTrustedCompanies, getFeaturedProjects, getServices, getArticles, getSiteSettings, getPageContent } from "@/lib/data";

export default async function Home() {
  const [dbTestimonials, dbCompanies, dbProjects, dbServices, dbArticles, settings, heroContent] = await Promise.all([
    getTestimonials("home"),
    getTrustedCompanies(),
    getFeaturedProjects(6),
    getServices(),
    getArticles(),
    getSiteSettings(),
    getPageContent("home", "hero"),
  ]);

  const hero = Object.fromEntries(heroContent.map((c) => [c.key, c.value]));

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

  const services = dbServices.map((s) => {
    let pricing = { packageName: "", price: "" };
    let features: string[] = [];
    try { pricing = JSON.parse(s.pricing); } catch {}
    try { features = JSON.parse(s.highlights); } catch {}
    return {
      id: s.id,
      slug: s.slug,
      title: s.title,
      icon: s.icon,
      description: s.description,
      packageName: pricing.packageName || "Standard",
      price: pricing.price || "",
      features: Array.isArray(features) ? features : [],
    };
  });

  const articles = dbArticles.slice(0, 4).map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    date: a.date,
    readTime: a.readTime,
    image: a.image,
  }));

  return (
    <>
      <Navbar />
      <main>
        <Hero
          badge={hero.badge || "Available for Freelance Work"}
          heading={hero.title || "Creative Developer & Digital Storyteller"}
          subtext={hero.subtitle || "I craft beautiful, functional digital experiences that help businesses grow."}
          tags={(() => {
            try {
              const parsed = JSON.parse(hero.tags || "[]");
              return Array.isArray(parsed) ? parsed : [];
            } catch { return []; }
          })()}
          cta1Text={hero.cta1Text || "View My Work"}
          cta1Link={hero.cta1Link || "/projects"}
          cta2Text={hero.cta2Text || "Get in Touch"}
          cta2Link={hero.cta2Link || "/contact"}
          image={hero.image || ""}
          stat1={hero.stat1 || ""}
          stat1Label={hero.stat1Label || ""}
          stat2={hero.stat2 || ""}
          stat2Label={hero.stat2Label || ""}
          stat3={hero.stat3 || ""}
          stat3Label={hero.stat3Label || ""}
        />
        <TrustedBy companies={companies} />
        <FeaturedProjects projects={projects.length > 0 ? projects : undefined} />
        <Services services={services.length > 0 ? services : undefined} />
        <Testimonials testimonials={testimonials} />
        <LatestArticles
          articles={articles.length > 0 ? articles : undefined}
          newsletterHeading={settings?.newsletterHeading || undefined}
          newsletterText={settings?.newsletterText || undefined}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
