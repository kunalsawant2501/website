import React from 'react'
import Hero from './hero'
import About from './about'
import Contact from './contact'
import Experience from './experience'
import Navbar from '../components/modules/navbar'
import '../styles/appStyle'

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
