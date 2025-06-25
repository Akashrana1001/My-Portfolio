"use client"

import "../styles/Projects.css"
import BoxReveal from "./ui/box-reveal"
import ShimmerButton from "./ui/shimmer-button"
import AnimatedBackground from "./ui/animated-background"
import ProjectBackgroundEffects from "./ui/project-background-effects"
import FloatingShapes from "./ui/floating-shapes"
import GradientOrbs from "./ui/gradient-orbs"
import InteractiveGridPattern from "./ui/interactive-grid-pattern"

const Projects = () => {
  const projects = [
    {
      title: "Multi-Tenant SaaS Admin Dashboard",
      year: "2025",
      technologies: "React, Node.js, Express, MongoDB, TailwindCSS, JWT",
      description: [
        "Built a full-featured multi-tenant SaaS dashboard with role-based access, tenant isolation, and secure login.",
        "Included project and team management, password reset, email sharing",
        "Deployed backend on Render and frontend on Vercel.",
      ],
      github: "https://github.com/Akashrana1001/multi-tenant-saas",
    },
    {
      title: "Doctor Appointment System",
      year: "2024",
      technologies: "PHP, MySQL, Bootstrap, JavaScript",
      description: [
        "Developed a responsive doctor appointment booking system with separate dashboards for admin, doctor, and patient.",
        "Implemented login authentication, appointment booking, and CRUD operations.",
      ],
      github: "https://github.com/Akashrana1001/doctor-appointment-system",
    },
    {
      title: "StudyBuddy++",
      year: "2024 – Present",
      technologies: "C++, CLI, OOP",
      description: [
        "Command-line study planner with features like topic tracking, revision reminders, and flashcard quizzes.",
        "Modular C++ design using object-oriented principles and file separation.",
      ],
      github: "https://github.com/Akashrana1001/StudyBuddy-PlusPlus",
    },
  ]

  return (
    <section id="projects" className="projects">
      <InteractiveGridPattern className="projects-grid-pattern" />
      <GradientOrbs />
      <FloatingShapes count={20} />
      <ProjectBackgroundEffects />
      <AnimatedBackground variant="waves" />
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <BoxReveal key={index}>
              <div className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-tech">
                  <span>{project.technologies}</span>
                </div>
                <ul className="project-description">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <ShimmerButton onClick={() => window.open(project.github, "_blank")} className="github-link-shimmer">
                    <span className="icon">🔗</span>
                    View on GitHub
                  </ShimmerButton>
                </div>
              </div>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
