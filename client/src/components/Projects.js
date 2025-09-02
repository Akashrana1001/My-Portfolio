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
      title: "AI Virtual Assistant (MERN Stack)",
      year: "2025",
      technologies: "React.js, Vite, Node.js, Express.js, MongoDB Atlas, JWT, Gemini API",
      description: [
        "Built a full-stack AI virtual assistant with voice recognition using Web Speech API and Gemini AI integration.",
        "Implemented secure JWT authentication with bcrypt.js for user management and session handling.",
        "Features real-time voice interaction, configurable AI responses, and cloud deployment options.",
      ],
      github: "https://github.com/Akashrana1001/ai-virtual-assistant",
    },
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
      title: "Algorithm Visualizer",
      year: "2025",
      technologies: "React.js, TypeScript, Vite, Tailwind CSS, shadcn-ui",
      description: [
        "Interactive algorithm visualization tool built with React and TypeScript for educational purposes.",
        "Features visual representations of sorting algorithms, search algorithms, and data structures.",
        "Modern UI with Tailwind CSS and shadcn-ui components, deployed on Lovable platform.",
      ],
      github: "https://github.com/Akashrana1001/algorithm-visualizer",
    },
    {
      title: "Code Editor with AI Assistant",
      year: "2024",
      technologies: "React.js, Vite, Node.js, Express.js, Gemini API, Prism.js",
      description: [
        "Online code editor with integrated AI assistance powered by Google Gemini API.",
        "Features syntax highlighting with Prism.js, markdown support, and real-time code suggestions.",
        "Built with react-simple-code-editor for seamless coding experience and axios for API integration.",
      ],
      github: "https://github.com/Akashrana1001/ai-code-editor",
    },
    {
      title: "Textify: Real-Time Chat App",
      year: "2024",
      technologies: "React.js, Node.js, Socket.IO, MongoDB, JWT",
      description: [
        "Real-time messaging application with instant communication using Socket.IO websockets.",
        "Secure user authentication system with ability to create and join multiple chat rooms.",
        "Fully responsive design optimized for all devices with modern chat interface.",
      ],
      github: "https://github.com/Akashrana1001/textify-chat",
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
    {
      title: "ATM Machine Simulator",
      year: "2024",
      technologies: "Java, Console Application, OOP",
      description: [
        "Real-world ATM machine simulation built in Java with console-based interface.",
        "Features account management, balance inquiry, cash withdrawal, deposit, and transaction history.",
        "Implements object-oriented design patterns and secure PIN validation system.",
      ],
      github: "https://github.com/Akashrana1001/java-atm-simulator",
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