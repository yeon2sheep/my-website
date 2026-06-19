function Skills() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "Figma",
  ];

  return (
    <section id="skills" className="content-section">
      <p className="section-tag">SKILLS</p>

      <h2>Things I Work With</h2>

      <p className="section-text">
        Tools and technologies I use to build projects.
      </p>

      <div className="card-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;