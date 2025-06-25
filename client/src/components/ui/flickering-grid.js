"use client"

import { useEffect, useRef } from "react"
import "../../styles/FlickeringGrid.css"

const FlickeringGrid = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(102, 126, 234)",
  width,
  height,
  className = "",
}) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    let animationId

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = width || rect.width
      canvas.height = height || rect.height
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cols = Math.floor(canvas.width / (squareSize + gridGap))
      const rows = Math.floor(canvas.height / (squareSize + gridGap))

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < flickerChance) {
            ctx.fillStyle = color
            ctx.fillRect(i * (squareSize + gridGap), j * (squareSize + gridGap), squareSize, squareSize)
          }
        }
      }
    }

    const animate = () => {
      drawGrid()
      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [squareSize, gridGap, flickerChance, color, width, height])

  return (
    <div ref={containerRef} className={`flickering-grid-container ${className}`}>
      <canvas ref={canvasRef} className="flickering-grid-canvas" />
    </div>
  )
}

export default FlickeringGrid
