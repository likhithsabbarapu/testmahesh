import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

import Certifications from './components/Certification'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'
import './index.css'

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
            <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Strengths />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
