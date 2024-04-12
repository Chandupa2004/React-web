import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Servises from './Components/Servises/Servises'
import About from './Components/About/About'
import Menue from'./Components/Menue/Menue'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Servises/>  
      <About/> 
      <Menue/>
    </div>
  )
}
export default App
