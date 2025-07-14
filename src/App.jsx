import React from 'react';
import './app.css';
import Navbar from './components/navbar';
import Intro from './components/intro/intro';
import About from './components/about/About';
import Resume from './components/Resume/resume';
import Project from './components/project/Project';
import Skills from './components/skills/Skills';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <div className="nav">
      <Navbar />
      <Intro />
      <About />
      <Resume />
      <Project />
      <Skills />
      <Contact />

    </div>
     
  )
}

export default App
