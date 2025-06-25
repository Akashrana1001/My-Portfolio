"use client"

import { useEffect, useRef, useState } from "react"
import "../../styles/InteractiveGridPattern.css"

const InteractiveGridPattern = ({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className = "",
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
}) => {
  const [squares, setSquares] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const generateSquares = () => {
      const newSquares = []
      for (let i = 0; i < numSquares; i++) {
        newSquares.push({
          id: i,
          x: Math.floor(Math.random() * 40),
          y: Math.floor(Math.random() * 40),
          opacity: Math.random() * maxOpacity,
          delay: Math.random() * duration,
        })
      }
      setSquares(newSquares)
    }

    generateSquares()
    const interval = setInterval(generateSquares, (duration + repeatDelay) * 1000)

    return () => clearInterval(interval)
  }, [numSquares, maxOpacity, duration, repeatDelay])

  return (
    <div ref={containerRef} className={`interactive-grid-pattern ${className}`}>
      <svg width="100%" height="100%" className="grid-svg">
        <defs>
          <pattern id="grid-pattern" width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {squares.map((square) => (
          <rect
            key={square.id}
            x={square.x * width}
            y={square.y * height}
            width={width}
            height={height}
            fill="currentColor"
            opacity={square.opacity}
            className="grid-square"
            style={{
              animationDelay: `${square.delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default InteractiveGridPattern
