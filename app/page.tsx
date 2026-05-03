import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <ScrollReveal />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
