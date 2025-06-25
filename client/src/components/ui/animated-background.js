"use client"

import "../../styles/AnimatedBackground.css"

const AnimatedBackground = ({ variant = "dots", className = "" }) => {
  if (variant === "dots") {
    return (
      <div className={`animated-background dots-background ${className}`}>
        <div className="dots-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="floating-dot"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (variant === "waves") {
    return (
      <div className={`animated-background waves-background ${className}`}>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    )
  }

  if (variant === "particles") {
    return (
      <div className={`animated-background particles-background ${className}`}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    )
  }

  return null
}

export default AnimatedBackground
