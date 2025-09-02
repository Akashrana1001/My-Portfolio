import "../styles/Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C/C++", "SQL", "JavaScript", "TypeScript", "PHP", "Python", "HTML/CSS"],
    },
    {
      title: "Frameworks/Libraries",
      skills: ["React", "Node.js", "Express", "Bootstrap", "Material-UI", "Tailwind CSS", "FastAPI", "WordPress", "Socket.IO"],
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Oracle Cloud Infrastructure", "Render", "Vercel", "Heroku", "MongoDB Atlas"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Visual Studio", "PyCharm", "Vite", "JWT"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["ChatGPT", "Google Gemini API", "Lovable", "GitHub Copilot", "Claude", "Web Speech API"],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills