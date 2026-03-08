import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_40%_55%_/_0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Software Engineer · Researcher
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-foreground"
        >
          Rhea Parekh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed"
        >
          MS Computer Science @ Columbia University · Software Engineer @ Meta
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-muted-foreground max-w-lg mx-auto mb-10"
        >
          Interested in quantum computing theory and cryptography.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-muted border border-border text-foreground hover:border-primary/30 transition-all duration-300 font-mono text-xs"
          >
            Google Scholar
            <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-muted border border-border text-foreground hover:border-primary/30 transition-all duration-300 font-mono text-xs"
          >
            LinkedIn
            <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:rheaparekh12@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-muted border border-border text-foreground hover:border-primary/30 transition-all duration-300 font-mono text-xs"
          >
            Contact
            <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
