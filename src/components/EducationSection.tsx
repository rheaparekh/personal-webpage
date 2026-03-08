import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Columbia University",
    degree: "Masters in Computer Science",
    period: "2024 – Expected 2027",
    location: "New York",
  },
  {
    school: "Indian Institute of Technology, Roorkee",
    degree: "B.Tech. Engineering Physics",
    period: "2016 – 2020",
    location: "Roorkee, India",
    note: "CGPA: 8.63/10, Ranked 3rd class-wise",
  },
];

const EducationSection = () => {
  return (
    <section className="relative py-16 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-secondary mb-3">
            // Foundation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Education</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card rounded-xl bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.school}</h3>
                  <p className="text-secondary text-sm">{edu.degree}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    {edu.period} · {edu.location}
                  </p>
                  {edu.note && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {edu.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
