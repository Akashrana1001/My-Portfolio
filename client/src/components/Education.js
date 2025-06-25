import "../styles/Education.css"

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "B-tech Computer Science and Engineering",
      duration: "Aug. 2027 – Aug 2027",
    },
    {
      institution: "National Public School",
      location: "Haryana, India",
      degree: "Higher Studies",
      duration: "Aug. 2018 – May 2021",
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3>{edu.institution}</h3>
                <span className="location">{edu.location}</span>
              </div>
              <div className="education-details">
                <h4>{edu.degree}</h4>
                <span className="duration">{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
