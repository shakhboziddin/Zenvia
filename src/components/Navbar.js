import React, { useState } from 'react'
import LogoItem from '../images/logo/Frame white.png'
import LogoText from '../images/logo/Group white.png'
import { Link } from 'react-router-dom'
import './navbar.css'
import { FiAlignRight, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <div className={`navbar_main ${isMenuOpen ? 'navbar_active' : ''}`}>
        <div className='navbar_logo'>
          <img src={LogoItem} className='navbar_logo_item' alt="" />
          <img src={LogoText} className='navbar_logo_text' alt="" />
        </div>

        <div className='navbar_text'>
          <a href="#employees">AI Team</a>
          <a href="#solutions">Personalized Systems</a>
          <a href="#works">Case Studies</a>
        </div>

        <div className="navbar_btn">
          <Link className='navbar_btn_a' to={'/contact'}>Talk to Us</Link>
        </div>

        <div className="navbar_menu_btn" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className='navbar_menu_btn_icon' /> : <FiAlignRight className='navbar_menu_btn_icon' />}
        </div>
      </div>

      <div className={`phone_media ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className='phone_media_menu'>
          <a href="#employees" className='phone_menu_btn_a' onClick={toggleMenu}>AI Team</a>
          <a href="#solutions" className='phone_menu_btn_a' onClick={toggleMenu}>Personalized Systems</a>
          <a href="#works" className='phone_menu_btn_a' onClick={toggleMenu}>Case Studies</a>
          <div className="phone_media_menu_btn">
            <Link className='navbar_btn_phone_a' to={'/contact'} onClick={toggleMenu}>Talk to Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
