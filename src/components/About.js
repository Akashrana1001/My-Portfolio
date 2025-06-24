import "../styles/About.css"
import InteractiveGridPattern from "./ui/interactive-grid-pattern"
import AnimatedBackground from "./ui/animated-background"
import BoxReveal from "./ui/box-reveal"

const About = () => {
  return (
    <section id="about" className="about">
      <InteractiveGridPattern className="about-grid-pattern" />
      <AnimatedBackground variant="dots" className="about-animated-bg" />
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <BoxReveal>
              <h1>Hi, I'm Akash Chauhan</h1>
            </BoxReveal>
            <BoxReveal>
              <h2>Full Stack Developer</h2>
            </BoxReveal>
            <BoxReveal>
              <p>
                Passionate Computer Science Engineering student with hands-on experience in full-stack development.
                Currently pursuing B-tech at Lovely Professional University and working as an Undergraduate Full Stack
                Intern at Uplyx Solutions.
              </p>
            </BoxReveal>
            <BoxReveal>
              <p>
                I specialize in building modern web applications using the MERN stack, developing REST APIs, and
                creating scalable solutions for real-world problems.
              </p>
            </BoxReveal>
            <div className="contact-info">
              <BoxReveal>
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <span>8307537566</span>
                </div>
              </BoxReveal>
              <BoxReveal>
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <span>sandeepakash537@gmail.com</span>
                </div>
              </BoxReveal>
              <BoxReveal>
                <div className="contact-item">
                  <span className="icon">💼</span>
                  <a href="https://linkedin.com/in/akashrana100" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
              </BoxReveal>
              <BoxReveal>
                <div className="contact-item">
                  <span className="icon">🔗</span>
                  <a href="https://github.com/akashrana1001" target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                </div>
              </BoxReveal>
            </div>
          </div>
          <div className="about-image">
            <BoxReveal>
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
