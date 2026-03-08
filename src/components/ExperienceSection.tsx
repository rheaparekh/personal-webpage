import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Meta",
    location: "NY, United States",
    team: "Storage Node",
    period: "Aug 2024 – Present",
    description: "Building reliable and efficient infrastructure for warm storage fabric at Meta.",
  },
  {
    role: "Software Engineer",
    company: "Microsoft",
    location: "Redmond, United States",
    team: "Azure Front Door Linux Platform",
    period: "Mar 2021 – Aug 2024",
    description:
      "Developed and maintained the Linux Infrastructure Platform for Azure Front Door CDN. Designed a scalable network configuration delivery pipeline serving 150,000+ tenants.",
  },
  {
    role: "Software Engineer Intern",
    company: "Microsoft IDC",
    location: "India",
    team: "Kaizala, Microsoft Office",
    period: "May 2019 – Jul 2019",
    description:
      "Built distributed and collaborative Kaizala action cards using eventually consistent distributed data structures.",
  },
  {
    role: "GSoC Intern",
    company: "Zulip",
    location: "Remote",
    team: "Open Source",
    period: "May 2018 – Aug 2018",
    description:
      "Created slash commands, interactive message widgets, and refined the ephemeral message system.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative py-32 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            // Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Industry Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px] shadow-[0_0_8px_hsl(265_80%_65%_/_0.5)]" />

                <div className="glow-card rounded-xl bg-card p-6 hover:bg-card/80 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                        <span className="text-muted-foreground font-normal">
                          {" "}· {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-2">
                    Team: {exp.team}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
