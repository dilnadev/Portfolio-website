import React from 'react'
import './Hero.css'
import profile_img from '../../assets/assets/profile_img.svg'



const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile_img} alt="" />
<h1><span>I'm Alex Bennett,</span>frontend developer based in USA</h1>
<p>I build responsive, scalable, and user-friendly web applications using the MERN stack. With experience in full-stack development, REST APIs, authentication systems, and business-focused web solutions, I transform ideas into functional digital products.</p>
   <div className='hero-action'>
    <div className="hero-connect"><a className="anchor-link" href="#contact">
        Connect with me </a>
    </div>
    <div className="hero-resume">
        My Resume
    </div>
   </div>
   
    </div>
  )
}

export default Hero