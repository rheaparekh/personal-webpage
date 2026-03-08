import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const publications = [
  {
    title: "Quantum certification and benchmarking",
    authors: "J. Eisert, D. Hangleiter, N. Walk, I. Roth, D. Markham, R. Parekh, U. Chabaud et al.",
    venue: "Nature Reviews Physics 2(7), 382–390",
    year: "2020",
    citations: "536",
  },
  {
    title: "Quantum Algorithms and Simulation for Parallel and Distributed Quantum Computing",
    authors: "R. Parekh, A. Ricciardi, A. Darwish, S. DiAdamo",
    venue: "2021 IEEE/ACM Second International Workshop on Quantum Computing Software (QCS)",
    year: "2021",
    citations: "65",
  },
  {
    title: "Generalized Boolean functions and quantum circuits on IBM-Q",
    authors: "S. Gangopadhyay, V.S. Poonia, D. Aggarwal, R. Parekh",
    venue: "2019 10th International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    year: "2019",
    citations: "5",
  },
  {
    title: "Path-Oblivious Entanglement Swapping for the Quantum Internet",
    authors: "V. Mutolo, R. Parekh, D. Rubenstein",
    venue: "Proceedings of the 24th ACM Workshop on Hot Topics in Networks, 1–9",
    year: "2025",
  },
];

const PublicationsSection = () => {
  return (
    <section className="relative py-16 px-6" id="publications">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground">
            Publications
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
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="font-mono text-xs text-primary">
                    {pub.year}
                  </span>
                  {pub.citations && (
                    <span className="font-mono text-xs text-accent">
                      Cited by {pub.citations}
                    </span>
                  )}
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
