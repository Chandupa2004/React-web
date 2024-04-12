import React from 'react'
import './About.css'
import Aboutimg from '../../assets/About.png'

function About() {
  return (
    <div className='About'>
      <div className='about-left'>
        <img src={Aboutimg} alt="" className='about-img' />
      </div>
      <div className='about-right'>
        <h3 className='about-h3'>About Us</h3>
        <h2 className='about-h2'>Best Hotdog In The City</h2>
        <p className='about-p'>Ten years ago, a small hotdog shop sprouted in the heart of our bustling town. With just a humble cart and a passionate chef, it quickly became a local favorite.</p>
        <p className='about-p'>Over the years, it has evolved into a thriving establishment, offering an array of gourmet hotdogs with unique toppings and flavors.</p>
        <p className='about-p'>Despite the passage of time, the shop has stayed true to its roots, serving up delicious hotdogs with a side of warmth and nostalgia.</p>
        <p className='about-p'>Today, it stands as a beloved fixture in our community, reminding us of the simple joy found in a perfectly grilled hotdog.</p>
      </div>
    </div>
  )
}

export default About
