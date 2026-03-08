import { motion } from "framer-motion";
import { Award, Star, Trophy, Zap } from "lucide-react";

const achievements = [
  {
    icon: Zap,
    text: "Unitary Fund grant for Interlin-q, an open-source quantum interconnect simulator",
    year: "2021",
  },
  {
    icon: Star,
    text: "Selected for USSEQIP at Institute for Quantum Computing, University of Waterloo (1 of 30 worldwide)",
    year: "2020",
  },
  {
    icon: Award,
    text: "Google Women in Techmakers Scholarship, Asia-Pacific — retreat at Singapore Google office",
    year: "2018",
  },
  {
    icon: Trophy,
    text: "Heritage Excellence Award, Indian Institute of Technology Roorkee",
    year: "2018",
  },
  {
    icon: Star,
    text: "Top 150 worldwide in Google Code Jam I/O for Women — scholarship to Google I/O conference",
    year: "2018",
  },
  {
    icon: Trophy,
    text: "AIR 56 in ACM ICPC Chennai Regionals, qualified for Amritapuri Onsite Regionals",
    year: "2017",
  },
];

const AchievementsSection = () => {
  return (
    <section className="relative py-16 px-6" id="achievements">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(170_70%_45%_/_0.05)_0%,_transparent_60%)]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground">
            Achievements
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {a.text}
                  </p>
                  <span className="font-mono text-xs text-muted-foreground mt-1 inline-block">
                    {a.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
