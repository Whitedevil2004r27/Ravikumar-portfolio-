
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="cyber-grid fixed inset-0 opacity-30 pointer-events-none" />
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
