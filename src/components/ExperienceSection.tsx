const experiences = [
  {
    role: "Software Engineer",
    company: "Meta",
    location: "NY",
    team: "Storage Node",
    period: "Aug 2024 – Present",
    description: "Building reliable and efficient infrastructure for warm storage fabric at Meta.",
  },
  {
    role: "Software Engineer",
    company: "Microsoft",
    location: "Redmond",
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
    <section className="py-10 px-6" id="experience">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Industry Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <p className="font-medium text-foreground">
                  {exp.role}, <span className="text-primary">{exp.company}</span>
                </p>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">{exp.team} · {exp.location}</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
