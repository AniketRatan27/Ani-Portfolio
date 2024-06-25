import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import TechSkillSection from "@/components/TechSkillSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl text-center font-bold text-white">Aniket Ratan.</h1> */}
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <TechSkillSection />
      <Contact />
      <Footer />
    </main>
  );
}
