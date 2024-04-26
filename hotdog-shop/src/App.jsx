import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Servises from './Components/Servises/Servises'
import About from './Components/About/About'
import Menue from'./Components/Menue/Menue'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Servises/>  
      <About/> 
      <Menue/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App
