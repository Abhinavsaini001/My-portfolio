import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Footer from './component/Footer'
import Skill from './component/Skill'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skill/>
      <Footer/>
    </div>
  )
}

export default App
