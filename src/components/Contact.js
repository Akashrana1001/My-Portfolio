"use client"

import "../styles/Contact.css"
import ShimmerButton from "./ui/shimmer-button"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
              want to connect, feel free to reach out!
            </p>
            <div className="contact-cta">
              <ShimmerButton onClick={() => (window.location.href = "mailto:sandeepakash537@gmail.com")}>
                <span className="icon">✉️</span>
                Send Email
              </ShimmerButton>
            </div>
          </div>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>8307537566</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>sandeepakash537@gmail.com</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/akashrana100" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/akashrana100
                </a>
              </div>
            </div>
            <div className="contact-method">
              <span className="icon">🔗</span>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/akashrana1001" target="_blank" rel="noopener noreferrer">
                  github.com/akashrana1001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
