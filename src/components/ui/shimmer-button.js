"use client"

import "../../styles/ShimmerButton.css"

const ShimmerButton = ({ children, className = "", onClick, ...props }) => {
  return (
    <button className={`shimmer-button ${className}`} onClick={onClick} {...props}>
      <span className="shimmer-button-content">{children}</span>
      <div className="shimmer-button-shimmer"></div>
    </button>
  )
}

export default ShimmerButton
