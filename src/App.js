import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import FloatingDock from "./components/FloatingDock"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeToggle from "./components/ui/theme-toggle"
import "./styles/App.css"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
      <ThemeToggle /> 
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <FloatingDock />
      </div>
    </ThemeProvider>
  )
}

export default App
