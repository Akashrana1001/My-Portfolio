"use client"

import "../../styles/GradientOrbs.css"

const GradientOrbs = () => {
  const orbs = [
    { id: 1, size: 300, left: 10, top: 20, delay: 0 },
    { id: 2, size: 200, left: 70, top: 60, delay: 2 },
    { id: 3, size: 250, left: 30, top: 80, delay: 4 },
    { id: 4, size: 180, left: 80, top: 10, delay: 6 },
  ]

  return (
    <div className="gradient-orbs-container">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="gradient-orb"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default GradientOrbs
