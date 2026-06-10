import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo1.svg'
import underline from '../../assets/assets/nav_underline.svg'
import  menu_open from '../../assets/assets/menu_open.svg'
import  menu_close from '../../assets/assets/menu_close.svg'



const Navbar = () => {
const [menu,setMenu]=useState('home');
const menuRef=useRef();

const openMenu =() =>{
  menuRef.current.style.right="0";
}
const closeMenu=() =>{
  menuRef.current.style.right="-350px";
}


  return (
 <div className='navbar'>
  <img src={logo} alt="" />
 <img src={menu_open} onClick={openMenu}  className='nav-mob-open' alt=""  />
<ul ref={menuRef} className="nav-menu">
  <img className='nav-mob-close' src={menu_close} onClick={closeMenu} alt="" />
    <li > <a className="anchor-link" href="#home"><p onClick={() =>setMenu("home")}>Home</p></a> {menu==='home'? <img src={underline} />: <></> }</li>
    <li> <a className="anchor-link" href="#about"><p onClick={() =>setMenu("about")}>About Me</p> </a> {menu==='about'? <img src={underline} />: <></> }</li>
     <li> <a className="anchor-link" href="#work"><p onClick={() =>setMenu("work")}>Portfolio</p> </a> {menu==='work'? <img src={underline} />: <></> }</li>
    <li> <a className="anchor-link" href="#contact"><p onClick={() =>setMenu("contact")}>Contact</p> </a>  {menu==='contact'? <img src={underline} />: <></> }</li>
</ul>
<div className="nav-connect" ><a className="anchor-link" href="#contact">
    Connect With Me</a>
</div>
  </div>
  )
}

export default Navbar