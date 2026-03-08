import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const publications = [
  {
    title: "Quantum Algorithms and Simulation for Parallel and Distributed Quantum Computing",
    authors: "R. Parekh et al.",
    venue: "2021 IEEE/ACM Second International Workshop on Quantum Computing Software (QCS)",
    year: "2021",
  },
  {
    title: "Quantum certification and benchmarking",
    authors: "Eisert, J., Hangleiter, D., Walk, N. et al.",
    venue: "Nature Reviews Physics 2, 382–390",
    year: "2020",
  },
  {
    title: "Generalized Boolean functions and quantum circuits",
    authors: "S. Gangopadhyay et al.",
    venue:
      "2019 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    year: "2019",
  },
];

const PublicationsSection = () => {
  return (
    <section className="relative py-32 px-6" id="publications">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-3">
            // Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Published Research
          </h2>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card rounded-xl bg-card p-6 flex gap-4 group hover:bg-card/80 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mt-1">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {pub.authors}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-xs text-primary">
                    {pub.year}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {pub.venue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
