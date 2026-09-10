import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { BSidesSpotlight } from "@/components/BSidesSpotlight";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <BSidesSpotlight />
        <Projects />
        <Research />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
