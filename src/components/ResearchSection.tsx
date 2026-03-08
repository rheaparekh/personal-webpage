import { motion } from "framer-motion";

const research = [
  {
    role: "Research Assistant",
    org: "Quantum Computing Mentorship Program",
    period: "Oct 2020 – Jan 2021",
    description:
      "Created Interlin-q, an open-source distributed quantum network simulator. Received a Unitary Fund grant.",
  },
  {
    role: "Undergraduate Research Assistant",
    org: "University of Waterloo, Institute of Quantum Computing",
    advisor: "Prof. John Watrous",
    period: "May 2020 – Sep 2020",
    description:
      "Developed an algorithm to compute Nash Equilibrium for low-dimensional random bi-matrix quantum games.",
  },
  {
    role: "Undergraduate Research Assistant",
    org: "LIP6, CNRS, Sorbonne Université, Paris",
    advisor: "Prof. Elham Kashefi",
    period: "Aug 2019 – Dec 2019",
    description:
      "Contributor and maintainer of Quantum Protocol Zoo. Co-created a Certification Library for benchmarking protocols.",
  },
  {
    role: "Summer Research Intern",
    org: "IISc Bangalore, India",
    advisor: "Prof. Anil Kumar",
    period: "Jun 2018 – Jul 2018",
    description:
      "Implemented classical and quantum versions of Prisoner's Dilemma and Ulam's guessing game on IBM quantum computer.",
  },
];

const ResearchSection = () => {
  return (
    <section className="relative py-32 px-6" id="research">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(200_60%_50%_/_0.05)_0%,_transparent_60%)]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-secondary mb-3">
            // Exploration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Research Experience
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {research.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card rounded-xl bg-card p-6 group hover:bg-card/80 transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {r.period}
              </span>
              <h3 className="text-lg font-semibold mt-2 text-foreground">
                {r.role}
              </h3>
              <p className="text-secondary text-sm font-medium">{r.org}</p>
              {r.advisor && (
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  {r.advisor}
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
