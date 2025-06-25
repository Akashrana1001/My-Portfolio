"use client"

import { useEffect, useRef, useState } from "react"
import "../../styles/BoxReveal.css"

const BoxReveal = ({ children, width = "fit-content", boxColor = "#667eea", duration = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsComplete(true);
          }, duration * 1000);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [duration]);

  return (
    <div ref={ref} className="box-reveal-container" style={{ width }}>
      <div
        className={`box-reveal-content ${isComplete ? "revealed" : ""}`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>
      <div
        className={`box-reveal-box ${isVisible ? "animate" : ""}`}
        style={{
          backgroundColor: boxColor,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  )
}

export default BoxReveal
