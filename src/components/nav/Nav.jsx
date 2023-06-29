import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri'
import {BiSolidMessageEdit} from 'react-icons/bi';
import {useState} from 'react';

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#'); 
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'acitve' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'acitve' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'acitve' : ''}><BiBookAlt/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'acitve' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#services' ? 'acitve' : ''}><BiSolidMessageEdit/></a>

    </nav>
  )
}

export default Nav
