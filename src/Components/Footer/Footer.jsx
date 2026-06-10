import React from 'react'
import './Footer.css'
import user_icon from '../../assets/assets/user_icon.svg'



const Footer = () => {
  return (
    <div className='footer'>
       
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2026 Alex Bennet.All rights reserved</p>
        
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            
        </div>
        </div>
    </div>
  )
}

export default Footer