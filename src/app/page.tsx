import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <hr className="divider" />
        <Publications />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
