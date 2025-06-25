"use client"

import { Dock, DockItem } from "./ui/dock"

const FloatingDock = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const dockItems = [
    { icon: "🏠", section: "about", label: "About" },
    { icon: "💼", section: "experience", label: "Experience" },
    { icon: "🚀", section: "projects", label: "Projects" },
    { icon: "⚡", section: "skills", label: "Skills" },
    { icon: "🎓", section: "education", label: "Education" },
    { icon: "📞", section: "contact", label: "Contact" },
  ]

  return (
    <Dock>
      {dockItems.map((item, index) => (
        <DockItem key={index} onClick={() => scrollToSection(item.section)} title={item.label}>
          {item.icon}
        </DockItem>
      ))}
    </Dock>
  )
}

export default FloatingDock
