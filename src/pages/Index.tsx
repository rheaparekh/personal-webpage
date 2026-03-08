import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative">
        <HeroSection />
        <EducationSection />
        <ResearchSection />
        <PublicationsSection />
        <ExperienceSection />
        <AchievementsSection />
        <footer className="py-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rhea Parekh
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
