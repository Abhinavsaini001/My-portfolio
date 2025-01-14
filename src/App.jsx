import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Test from './component/Test'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Test/>
    </div>
  )
}

export default App
