import React from 'react'
import './About.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import profile_img from '../../assets/assets/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        I build responsive, scalable web applications that solve real user problems from authentication systems and dynamic UIs to REST APIs and database design. I focus on writing clean, maintainable code that works reliably in production.
                    </p>
             
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p> HTML & CSS</p><hr style={{width:'80%'}} /> </div>
                    <div className="about-skill"> <p> JavaScript</p><hr style={{width:'70%'}} /> </div>
                    <div className="about-skill"> <p> React JS</p><hr style={{width:'60%'}} /> </div>
                    <div className="about-skill"> <p> Node JS</p><hr style={{width:'50%'}} /> </div>
                    <div className="about-skill"> <p> Express JS</p><hr style={{width:'50%'}} /> </div>
                    <div className="about-skill"> <p> MongoDB</p><hr style={{width:'60%'}} /> </div>
                    
                </div>
            </div>
        </div>
        </div>
  )
}

export default About