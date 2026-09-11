import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Currently } from "@/components/Currently";
import { AttackSurface } from "@/components/AttackSurface";
import { Skills } from "@/components/Skills";
import { SecurityMethodology } from "@/components/SecurityMethodology";
import { VulnerabilityHunt } from "@/components/VulnerabilityHunt";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { BSidesSpotlight } from "@/components/BSidesSpotlight";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SecurityDossier } from "@/components/ui/SecurityDossier";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CommandPalette />
      <SecurityDossier />
      <main className="flex-1">
        <Hero />
        <About />
        <Currently />
        <AttackSurface />
        <Skills />
        <SecurityMethodology />
        <VulnerabilityHunt />
        <Projects />
        <Research />
        <BSidesSpotlight />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
