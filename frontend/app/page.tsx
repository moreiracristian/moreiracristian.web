import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import Projects from "@/components/Projects";
import About from "@/components/About";
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
        <Services />
        <HowIWork />
        <Projects />
        <About />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
