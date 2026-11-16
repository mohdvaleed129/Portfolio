import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import './App.css'
import Experience from "./components/Experience"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor";

import Certifications from "./components/Certifications"


function App() {
  return (
    <>
    <CustomCursor/>
      <Navbar />

      <Hero/>
      <Stats/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Achievements/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </>
    
  )
}

export default App
