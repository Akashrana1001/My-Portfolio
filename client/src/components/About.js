import { useState, useEffect } from "react"
import "../styles/About.css"
import InteractiveGridPattern from "./ui/interactive-grid-pattern"
import AnimatedBackground from "./ui/animated-background"
import BoxReveal from "./ui/box-reveal"

const About = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Cloud Engineer"]
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

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
              <h2 className="typing-text">
                I am a <span>{text}</span>
                <span className="cursor-blink">|</span>
              </h2>
            </BoxReveal>
            <BoxReveal>
              <p>
                Passionate Computer Science Engineering student with hands-on experience in full-stack development
                and <strong>Oracle Cloud Infrastructure</strong> certification. Currently pursuing B.Tech at Lovely 
                Professional University while serving as an Undergraduate Full Stack Intern at Uplyx Solutions. 
                I have completed certifications in <strong>AWS Cloud Essentials</strong> and participated in 
                multiple hackathons, demonstrating practical problem-solving skills.
              </p>
            </BoxReveal>
            <BoxReveal>
              <p>
                I specialize in building modern web applications using the MERN stack, developing REST APIs, and 
                creating scalable solutions for real-world problems. My experience includes working with cloud 
                platforms like AWS and Oracle Cloud, AI integration using Gemini API, and real-time applications 
                with Socket.IO.
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
