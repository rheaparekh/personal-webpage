const achievements = [
  "Unitary Fund grant for Interlin-q, an open-source quantum interconnect simulator (2021)",
  "Selected for USSEQIP at Institute for Quantum Computing, University of Waterloo — 1 of 30 worldwide (2020)",
  "Google Women in Techmakers Scholarship, Asia-Pacific (2018)",
  "Heritage Excellence Award, Indian Institute of Technology Roorkee (2018)",
  "Top 150 worldwide in Google Code Jam I/O for Women — scholarship to Google I/O (2018)",
  "AIR 56 in ACM ICPC Chennai Regionals, qualified for Amritapuri Onsite (2017)",
];

const AchievementsSection = () => {
  return (
    <section className="py-10 px-6" id="achievements">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Achievements</h2>
        <ul className="space-y-2">
          {achievements.map((a, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AchievementsSection;
