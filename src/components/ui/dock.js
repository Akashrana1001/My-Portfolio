"use client"

import { useState } from "react"
import "../../styles/Dock.css"

const Dock = ({ children, className = "" }) => {
  return (
    <div className={`dock-container ${className}`}>
      <div className="dock">{children}</div>
    </div>
  )
}

const DockItem = ({ children, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`dock-item ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.2) translateY(-10px)" : "scale(1) translateY(0)",
      }}
    >
      {children}
    </div>
  )
}

export { Dock, DockItem }
