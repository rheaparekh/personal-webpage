import StarField from "@/components/StarField";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ResearchSection />
        <PublicationsSection />
        <AchievementsSection />
        <EducationSection />
        <footer className="py-12 text-center border-t border-border/30">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rhea Parekh · Built with ✦
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
