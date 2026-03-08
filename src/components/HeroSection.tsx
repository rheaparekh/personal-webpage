import { ExternalLink, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3 text-foreground">
          Rhea Parekh
        </h1>
        <p className="text-base text-muted-foreground mb-1">
          MS Computer Science, Columbia University
        </p>
        <p className="text-base text-muted-foreground mb-6">
          Software Engineer @ Meta
        </p>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6 text-sm">
          <a href="#education" className="text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors">education</a>
          <a href="#research" className="text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors">research</a>
          <a href="#publications" className="text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors">publications</a>
          <a href="#experience" className="text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors">experience</a>
          <a href="#achievements" className="text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors">achievements</a>
          <span className="flex items-center gap-3 ml-auto">
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="Google Scholar">
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="LinkedIn">
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="mailto:rheaparekh12@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
          </span>
        </nav>

        <p className="text-foreground leading-relaxed">
          I am a Master's student in Computer Science at{" "}
          <a href="https://www.columbia.edu" target="_blank" rel="noopener noreferrer" className="text-link">Columbia University</a>{" "}
          and a Software Engineer at{" "}
          <a href="https://meta.com" target="_blank" rel="noopener noreferrer" className="text-link">Meta</a>.
          My research interests lie in quantum computing theory and cryptography.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
