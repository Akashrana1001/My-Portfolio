import "../styles/Certificates.css"

const Certificates = () => {
  const certificates = [
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "Nov 20, 2023",
      description: "Completed 300+ hours of coursework on HTML, CSS, Flexbox, and responsive design principles.",
      link: "https://freecodecamp.org/certification/akashrana10/responsive-web-design",
    },
    {
      title: "Code-A-Haunt Hackathon Participation",
      issuer: "Code",
      date: "Feb 29 – Mar 1, 2024",
      description: "Completed a 48 hour hackathon with HTML, CSS, JSP, and PHP to assist hospitals",
    },
    {
      title: "Code-A-Haunt 2.0 Hackathon Participation",
      issuer: "freeCodeCamp",
      date: "Feb 13–15, 2025",
      description: "An application built with the MERN Stack was completed within 48 hours of the 48-hour hackathon.",
    },
  ]

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-header">
                <h3>{cert.title}</h3>
                <span className="date">{cert.date}</span>
              </div>
              <div className="issuer">
                <span>{cert.issuer}</span>
              </div>
              <p className="description">{cert.description}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  <span className="icon">🔗</span>
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
