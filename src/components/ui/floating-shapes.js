"use client"

import "../../styles/FloatingShapes.css"

const FloatingShapes = ({ count = 15 }) => {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 20 + 15,
    shape: Math.random() > 0.5 ? "circle" : "square",
  }))

  return (
    <div className="floating-shapes-container">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`floating-shape ${shape.shape}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
