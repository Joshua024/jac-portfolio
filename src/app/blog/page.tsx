import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "@/components/blog/BlogContent";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | JAC",
  description:
    "Insights, tutorials, and thoughts on design, development, and digital strategy.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogContent />
        <BlogNewsletter />
      </main>
      <Footer />
    </>
  );
}
