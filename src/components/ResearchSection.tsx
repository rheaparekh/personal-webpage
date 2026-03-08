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
    <section className="py-10 px-6" id="research">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Research Experience</h2>
        <div className="space-y-6">
          {research.map((r, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <p className="font-medium text-foreground">{r.role}</p>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{r.period}</span>
              </div>
              <p className="text-sm text-primary">{r.org}</p>
              {r.advisor && (
                <p className="text-xs text-muted-foreground italic">{r.advisor}</p>
              )}
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
