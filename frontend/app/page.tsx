import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Segments from "@/components/Segments";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import Projects from "@/components/Projects";
import BlogTeaser from "@/components/BlogTeaser";
import About from "@/components/About";
import TechExpertise from "@/components/TechExpertise";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Problem />
        <Segments />
        <Services />
        <HowIWork />
        <Projects />
        <BlogTeaser />
        <About />
        <TechExpertise />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
