import { useEffect, useRef } from "react"
import "../styles/Experience.css"
import AnimatedBackground from "./ui/animated-background"

const Experience = () => {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentItems = itemsRef.current
    currentItems.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return (
    <section id="experience" className="experience">
      <AnimatedBackground variant="particles" />
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-timeline">
          <div ref={addToRefs} className="experience-item">
            <div className="experience-content">
              <div className="experience-header">
                <h3>Undergraduate Full Stack Intern</h3>
                <span className="duration">June 2020 – Present</span>
              </div>
              <div className="company">
                <h4>Uplyx Solutions Pvt/Ltd</h4>
                <span className="location">📍 Rajasthan, India</span>
              </div>
              <ul className="achievements">
                <li>Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems</li>
                <li>Developed a MERN-stack web application using MERN Stack for finding real-world problems</li>
                <li>Explored ways to visualize GitHub collaboration in a classroom setting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
