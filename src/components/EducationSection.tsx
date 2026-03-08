const EducationSection = () => {
  return (
    <section className="py-10 px-6" id="education">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Education</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-foreground">Columbia University</p>
            <p className="text-sm text-muted-foreground">
              Masters in Computer Science · 2024 – Expected 2027
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Indian Institute of Technology, Roorkee</p>
            <p className="text-sm text-muted-foreground">
              B.Tech. Engineering Physics · CGPA: 8.63/10, Ranked 3rd class-wise · 2016 – 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
